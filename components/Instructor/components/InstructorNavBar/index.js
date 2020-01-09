import React from 'react';
import PropTypes from 'prop-types';
import {Sticky} from 'react-sticky';

// eslint-disable-next-line react/prefer-stateless-function
class InstructorNavBar extends React.Component {

render() {
  const {active, onSetActivePage} = this.props;
  return (
  <Sticky id="sticky">
              {({style}) => (
  <div className="title-row card-panel" style={{...style, zIndex: 999}}>
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
      )}
      </Sticky>
)}};

InstructorNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default InstructorNavBar;
