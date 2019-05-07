import React from 'react';
import PropTypes from 'prop-types';

const StudentCard = ({ student: { firstName, lastName, email }}) => (
    <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
      <div className="card-panel-row row">
      <div className="col s9">
        <div className="user-block">
          <div className="user-circle" style={{ backgroundColor: '#14b14b', color: '#fff', height: '45px' }}>
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
          <span className="text-icon">Student</span>
        </span>
      </div>
    </div>
  </div>
);

  StudentCard.propTypes = {
    student: PropTypes.object.isRequired,
  };

export default StudentCard;