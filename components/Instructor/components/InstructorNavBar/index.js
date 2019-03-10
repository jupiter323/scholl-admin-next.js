import React from 'react';
import PropTypes from 'prop-types';

const InstructorNavBar = ({ active }) => (
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
        <li><a className={active === 'summary' ? 'active' : ''} href="#">Summary</a></li>
        <li><a className={active === 'account' ? 'active' : ''} href="#">Account</a></li>
        <li><a className={active === 'managementSettings' ? 'active' : ''} href="#">Management Settings</a></li>
      </ul>
    </nav>
  </div>
);

InstructorNavBar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default InstructorNavBar;
