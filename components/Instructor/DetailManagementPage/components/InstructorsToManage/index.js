import React from 'react';
import PropTypes from 'prop-types';

import InstructorCard from '../../../../Instructor/components/InstructorCard';

const InstructorsToManage = ({ state: { instructors }, onOpenInstructorModal, onRemoveInstructor }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h3>Instructors to Manage</h3>
      <div className="card-main card card-instructor">
        <div className="card-content">
          <div className="text-block">
            <p>Add each instructor that you’d like to allow this user to manage. For each instructor you add, this user will be able to view and edit the selected instructor’s account, as well as the accounts of each of the instructor’s students.</p>
          </div>
          <div className="box-scrollable">
            <div className="height-360 jcf-scrollable">
              <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
                {!instructors.length && (
                  <div className="add-class-box"></div>
                )}
                {instructors.map((instructor, index) => (
                  <InstructorCard instructor={instructor} onRemoveInstructor={() => onRemoveInstructor(index, 'instructorsToManage', 'instructors')} />
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
  </div>
);

InstructorsToManage.propTypes = {
  state: PropTypes.object.isRequired,
  onOpenInstructorModal: PropTypes.func.isRequired,
  onRemoveInstructor: PropTypes.func.isRequired,
};

export default InstructorsToManage;
