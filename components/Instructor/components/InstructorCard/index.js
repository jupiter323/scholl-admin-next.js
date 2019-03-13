import React from 'react';
import PropTypes from 'prop-types';

const InstructorCard = ({ instructor: { firstName, lastName, email }, onRemoveInstructor }) => (
  <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
    <a
      href="#"
      className="close-link icon-close-thin"
      onClick={onRemoveInstructor}
    >
    </a>
    <div className="card-panel-row row">
      <div className="col s10">
        <div className="user-block">
          <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff', height: '45px' }}>
            <img src="#" alt="" />
          </div>
          <div className="user-text" style={{ color: '#fff' }}>
            <h4 className="h3">{lastName}, {firstName}</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
      <div className="col s2 right-align">
        <span className="block-icon">
          <i className="icon-user"></i>
          <span className="text-icon">Instructor</span>
        </span>
      </div>
    </div>
  </div>
);

InstructorCard.propTypes = {
  instructor: PropTypes.object.isRequired,
  onRemoveInstructor: PropTypes.func.isRequired,
};

export default InstructorCard;
