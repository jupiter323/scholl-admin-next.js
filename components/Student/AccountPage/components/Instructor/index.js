/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';

import InstructorCard from '../../../../Instructor/components/InstructorCard';

const Instructor = ({ state: { instructors }, onOpenInstructorModal, onRemoveInstructor }) => (
  <div className="card-block">
    <h3>Instructor</h3>
    <div className="card card-instructor">
      <div className="card-content">
        <div className="text-block">
          <p>Add one or more instructors to the list below. Each instructor can manage the student’s course.</p>
        </div>
        <div className="box-scrollable">
          <div className="height-15 jcf-scrollable">
            <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
              {!instructors.length && (
                <div className="add-class-box"></div>
              )}
              {instructors.map((instructor, index) => (
                <InstructorCard instructor={instructor} onRemoveInstructor={() => onRemoveInstructor(index, 'instructor', 'instructors')} />
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer right-align">
          <a
            href="#"
            onClick={onOpenInstructorModal}
            className="modal-trigger link-block"
          >
            Add Instructor
          </a>
        </div>
      </div>
    </div>
  </div>
);

Instructor.propTypes = {
  state: PropTypes.object.isRequired,
  onOpenInstructorModal: PropTypes.func.isRequired,
  onRemoveInstructor: PropTypes.func.isRequired,
};

export default Instructor;
