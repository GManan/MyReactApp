import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../App';
import { useAuth } from '../../../App';
import AddUserModal from '../components/AddUserModal';
import DeleteUserConfirmationDialog from '../components/DeleteUserConfirmationDialog';
import EditUserModal from '../components/EditUserModal';
import UserCard from '../components/UserCard';
import { addUserAsync, deleteUserAsync, editUserAsync, getUsersAsync } from '../redux/actions/userActions';

const UserManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // const isAdmin = useSelector((state) => state.auth.isAdmin);
    const { isLoggedIn, isAdmin, token } = useAuth();
    console.log("is logged in ", isLoggedIn);
    console.log("is admin ", isAdmin);
    console.log("token ", token);
    const users = useSelector((state) => state.users.users);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if (isLoggedIn) {
            // Dispatch the action to fetch users when the component mounts
            dispatch(getUsersAsync(token));
        } else {
            // If not logged-in or not an admin, navigate to the home page
            navigate('/');
        }
    }, [dispatch, isAdmin, isLoggedIn, navigate, token]);

    //ADD USER
    const handleAddUserModalClose = () => {
        setShowAddUserModal(false);
    };
    const handleAddUserModalOpen = () => {
        setShowAddUserModal(true);
    };
    const handleAddUserSave = (newUser) => {
        console.log("hanle save edit user ", newUser);
        dispatch(addUserAsync(newUser, token))
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
        dispatch(editUserAsync(editedUser, token))
    };

    //DELETE USER
    const handleDeleteConfirDialogVisible = (user) => {
        setShowDeleteConfirm(true);
        setSelectedUser(user);
        console.log("selected user ", selectedUser);
    }
    const handleDelete = () => {
        console.log(" handle delete , confirmed ", selectedUser);
        dispatch(deleteUserAsync(selectedUser.userID, token));
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