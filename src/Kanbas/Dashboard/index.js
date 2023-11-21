import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import courseImage from './course.jpg';

function Dashboard(
    { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
  return (
    <div class="wd-flex-row-container">
        <div id="dashboard">
            <h2 class="mt-3">Dashboard</h2>
            <h4>Course</h4>
            <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            
            <button className="btn btn-sm btn-danger" onClick={addNewCourse} >
                Add
            </button>
            <button className="btn btn-sm btn-danger" onClick={updateCourse} >
                Update
            </button>


            <hr></hr>
            {/* Published Courses Subtitle */}
            <h3 class="mt-4">Published Courses</h3>

            {/* Course grid */}
            <div className="list-group d-flex flex-row flex-wrap gap-3 mt-4 col-md-12">
                {courses.map((course) => (
                <div key={course._id}>
                    <Link to={`/Kanbas/Courses/${course._id}`}>
                        <div className="card wd-course-card">
                            <img src={courseImage} className="card-img-top" alt="Course Image" />
                            <div className="card-body">
                                <h6 className="card-title">{course.name} 
                                    <button className="btn btn-sm btn-secondary"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-secondary"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course);
                                        }}>
                                        Delete
                                    </button>
                                </h6>
                                <p className="card-text">{course.number}</p>
                                <a href="#"><i class="fa fa-book" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}
export default Dashboard;