
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App';
import EditUserModal from '../components/EditUserModal';
import { addUserAsync, deleteUserAsync, editUserAsync, getUsersAsync } from '../redux/Actions/userActions';
import AddUserModal from '../components/AddUserModal';
//this is too suficating, needs editing man, projects your fucking innet mess
const UserCard = ({ user, onDelete, onEdit }) => {
    return (
        <div id={`UserItem${user.userID}`} key={user.userID} className="card user-card" style={{
            // alignContent: 'left',
            width: '18rem'
        }}>
            <p>User ID : {user.userID}</p>
            <hr />
            <p>first name : {user.firstName} </p>
            <hr />
            <p>last name : {user.lastName}</p>
            <hr />
            <div >
                <button id={`UserItemDeleteButton${user.userID}`} className='btn btn-danger' onClick={() => onDelete(user.useriD)}>Delete</button>
                <button id={`UserItemEditButton${user.userID}`} className='btn btn-primary' onClick={() => onEdit(user.useriD)}>Edit</button>
            </div>
        </div>
    );
};
const DeleteUserConfirmationDialog = ({ onDelete, showProp, handleClose, userData }) => {

    const dialogId = `DeleteDialogUser${userData.userID}`;

    const handleDelete = () => {
        console.log("delete ", userData);
        onDelete()
    }
    const handleCancel = () => {
        handleClose();
    }
    return (
        <div id={`UserItemDeleteButton${userData.userID}`} >

            <Modal show={showProp} >
                <Modal.Header closeButton>
                    <Modal.Title>Delete {userData.userID}?</Modal.Title>
                </Modal.Header>

                <Modal.Footer >
                    <Button id='DeleteDialogCancelButton' variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button id='DeleteDialogConfirmButton' variant="primary" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};
const UserManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const users = useSelector((state) => state.users.users);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        console.log(" show Delete dialog ", showDeleteConfirm)
        if (isLoggedIn && isAdmin) {
            // Dispatch the action to fetch users when the component mounts
            dispatch(getUsersAsync());
        } else {
            // If not logged in or not an admin, navigate to the home page
            navigate('/');
        }
    }, []);
    //ADD USER
    const handleAddUserModalClose = () => {
        setShowEditModal(false);
    };
    const handleAddUserModalOpen = (user) => {
        console.log("handle edit ", user);
        setShowAddUserModal(true);        // setSelectedUser(user);
    };
    const handleAddUserSave = (newUser) => {
        console.log("hanle save edit user ", newUser);
        dispatch(addUserAsync(newUser))
        setShowAddUserModal(false);
    };

    //EDIT USER
    const handleEditModalClose = () => {
        setShowEditModal(false);
    };
    const handleOpenEditUser = (user) => {
        console.log("handle edit ", user);
        setShowEditModal(true);
        setSelectedUser(user);
    };
    const handleSaveEditedUser = (editedUser) => {
        console.log("hanle save edit user ", editedUser);
        dispatch(editUserAsync(editedUser))
    };

    //DELETE USER
    const handleDeleteConfirDialogVisible = (user) => {
        setShowDeleteConfirm(true);
        setSelectedUser(user);
        console.log("selected user ", selectedUser);
    }
    const handleDelete = () => {
        console.log(" handle delete , confirmed ", selectedUser);
        dispatch(deleteUserAsync(selectedUser.userID));
        setShowDeleteConfirm(false);
    }
    const onDeleteCancel = () => {
        setShowDeleteConfirm(false);
    }


    return (
        <div id="UserManagementPage" className='user-management' >
            < h1 > User Management Page</h1 >
            <div>
                <button id='UserManagementPageCreateUserButton' className='btn btn-primary' onClick={handleAddUserModalOpen}>addUser</button>
            </div>
            <div className="user-cards-container">
                {users.map((user) => (
                    <UserCard
                        key={user.userID}
                        user={user}
                        // pass the function reference ()=> rather than calling it you noob
                        onDelete={() => handleDeleteConfirDialogVisible(user)}
                        onEdit={() => handleOpenEditUser(user)}
                    />
                ))}
            </div>
            <DeleteUserConfirmationDialog
                showProp={showDeleteConfirm}
                handleClose={onDeleteCancel}
                userData={selectedUser || {}}
                onDelete={handleDelete}
            />
            <EditUserModal
                showProp={showEditModal}
                handleClose={handleEditModalClose}
                userData={selectedUser}
                onSave={handleSaveEditedUser}
            ></EditUserModal>
            <AddUserModal
                showProp={showAddUserModal}
                handleClose={handleAddUserModalClose}
                onSave={handleAddUserSave}
            ></AddUserModal>
        </div >
    );
};

export default UserManagement;