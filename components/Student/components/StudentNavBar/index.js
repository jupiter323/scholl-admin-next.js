import React from 'react';
import PropTypes from 'prop-types';

const StudentNavBar = ({ activePage, onSetActivePage }) => (
  <nav className="nav-additional">
    <ul className="menu-additional">
      <li>
        <a
          className={activePage === 'summary' ? 'active' : ''}
          onClick={() => onSetActivePage('summary')}
          href="#"
        >
          Summary
        </a>
      </li>
      <li>
        <a
          className={activePage === 'calendar' ? 'active' : ''}
          onClick={() => onSetActivePage('calendar')}
          href="#"
        >
          Calendar
        </a>
      </li>
      <li>
        <a
          className={activePage === 'lessons' ? 'active' : ''}
          onClick={() => onSetActivePage('lessons')}
          href="#"
        >
          Lessons
        </a>
      </li>
      <li>
        <a
          className={activePage === 'worksheets' ? 'active' : ''}
          onClick={() => onSetActivePage('worksheets')}
          href="#"
        >
          Worksheets
        </a>
      </li>
      <li>
        <a
          className={activePage === 'test' ? 'active' : ''}
          onClick={() => onSetActivePage('test')}
          href="#"
        >
          Test Sections
        </a>
      </li>
      <li>
        <a
          className={activePage === 'account' ? 'active' : ''}
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
  activePage: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
};

export default StudentNavBar;
