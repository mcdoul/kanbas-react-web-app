import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function KanbasNavigation({ active }) {
  const links = [
    { name: 'Account', url: '/Account', icon: 'fa fa-user' },
    { name: 'Dashboard', url: '/Dashboard', icon: 'fas fa-tachometer' },
    { name: 'Courses', url: '/Courses', icon: 'fa fa-book' },
    { name: 'Calender', url: '#', icon: 'fa fa-calendar' },
    { name: 'Inbox', url: '#', icon: 'fa fa-inbox' },
    { name: 'History', url: '#', icon: 'fa fa-clock' },
    { name: 'Studio', url: '#', icon: 'fa fa-laptop' },
    { name: 'Commons', url: '#', icon: 'fa fa-creative-commons' },
    { name: 'Help', url: '#', icon: 'fa fa-question-circle' },
  ];
  const { pathname } = useLocation();

  return (
    <div id="kanbas-navigation">
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.name) && "wd-kanbas-navigation-active"}>
            <Link
              to={`/Kanbas/${link.name}`}
              className={`list-group-item`}>
              <i className={link.icon} aria-hidden="true"></i>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
