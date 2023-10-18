import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function CourseNavigation({ active }) {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom Meetings',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
    'Files',
    'Rubrics',
    'Outcomes',
    'Collaborations',
    'Syllabus',
    'Settings',
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="course-navigation">
      <ul className="wd-course-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link) && "wd-course-navigation-active"}>
            <Link to={`/Kanbas/Courses/${courseId}/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;
