import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditDegreeCourseModal = ({ showProp, handleClose, degreeCourseData, onSave }) => {

    // const [currentUser] = useState(degreeCourseData);
    const [editedDegreeCOurse, setEditedDegreeCOurse] = useState(degreeCourseData);
    useEffect(() => {
        // Update the editedDegreeCOurse state when degreeCourseData changes
        console.log("user data ", degreeCourseData);
        setEditedDegreeCOurse(degreeCourseData || {});
        console.log("user data after ", degreeCourseData);

    }, [degreeCourseData]);

    const handleSave = () => {
        console.log("edited user ", editedDegreeCOurse);
        onSave(editedDegreeCOurse);
        handleClose();
        return editedDegreeCOurse;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("prev degree course", editedDegreeCOurse);
        setEditedDegreeCOurse((prevDegCourse) => ({ ...prevDegCourse, [name]: value }));
        console.log("prev degree course", editedDegreeCOurse);
    }
    return (
        <Modal show={showProp} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Studiengang: {degreeCourseData.id} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='DegreeCourseManagementPageEditComponent'>
                    <Form.Group >
                        <Form.Label>Studiengang-Name</Form.Label>
                        <Form.Control id='EditDegreeCourseComponentEditName'
                            type="text"
                            placeholder={degreeCourseData.name}
                            name="name"
                            onChange={handleChange}
                        />
                        <Form.Label>Studiengang-Kurzbezeichnung</Form.Label>
                        <Form.Control id='„EditDegreeCourseComponentEditShortName'
                            type="text"
                            placeholder={degreeCourseData.shortName}
                            name="shortName"
                            onChange={handleChange}
                        />
                        <Form.Label>Universität-Name</Form.Label>
                        <Form.Control id='EditDegreeCourseComponentEditUniversityName'
                            type="text"
                            placeholder={degreeCourseData.universityName}
                            name="universityName"
                            onChange={handleChange}
                        />
                        <Form.Label>Universität-Kurzbezeichnung</Form.Label>
                        <Form.Control id='EditDegreeCourseComponentEditUniversityShortName'
                            type="text"
                            placeholder={editedDegreeCOurse.universityShortName}
                            name="universityShortName"
                            onChange={handleChange}
                        />
                        <Form.Label>Fachbereich-Name</Form.Label>
                        <Form.Control id='EditDegreeCourseComponentEditDepartmentName'
                            type="text"
                            placeholder={editedDegreeCOurse.departmentName}
                            name="departmentName"
                            onChange={handleChange}
                        />
                        <Form.Label>Fachbereich-Name</Form.Label>
                        <Form.Control id='EditDegreeCourseComponentEditDepartmentShortName'
                            type="text"
                            placeholder={editedDegreeCOurse.departmentShortName}
                            name="departmentShortName"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id='OpenDegreeCourseManagementPageListComponentButton' variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button id='EditDegreeCourseComponentSaveDegreeCourseButton' variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditDegreeCourseModal;
