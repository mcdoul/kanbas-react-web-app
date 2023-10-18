import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div id="wd-assignments-edit-container">
      <h5>Assignment Name</h5>
      <input value={assignment.title}
             className="form-control mb-2" />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;