import React from 'react';
import PropTypes from 'prop-types';

// needs to have onSetActivePage defined on parent component
const StudentNavBar = ({ active, onSetActivePage }) => (
  <nav className="nav-additional">
    <ul className="menu-additional">
      <li>
        <a
          className={active === 'summary' ? 'active' : ''}
          onClick={() => onSetActivePage('summary')}
          href="#"
        >
          Summary
        </a>
      </li>
      <li>
        <a
          className={active === 'calendar' ? 'active' : ''}
          onClick={() => onSetActivePage('calendar')}
          href="#"
        >
          Calendar
        </a>
      </li>
      <li>
        <a
          className={active === 'lessons' ? 'active' : ''}
          onClick={() => onSetActivePage('lessons')}
          href="#"
        >
          Lessons
        </a>
      </li>
      <li>
        <a
          className={active === 'worksheets' ? 'active' : ''}
          onClick={() => onSetActivePage('worksheets')}
          href="#"
        >
          Worksheets
        </a>
      </li>
      <li>
        <a
          className={active === 'test' ? 'active' : ''}
          onClick={() => onSetActivePage('test')}
          href="#"
        >
          Test Sections
        </a>
      </li>
      <li>
        <a
          className={active === 'account' ? 'active' : ''}
          onClick={() => onSetActivePage('account')}
          href="#"
        >
          Account
        </a>
      </li>
    </ul>
  </nav>
);

StudentNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
};

export default StudentNavBar;
