/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Class = () => (
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
              <div className="add-class-box"></div>
            </div>
          </div>
        </div>
        <div className="card-footer right-align">
          <a href="#!" className="modal-trigger link-block">Add Class</a>
        </div>
      </div>
    </div>
  </div>
);

export default Class;
