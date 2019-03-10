import React from 'react';
import PropTypes from 'prop-types';

const InstructorNavBar = ({ active, onSetActivePage }) => (
  <div className="title-row card-panel">
    <div className="mobile-header">
      <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
    <nav className="breadcrumb-holder">
      <div className="nav-wrapper ">
        <a href="#!" className="breadcrumb">&lt;  Instructors</a>
      </div>
    </nav>
    <h2 className="h1 white-text">
      <span className="heading-holder">
        <i className="icon-instructors"></i>
        <span className="heading-block">George Tutorly</span>
      </span>
    </h2>
    <nav className="nav-additional">
      <ul className="menu-additional">
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
            onClick={() => onSetActivePage('account')}
            className={active === 'account' ? 'active' : ''}
          >
            Account
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onSetActivePage('managementSettings')}
            className={active === 'managementSettings' ? 'active' : ''}
          >
            Management Settings
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

InstructorNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
};

export default InstructorNavBar;
