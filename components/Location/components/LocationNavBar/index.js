import React from 'react';
import PropTypes from 'prop-types';

const LocationNavBar = ({ active, onSetActivePage }) => (
  <div className="title-row card-panel">
    <div className="mobile-header">
      <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
    <nav className="breadcrumb-holder">
      <div className="nav-wrapper ">
        <a href="#!" className="breadcrumb">&lt;  Locations</a>
      </div>
    </nav>
    <h2 className="h1 white-text">
      <span className="heading-holder">
        <i className="icon-location"></i>
        <span className="heading-block">Study Hut - Redondo Beach, CA</span>
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
      </ul>
    </nav>
  </div>
);

LocationNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
};

export default LocationNavBar;
