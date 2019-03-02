import React from 'react';
import PropTypes from 'prop-types';

const StudentNavBar = ({ active }) => (
  <nav className="nav-additional">
    <ul className="menu-additional">
      <li><a className={active === 'summary' ? 'active' : ''} href="#">Summary</a></li>
      <li><a className={active === 'calendar' ? 'active' : ''} href="#">Calendar</a></li>
      <li><a className={active === 'lessons' ? 'active' : ''} href="#">Lessons</a></li>
      <li><a className={active === 'test' ? 'active' : ''} href="#">Tests</a></li>
      <li><a className={active === 'account' ? 'active' : ''} href="#">Account</a></li>
    </ul>
  </nav>
);

StudentNavBar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default StudentNavBar;
