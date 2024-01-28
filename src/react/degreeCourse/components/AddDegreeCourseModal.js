import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddDegreeCourse = ({ showProp, handleClose, onSave }) => {

    const [fachBereichReq, setFachBereichReq] = useState(false)

    useEffect(() => {

    }, [fachBereichReq]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (value.length > 0) {
            console.log(" length ", value.length)
            setFachBereichReq(true);
        } else {
            setFachBereichReq(false);
        }


    }
    const onAddDegreeCourse = (event) => {
        event.preventDefault();
        const payload = Object.fromEntries(new FormData(event.target));

        onSave(payload);
    };
    const onHandleClose = () => {
        handleClose();
    }
    return (
        <Modal show={showProp} onHide={handleClose}>
            <div >
                <h2 className='modal-title'>
                    Studiengang anlegen
                </h2>
            </div>
            <form onSubmit={onAddDegreeCourse} id='DegreeCourseManagementPageCreateComponent'>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditName' className="form-label">Studiengang-Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditName'
                        name='name'
                        placeholder='Studiengang-Name'
                        required
                    />
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditShortName' className="form-label">Studiengang-Kurzbezeichnung</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditShortName'
                        name='shortName'
                        placeholder='Studiengang-Kurzbezeichnung'
                    />
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditUniversityName' className="form-label">Univercity-Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditUniversityName'
                        name='universityName'
                        placeholder='Univercity-Name'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditUniversityShortName' className="form-label">Univercity-Kurzbezeichnung</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditUniversityShortName'
                        name='universityShortName'
                        // value={universityShortName}
                        placeholder='Univercity-Kurzbezeichnung'
                    />
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditDepartmentName' className="form-label">Fachbereich-Name</label>
                    {fachBereichReq ? (
                        <input
                            type='text'
                            className='form-control'
                            id='CreateDegreeCourseComponentEditDepartmentName'
                            name='departmentName'
                            placeholder='Fachbereich-Name eingeben'
                            required
                        />
                    ) : (
                        <input
                            type='text'
                            className='form-control'
                            id='CreateDegreeCourseComponentEditDepartmentName'
                            name='departmentName'
                            placeholder='Fachbereich-Name eingeben'
                        />
                    )}
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditDepartmentShortName' className="form-label">Fachbereich-Kurzbezeichnung</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditDepartmentShortName'
                        name='departmentShortName'
                        placeholder='Fachbereich-Kurzbezeichnung eingeben'
                    />
                </div>
                <Modal.Footer>
                    <Button className='btn btn-secondary' onClick={onHandleClose} id='OpenDegreeCourseManagementPageListComponentButton'>
                        Cancel
                    </Button>
                    <Button type='submit' className='btn btn-success' id='CreateDegreeCourseComponentCreateDegreeCourseButton'>
                        Save
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default AddDegreeCourse;
