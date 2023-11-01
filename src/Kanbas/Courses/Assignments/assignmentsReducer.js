import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: { title: "New Assignment"},
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        const newAssignment = {
          _id: new Date().getTime().toString(),
          title: action.payload.title,
          course: action.payload.course,
        };
        state.assignments = [newAssignment, ...state.assignments];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return {
              _id: action.payload._id,
              title: action.payload.title,
              course: action.payload.course,
            };
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  


export const { addAssignment, deleteAssignment,
updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
