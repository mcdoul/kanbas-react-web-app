import { Link } from "react-router-dom";
import db from "../Database";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import courseImage from './course.jpg';

function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-flex-row-container">
        <div id="dashboard">
            <h2 class="mt-3">Dashboard</h2>
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
                            <h6 className="card-title">{course.name}</h6>
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