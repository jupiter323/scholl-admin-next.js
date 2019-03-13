/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import ClassCard from './components/ClassCard';

const Class = ({ state: { classes }, onOpenClassModal, onRemoveClass }) => (
  <div className="card-block">
    <h3>Class</h3>
    <div className="card card-instructor">
      <div className="card-content">
        <div className="text-block">
          <p>If this student is in a class, add it here. When a student is a member of a class, he or she will automatically be assigned all the classwork. </p>
        </div>
        <div className="box-scrollable">
          <div className="height-20 jcf-scrollable">
            <div className="card-location-holder">
              {!classes.length && (
                <div className="add-class-box"></div>
              )}
              {classes.map((course, index) => (
                <ClassCard course={course} key={course.className} index={index} onRemoveClass={onRemoveClass} />
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer right-align">
          <a
            href="#"
            onClick={onOpenClassModal}
            className="modal-trigger link-block"
          >
            Add Class
          </a>
        </div>
      </div>
    </div>
  </div>
);

Class.propTypes = {
  state: PropTypes.object.isRequired,
  onRemoveClass: PropTypes.func.isRequired,
  onOpenClassModal: PropTypes.func.isRequired,
};

export default Class;
