import React from 'react';
import PropTypes from 'prop-types';

import LocationCard from './components/LocationCard';

const Location = ({ state: { locations }, onOpenLocationModal, onRemoveLocation }) => (
  <div className="card-block">
    <h3>Location</h3>
    <div className="card card-instructor">
      <div className="card-content">
        <div className="text-block">
          <p>Depending on your settings, you may have more than one location/branch. The student’s location aﬀects which managers have access to this student. </p>
        </div>
        <div className="box-scrollable">
          <div className="height-15 jcf-scrollable">
            <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
              {locations.map((location, index) => (
                <LocationCard location={location} index={index} onRemoveLocation={onRemoveLocation} />
              ))}
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
  state: PropTypes.object.isRequired,
  onRemoveLocation: PropTypes.func.isRequired,
  onOpenLocationModal: PropTypes.func.isRequired,
};

export default Location;
