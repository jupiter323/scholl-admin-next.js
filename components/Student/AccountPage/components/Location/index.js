import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ onOpenLocationModal }) => (
  <div className="card-block">
    <h3>Location</h3>
    <div className="card card-instructor">
      <div className="card-content">
        <div className="text-block">
          <p>Depending on your settings, you may have more than one location/branch. The student’s location aﬀects which managers have access to this student. </p>
        </div>
        <div className="box-scrollable">
          <div className="height-15 jcf-scrollable">
            <div className="card-location-holder">
              <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                <a href="#" className="close-link icon-close-thin"></a>
                <div className="card-panel-row row">
                  <div className="col s10">
                    <h3 className="h4 truncate">Location Nickname</h3>
                    <h4 className="sub-title">Location Name</h4>
                  </div>
                  <div className="col s2 right-align">
                    <span className="block-icon">
                      <i className="icon-location"></i>
                      <span className="text-icon">Location</span>
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
            onClick={onOpenLocationModal}
            className="modal-trigger link-block"
          >
            Add Location
          </a>
        </div>
      </div>
    </div>
  </div>
);

Location.propTypes = {
  onOpenLocationModal: PropTypes.func.isRequired,
};

export default Location;
