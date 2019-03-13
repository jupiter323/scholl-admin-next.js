/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const InstructorToggleCard = ({ instructor, onToggleInstructorSelect }) => (
  <li onClick={() => onToggleInstructorSelect(instructor)}>
    <input
      type="checkbox"
    />
    <div className="card-location card">
      <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
        <span className="check-link icon-check"></span>
        <div className="card-panel-row row">
          <div className="col s10">
            <div className="user-block">
              <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                <img src="#" alt="" />
              </div>
              <div className="user-text" style={{ color: '#fff' }}>
                <h4 className="h3">{instructor.lastName}, {instructor.firstName}</h4>
                <a href={`mailto:${instructor.email}`}>{instructor.email}</a>
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
    </div>
  </li>
);

InstructorToggleCard.propTypes = {
  instructor: PropTypes.object.isRequired,
  onToggleInstructorSelect: PropTypes.func.isRequired,
};

export default InstructorToggleCard;
