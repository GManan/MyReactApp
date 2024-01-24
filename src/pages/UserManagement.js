import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App';
import AddUserModal from '../components/User/AddUserModal';
import DeleteUserConfirmationDialog from '../components/User/DeleteUserConfirmationDialog';
import EditUserModal from '../components/User/EditUserModal';
import UserCard from '../components/User/UserCard';
import { addUserAsync, deleteUserAsync, editUserAsync, getUsersAsync } from '../redux/Actions/userActions';
import { useAuth } from '../App';

const UserManagement = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // const isAdmin = useSelector((state) => state.auth.isAdmin);
    const { isLoggedIn, isAdmin } = useAuth();

    const users = useSelector((state) => state.users.users);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if (isLoggedIn && isAdmin) {
            // Dispatch the action to fetch users when the component mounts
            dispatch(getUsersAsync());
        } else {
            // If not logged-in or not an admin, navigate to the home page
            navigate('/');
        }
    }, []);

    //ADD USER
    const handleAddUserModalClose = () => {
        setShowAddUserModal(false);
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
            < h1> User Management Page</h1 >
            <div className='user-managment-action'>
                <button id='UserManagementPageCreateUserButton' className='btn btn-primary' onClick={handleAddUserModalOpen}>addUser</button>
            </div>
            <div className="user-cards-container">
                {users && users.map((user) => (
                    <UserCard
                        key={user.userID}
                        user={user}
                        {...console.log("test, ", user)}
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