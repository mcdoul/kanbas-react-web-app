import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  { useState } from "react";

import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";


function AssignmentEditor() {
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [dueDate, setDueDate] = useState("2023-01-01");
  const [availableFromDate, setAvailableFromDate] = useState("2023-01-01");
  const [availableUntilDate, setAvailableUntilDate] = useState("2023-01-01");


  return (
    <div id="wd-assignments-edit-container">
      <h5>Assignment Name</h5>
      <input value={assignment.title} 
             className="form-control mb-2" onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))}/>
      <textarea className="form-control" value={module.description}
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))}
            />
      <div class="wd-assignments-form-item">
          <label for="due"> Due </label>
          <br/>
          <input
            type="date"
            className="form-control datepicker"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
      </div>

      <div class="row">
          <div class="col-md-6">
              <label for="available-from"> Available from </label>
              <br/>
              <input
                type="date"
                className="form-control datepicker"
                value={availableFromDate}
                onChange={(e) => setAvailableFromDate(e.target.value)}
              />

          </div>
          <div class="col-md-6">
              <label for="until"> Until </label>
              <br/>
              <input
                type="date"
                className="form-control datepicker"
                value={availableUntilDate}
                onChange={(e) => setAvailableUntilDate(e.target.value)}
              />
          </div>
      </div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={() => {
        dispatch(updateAssignment(assignment));
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
      }} className="btn btn-danger me-2">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;