const DegreeCourseApplicationCard = ({ application, onEdit, onDelete }) => {
    return (
        <div id={`DegreeCourseApplicationItem${application.id}}`} key={application.id} className="card degree-course-card">

            <div className="dc-container">
                <div className="degree-course-title-row">
                    <p className="degree-course-title">{`${application.applicantUserID}: ${application.degreeCourseName} ${application.targetPeriodYear} ${application.targetPeriodShortName}`}</p>
                </div>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className="label">User:</p>
                <p className="value" id="ApplicantUserID">{application.applicantUserID}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className='label'>DegreeCourseName: </p>
                <p className='value' id="DegreeCourseName"> {application.degreeCourseName}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className='label'>Target year: </p>
                <p className='value' id="TargetPeriodYear">{application.targetPeriodYear}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className='label'>Target Semester: </p>
                <p className='value' id="TargetPeriodShortName">{application.targetPeriodShortName}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className='label'>Univercity : </p>
                <p className='value' id="UniversityShortName">{application.targetPeriodShortName}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className='degreeCourse-card-actions'>
                <button
                    id={`DegreeCourseApplicationItemDeleteButton${application.id}`}
                    className="btn btn-danger"
                    onClick={() => onDelete(application.id)}
                >                        Delete
                </button>
            </div>
        </div>
    )

};
export default DegreeCourseApplicationCard;