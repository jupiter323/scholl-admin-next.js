import React from 'react';
import PropTypes from 'prop-types';

const ClassNavBar = ({ active, onSetActivePage }) => (
  <nav className="nav-additional">
    <ul className="menu-additional js-flex-nav" data-more-text="More">
      <li>
        <a
          href="#"
          onClick={() => onSetActivePage('summary')}
          className={active === 'summary' ? 'active' : ''}
        >
          Summary
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => onSetActivePage('calendar')}
          className={active === 'calendar' ? 'active' : ''}
        >
          Calendar
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => onSetActivePage('lessons')}
          className={active === 'lessons' ? 'active' : ''}
        >
          Lessons
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => onSetActivePage('worksheets')}
          className={active === 'worksheets' ? 'active' : ''}
        >
          Worksheets
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => onSetActivePage('testSections')}
          className={active === 'testSections' ? 'active' : ''}
        >
          Test Sections
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => onSetActivePage('account')}
          className={active === 'account' ? 'active' : ''}
        >
          Account
        </a>
      </li>
    </ul>
  </nav>
);

ClassNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
}

export default ClassNavBar;