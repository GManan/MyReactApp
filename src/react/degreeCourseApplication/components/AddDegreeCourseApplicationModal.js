import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CreateDegreeCourseApplication = ({ showProp, handleClose, degreeCourseData, onSave }) => {

    // const [currentUser] = useState(degreeCourseData);
    const [editedDegreeCOurse, setEditedDegreeCOurse] = useState(degreeCourseData);
    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const user = useSelector((state) => state.auth.user);
    const [years, setYears] = useState([]);
    const [month, setMonth] = useState(0);
    useEffect(() => {
        // Update the editedDegreeCOurse state when degreeCourseData changes
        setEditedDegreeCOurse(degreeCourseData || {});
        console.log("degreeCourseData  ", degreeCourseData);
        console.log("isAdmin", isAdmin);
        console.log("user ", user);
        const currYear = new Date().getFullYear();
        const currMonth = new Date().getMonth() + 1;
        const futureYears = Array.from({ length: 3 }, (_, index) => currYear + index);
        setYears(futureYears);
        setMonth(currMonth);
        console.log(years);
        console.log("currMonth ", currMonth);

    }, [degreeCourseData]);
    const onAddDegreeCourseApplication = (event) => {
        event.preventDefault();
        const payload = Object.fromEntries(new FormData(event.target));
        onSave(payload);
        handleClose()
    };

    const onHandleClose = () => {
        handleClose();
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("prev degree course", editedDegreeCOurse);
        setEditedDegreeCOurse((prevDegCourse) => ({ ...prevDegCourse, [name]: value }));
        console.log("prev degree course", editedDegreeCOurse);
    }
    return (
        <Modal show={showProp} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Application for : {degreeCourseData.shortName} </Modal.Title>
            </Modal.Header>
            <form onSubmit={onAddDegreeCourseApplication} id='DegreeCourseManagementPageCreateComponent'>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseName' className="form-label">Studiengang-Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseName'
                        value={degreeCourseData.name}
                        readOnly
                    />
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseApplicationEditUserID' className="form-label">User ID</label>
                    {isAdmin ? (
                        <input
                            type='text'
                            className='form-control'
                            id='CreateDegreeCourseApplicationEditUserID'
                            name='applicantUserID'
                            placeholder='User ID'
                            required
                        />
                    ) : (
                        <input
                            type='text'
                            className='form-control'
                            id='CreateDegreeCourseApplicationEditUserID'
                            name='applicantUserID'
                            value={user}
                            readOnly
                        />)
                    }
                </div>

                <div className="form-input-lv">
                    <label htmlFor='„CreateDegreeCourseApplicationEditTargetPeriodYear' className="form-label">Year</label>
                    <select
                        type='select'
                        className='form-control'
                        id='CreateDegreeCourseApplicationEditTargetPeriodYear'
                        name='targetPeriodYear'
                        required
                    >
                        <option value="">Choose the year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditDepartmentShortName' className="form-label"> Semester</label>
                    <select
                        type='select'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditDepartmentShortName'
                        name='targetPeriodShortName'
                        required
                    >
                        <option value="">Choose Semester</option>
                        {month < 5 ? (
                            <option value='WiSe'>Winter Semester</option>
                        ) : (null)}
                        <option value='SoSe'>Summer Semester</option>
                    </select>
                </div>
                <Modal.Footer>
                    <Button className='btn btn-warning' onClick={onHandleClose} id='OpenDegreeCourseManagementPageListComponentButton'>
                        Abbrechen
                    </Button>
                    <Button type='submit' className='btn btn-primary' id='CreateDegreeCourseApplicationCreateButton '>
                        Speichern
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default CreateDegreeCourseApplication;
