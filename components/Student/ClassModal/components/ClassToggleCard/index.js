/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ClassToggleCard = ({ course, onToggleClassSelect }) => (
  <li onClick={() => onToggleClassSelect(course)}>
    <input
      type="checkbox"
    />
    <div className="card-location card">
      <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
        <span className="check-link icon-check"></span>
        <div className="card-panel-row row">
          <div className="col s10">
            <h3 className="h4 truncate">{course.className}</h3>
            <h4 className="sub-title">{course.classLocation}</h4>
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

ClassToggleCard.propTypes = {
  course: PropTypes.object.isRequired,
  onToggleClassSelect: PropTypes.func.isRequired,
};

export default ClassToggleCard;
