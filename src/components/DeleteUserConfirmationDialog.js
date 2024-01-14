import React from 'react';

const DeleteUserConfirmationDialog = ({ show, userId, onConfirm, onCancel }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="delete-user-confirmation-dialog">
            <p>{`Delete user with ID ${userId}?`}</p>
            <div>
                <button onClick={() => onConfirm(userId)}>OK</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export { DeleteUserConfirmationDialog };
