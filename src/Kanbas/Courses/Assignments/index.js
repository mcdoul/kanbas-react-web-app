import React from "react";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { useNavigate, useParams, Link } from "react-router-dom";



function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmAndDelete = (assignmentId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (shouldDelete) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return ( 
    <div id="wd-assignments-container">
      <h4>Assignments for course {courseId}</h4>
      <div className="list-group row">
          <button className="btn btn-danger col-md-2 ms-auto" onClick={() => {dispatch(addAssignment({ title: "New Assignment", course: courseId })); navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`)}}>
              + Add Assignment
            </button>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
            <button className="btn btn-sm btn-secondary"
                onClick={() => dispatch(setAssignment(assignment))}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger"
                onClick={(e) => {e.preventDefault(); confirmAndDelete(assignment._id)}}>
                Delete
              </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;