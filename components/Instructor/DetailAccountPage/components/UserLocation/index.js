import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const UserLocation = ({ state }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h3>User’s Location</h3>
      <div className="card-main card card-instructor">
        <div className="card-content">
          <div className="text-block">
            <p>Select the location/branch where this instructor works. Depending on your settings, you may have more than one location. If this instructor works at multiple locations, select all that apply.</p>
            <p>Note: Unless you speciﬁcally grant additional access, this instructor will only be able to access his or her own students.</p>
          </div>
          <div className="box-scrollable">
            <div className="height-275 jcf-scrollable">
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
            <a href="#modal_Location1" className="modal-trigger link-block">Add Location</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserLocation.propTypes = {
  state: PropTypes.object,
};

export default UserLocation;
