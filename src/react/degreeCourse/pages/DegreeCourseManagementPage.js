import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../App';
import CreateDegreeCourseApplication from '../../degreeCourseApplication/components/AddDegreeCourseApplicationModal';
import AddDegreeCourseModal from '../components/AddDegreeCourseModal';
import DeleteDCConfirmationDialog from '../components/DeleteDegreeCourseDialog';
import EditDegreeCourseModal from '../components/EdirDegreeCourseModal';
import DegreeCourseCard from '../components/degreeCourseCard';
import { addDegreeCourseAsync, deleteDegreeCourseAsync, editDegreeCoursesAsync, getDegreeCoursesAsync } from '../redux/actions/degreeCourseActions';

const DegreeCourseManagementPage = () => {
    const { isLoggedIn, isAdmin, token } = useAuth();
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedDC, setSelectedDC] = useState({});
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateDCApp, setShowCreateDCApp] = useState(false)


    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            console.log("showAddModal ", showAddModal)
            console.log(" show delete modal ", showDeleteConfirm)
            // Dispatch the action to fetch Studiengänge when the component mounts
            dispatch(getDegreeCoursesAsync(token));
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
        console.log(" handle delete , confirmed ", selectedDC);
        dispatch(deleteDegreeCourseAsync(selectedDC.id, token));
        setShowDeleteConfirm(false);
    }
    // }
    const closeAddDegreeModal = () => {
        console.log("closing add degree modal");
        setShowAddModal(false);
    }
    const closeCreateDegreeCourseApplicationClose = () => {
        console.log("closing add degree course apllication modal");
        setShowCreateDCApp(false);
    }
    const handleAddDegreeCourseSave = (payload) => {
        console.log("closing addDegree course modal")
        dispatch(addDegreeCourseAsync(payload, token))
        setShowAddModal(false)
    }
    const handleCreateDegreeCourseApplicationSave = (payload) => {
        console.log("saving addDegree course application save ", payload)
        // dispatch(addDegreeCourseAsync(payload, token))
        setShowAddModal(false)
    }
    const handleCreateDegreeCourseClick = () => {
        console.log(" open add dc modal", showAddModal);
        setShowAddModal(true);
        console.log(" open add dc modalssssssss", showAddModal);
    }
    const onEditDegreeCourse = (degreeCourse) => {
        console.log("edit degree course ", degreeCourse);
        setSelectedDC(degreeCourse)
        setShowCreateDCApp(true);
    };
    const onDeleteDegreeCourse = (degreeCourse) => {
        setSelectedDC(degreeCourse);
        console.log("edit degree onDeleteDegreeCourse ", selectedDC);
        setShowDeleteConfirm(true);
    };
    const handleDeleteDialogCLose = () => {
        setShowDeleteConfirm(false);
    }
    const onCreateApplication = (degreeCourse) => {
        console.log("edit degree onCreateApplication ", degreeCourse);
        setSelectedDC(degreeCourse)
        setShowCreateDCApp(true);
    };
    const degreeCourses = useSelector((state) => state.degreeCourses.degreeCourses);


    return (
        <div id='DegreeCourseManagementPageListComponent' className='user-management'>
            <h1> Studeingang liste</h1>
            <div className='degree-Course-action'>
                <button id='DegreeCourseManagementPageCreateDegreeCourseButton' className='btn btn-primary' onClick={handleCreateDegreeCourseClick}>add degree course</button>
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