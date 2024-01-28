import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddDegreeCourse = ({ showProp, handleClose, onSave }) => {

    const [fachBereichReq, setFachBereichReq] = useState(false)
    // const [universityShortName, setUniversityShortName] = useState('');
    // const [departmentShortName, setDepartmentShortName] = useState('');
    useEffect(() => {
        // console.log("in add degree course", showProp);
        // console.log(" fachBereichReq ", fachBereichReq);
        // console.log("existing defree courses ", existingDegreeCourses)
    }, [fachBereichReq]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(" fachBereichReq value ", name, value.length);
        if (value.length > 0) {
            console.log(" length ", value.length)
            setFachBereichReq(true);
        } else {
            setFachBereichReq(false);
        }
        console.log(" fachBereichReq ", fachBereichReq);
        console.log(" e on change ", name, value);
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
                    <label htmlFor='CreateDegreeCourseComponentEditUniversityName' className="form-label">Universität-Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditUniversityName'
                        name='universityName'
                        placeholder='Universität-Name'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-input-lv">
                    <label htmlFor='CreateDegreeCourseComponentEditUniversityShortName' className="form-label">Universität-Kurzbezeichnung</label>
                    <input
                        type='text'
                        className='form-control'
                        id='CreateDegreeCourseComponentEditUniversityShortName'
                        name='universityShortName'
                        // value={universityShortName}
                        placeholder='Universität-Kurzbezeichnung'
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
                    <Button className='btn btn-warning' onClick={onHandleClose} id='OpenDegreeCourseManagementPageListComponentButton'>
                        Abbrechen
                    </Button>
                    <Button type='submit' className='btn btn-primary' id='CreateDegreeCourseComponentCreateDegreeCourseButton'>
                        Speichern
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};

export default AddDegreeCourse;
