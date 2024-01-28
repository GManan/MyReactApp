import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../App';
import DegreeCourseApplicationCard from '../components/DegreeCourseApplicationCard';
import DeleteDegreeCourseApplicationDialog from '../components/DeleteDegreeCourseApplicationDialog';
import { deleteDegreeCourseApplicationsAsync, getDegreeCourseApplicationsAsync } from '../redux/actions/DegreeCourseApplicationActions';

const DegreeCourseApplicationManagmentPage = () => {
    const { isLoggedIn, isAdmin, token } = useAuth();
    const degreeCorseApplications = useSelector((state) => state.degreeCourseApplication.degreeCourseApplications)
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedDCApp, setSelectedDCApp] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            console.log("showAddModal ", showAddModal)
            console.log(" show delete modal ", showDeleteConfirm)
            // Dispatch the action to fetch applications when the component mounts
            dispatch(getDegreeCourseApplicationsAsync(token));
            if (degreeCorseApplications) {
                degreeCorseApplications.map((app) => (

                    console.log("12degreeCorseApplications ", app)
                ))

            }
        } else {
            navigate('/');
        }
    }, [selectedDCApp, dispatch, isLoggedIn, navigate, token, showAddModal]);


    const handleDelete = () => {

        dispatch(deleteDegreeCourseApplicationsAsync(selectedDCApp.id, token))
        setShowDeleteConfirm(false);
    }

    const onDeleteDegreeCourseApplication = (degreeCourseApp) => {
        setSelectedDCApp(degreeCourseApp)

        setShowDeleteConfirm(true);
    };
    const handleDeleteDialogCLose = () => {
        setShowDeleteConfirm(false);
    }

    return (
        <div id='DegreeCourseApplicationManagementPageListComponent' className='user-management'>
            <h2>DEGREE COURSE APPLICATION LIST</h2>
            <hr />
            <div className='dca-cards-container'>
                {degreeCorseApplications && degreeCorseApplications.map((application) => (
                    <DegreeCourseApplicationCard
                        application={application}
                        onDelete={() => onDeleteDegreeCourseApplication(application)}
                    ></DegreeCourseApplicationCard>
                ))
                }
            </div>
            <DeleteDegreeCourseApplicationDialog
                showProp={showDeleteConfirm}
                dcAppData={selectedDCApp}
                handleClose={handleDeleteDialogCLose}
                onDelete={handleDelete}
            ></DeleteDegreeCourseApplicationDialog>
        </div>
    )
}
export default DegreeCourseApplicationManagmentPage;

