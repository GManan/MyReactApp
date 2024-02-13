import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../App';
import CreateDegreeCourseApplication from '../../degreeCourseApplication/components/AddDegreeCourseApplicationModal';
import AddDegreeCourseModal from '../components/AddDegreeCourseModal';
import DeleteDCConfirmationDialog from '../components/DeleteDegreeCourseDialog';
import EditDegreeCourseModal from '../components/EdirDegreeCourseModal';
import DegreeCourseCard from '../components/degreeCourseCard';
import { addDegreeCourseApplicationAsync, addDegreeCourseAsync, deleteDegreeCourseAsync, editDegreeCoursesAsync, getDegreeCoursesAsync } from '../redux/actions/degreeCourseActions';

const DegreeCourseManagementPage = () => {
    const { isLoggedIn, isAdmin, token } = useAuth();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedDC, setSelectedDC] = useState({});
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateDCApp, setShowCreateDCApp] = useState(false)


    const degreeCourses = useSelector((state) => state.degreeCourses.degreeCourses);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            console.log("degreeCourses ", degreeCourses)
            console.log(" show delete modal ", showDeleteConfirm)
            // Dispatch the action to fetch Studiengänge when the component mounts
            dispatch(getDegreeCoursesAsync(token));
            if (degreeCourses) {
                degreeCourses.map((app) => (

                    console.log("degreeCorseApplications ", app)
                ))

            }
        } else {
            navigate('/');
        }
    }, [selectedDC, dispatch, isLoggedIn, navigate, token, showAddModal]);

    const handleSaveEditedDC = (payload) => {
        try {
            dispatch(editDegreeCoursesAsync(payload, token));
        } catch (error) {
            console.error("Error handling save: ", error);
        }
    };
    const handleEditModalClose = () => {

        setShowEditModal(false);
    };
    // const createDegreeCourse = () => {
    const handleDelete = () => {

        dispatch(deleteDegreeCourseAsync(selectedDC.id, token));
        setShowDeleteConfirm(false);
    }
    // }
    const closeAddDegreeModal = () => {

        setShowAddModal(false);
    }
    const closeCreateDegreeCourseApplicationClose = () => {

        setShowCreateDCApp(false);
    }
    const handleAddDegreeCourseSave = (payload) => {


        if (payload.shortName.length < 2) {
            payload.shortName = createShortName(payload.name);
        }
        if (payload.departmentShortName.length < 2) {
            payload.departmentShortName = createShortName(payload.departmentName);
        }
        if (payload.universityShortName.length < 2) {
            payload.universityShortName = createShortName(payload.universityName);
        }
        dispatch(addDegreeCourseAsync(payload, token))
        setShowAddModal(false)
    }
    const handleCreateDegreeCourseApplicationSave = (payload) => {



        payload.degreeCourseID = selectedDC.id;
        dispatch(addDegreeCourseApplicationAsync(payload, token));
        setShowAddModal(false);
    }
    const handleCreateDegreeCourseClick = () => {

        setShowAddModal(true);

    }
    const onEditDegreeCourse = (degreeCourse) => {

        setSelectedDC(degreeCourse)
        setShowEditModal(true);
    };
    const onDeleteDegreeCourse = (degreeCourse) => {
        setSelectedDC(degreeCourse);

        setShowDeleteConfirm(true);
    };
    const handleDeleteDialogCLose = () => {
        setShowDeleteConfirm(false);
    }
    const onCreateApplication = (degreeCourse) => {

        setSelectedDC(degreeCourse)
        setShowCreateDCApp(true);
    };

    const createShortName = (fullName) => {
        const words = fullName.split(' ');
        const shortName = words.map(word => word.charAt(0)).join('');

        return shortName.toUpperCase();
    };
    return (
        <div id='DegreeCourseManagementPageListComponent' className='user-management'>
            <div className='page-header'>
                <h2 > DEGREE COURSE LIST </h2>
            </div>
            <hr />
            <div className='user-managment-action'>
                <button id='DegreeCourseManagementPageCreateDegreeCourseButton' className='btn btn-warning' onClick={handleCreateDegreeCourseClick}>add degree course</button>
            </div>
            <div className="degreeCourseCard user-cards-container">
                {degreeCourses && degreeCourses.map((degreeCourse) => (
                    <DegreeCourseCard
                        degreeCourse={degreeCourse}
                        onEdit={() => onEditDegreeCourse(degreeCourse)}
                        onDelete={() => onDeleteDegreeCourse(degreeCourse)}
                        onCreateApplication={() => onCreateApplication(degreeCourse)}>
                    </DegreeCourseCard>
                ))}
            </div>
            <EditDegreeCourseModal
                showProp={showEditModal}
                handleClose={handleEditModalClose}
                degreeCourseData={selectedDC}
                onSave={handleSaveEditedDC}
            />
            <DeleteDCConfirmationDialog
                showProp={showDeleteConfirm}
                handleClose={handleDeleteDialogCLose}
                onDelete={handleDelete}
                dcData={selectedDC || {}}
            />
            <AddDegreeCourseModal
                existingDegreeCourses={degreeCourses}
                showProp={showAddModal}
                handleClose={closeAddDegreeModal}
                onSave={handleAddDegreeCourseSave}
            />
            <CreateDegreeCourseApplication
                showProp={showCreateDCApp}
                handleClose={closeCreateDegreeCourseApplicationClose}
                degreeCourseData={selectedDC}
                onSave={handleCreateDegreeCourseApplicationSave}
                isAdmin={isAdmin}
            />
        </div >
    )
}
export default DegreeCourseManagementPage;