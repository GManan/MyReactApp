import { useSelector } from "react-redux";

const DegreeCourseCard = ({ degreeCourse, onCreateApplication, onDelete, onEdit }) => {
    const isAdmin = useSelector((state) => state.auth.isAdmin)
    return (degreeCourse &&
        <div id={`DegreeCourseItem${degreeCourse.id}`} key={degreeCourse.id} className="card degree-course-card">
            <div className="dc-container">
                <div className="degree-course-title-row">
                    <p className="degree-course-title">{`${degreeCourse.shortName}: ${degreeCourse.name}`}</p>
                </div>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className="label">Univercity:</p>
                <p className="value" id="UniversityName">{degreeCourse.universityName}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className='label'>Fachbereich: </p>
                <p className='value' id="DepartmentName"> {degreeCourse.departmentName}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div className="degree-course-row">
                <p className='label'>Studiengang: </p>
                <p className='value' id="Name">{degreeCourse.name}</p>
            </div>
            <hr className="degreeCourse-row-separator" />
            <div style={{ display: 'flex', gap: '20px' }}>

                {isAdmin &&
                    <button
                        id={`DegreeCourseItemEditButton${degreeCourse.id}`}
                        className="btn btn-primary"
                        onClick={() => onEdit(degreeCourse.id)}
                    >

                        Edit
                    </button>
                }
                {isAdmin &&
                    <button
                        id={`DegreeCourseItemDeleteButton${degreeCourse.id}`}
                        className="btn btn-danger"
                        onClick={() => onDelete(degreeCourse.id)}
                    >
                        Delete
                    </button>
                }
                <button
                    id={`CreateDegreeCourseApplicationForDegreeCourse${degreeCourse.id}`}
                    className="btn btn-success"
                    onClick={() => onCreateApplication(degreeCourse.id)}
                >
                    Create Application
                </button>
            </div>
        </div>
    )
}
export default DegreeCourseCard;