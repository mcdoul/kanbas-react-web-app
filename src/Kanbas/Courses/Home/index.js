import Modules from "../Modules";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  const courseStatusLinks = [
    'Import Existing Content',
    'Import From Commons',
    'Choose Home Page',
    'View Course Stream',
    'New Announcement',
    'New Analytics',
    'View Course Notifications',
  ];

  return (
    <div className="wd-flex-row-container">
      <div id="wd-module" className="col-md-6">
        <Modules />
      </div>

      <div className="col-md-3 d-none d-lg-block" id="wd-course-status-container">
        {/* Course Status */}
        <div id="wd-course-status">
          <h4>Course Status</h4>
          <div className="row" id="course-status-buttons">
            <button className="btn btn-sm btn-secondary col-md-5">Unpublish</button>
            <button className="btn btn-sm col-md-6 btn-success">Published</button>
          </div>
          <ul id="wd-course-status-navigation">
            {courseStatusLinks.map((link, index) => (
              <li key={index} className="btn btn-sm btn-secondary">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coming up */}
        <div id="wd-coming-up">
          <h4>Coming up <a href="#" className="float-end"> <i className="fa fa-calendar-o" aria-hidden="true"></i> View Calendar</a></h4>
          <ul id="wd-coming-up-list">
            <li><a href="#">Lecture</a><br />CS4550.12631.202410 Sep 7 at 11:45am</li>
            <li><a href="#">Lecture</a><br />CS4550.12631.202410 Sep 11 at 11:45am</li>
            <li><a href="#">Lecture</a><br />CS5610 06 SP23 Lecture Sep 11 at 6pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
