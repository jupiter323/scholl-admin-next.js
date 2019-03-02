/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';

const Instructor = ({ onOpenInstructorModal }) => (
  <div className="card-block">
    <h3>Instructor</h3>
    <div className="card card-instructor">
      <div className="card-content">
        <div className="text-block">
          <p>Add one or more instructors to the list below. Each instructor can manage the student’s course.</p>
        </div>
        <div className="box-scrollable">
          <div className="height-15 jcf-scrollable">
            <div className="card-location-holder">
              <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                <a href="#" className="close-link icon-close-thin"></a>
                <div className="card-panel-row row">
                  <div className="col s10">
                    <div className="user-block">
                      <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                        <img src="images/img-owner01.jpg" alt="image description" />
                      </div>
                      <div className="user-text" style={{ color: '#fff' }}>
                        <h4 className="h3">Smith, John</h4>
                        <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
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
  onOpenInstructorModal: PropTypes.func.isRequired,
};

export default Instructor;
