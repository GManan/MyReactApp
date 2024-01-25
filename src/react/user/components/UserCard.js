
const UserCard = ({ user, onDelete, onEdit }) => {

    return (user &&
        <div id={`UserItem${user.userID}`} key={user.userID} className="card user-card">
            <div className="user-content-container">
                <p className="label">User ID:</p>
                <p className="value">{user.userID}</p>
            </div>
            <hr className="user-content-separator" />
            <div className="user-content-container">
                <p className='label'>first name: </p>
                <p className='value'> {user.firstName}</p>
            </div>
            <hr className="user-content-separator" />
            <div className="user-content-container">
                <p className='label'>lastName: </p>
                <p className='value'>{user.lastName}</p>
            </div>
            <div className='user-card-actions'>
                <button
                    id={`UserItemDeleteButton${user.userID}`}
                    className="btn btn-danger"
                    onClick={() => onDelete(user.userID)}
                >
                    Delete
                </button>
                <button
                    id={`UserItemEditButton${user.userID}`}
                    className="btn btn-primary"
                    onClick={() => onEdit(user.userID)}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};
export default UserCard;
