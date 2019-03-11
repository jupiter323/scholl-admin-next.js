import React from 'react';
import PropTypes from 'prop-types';

import LocationCard from '../../../../Location/components/LocationCard';

const UserLocation = ({ state: { locations }, onOpenLocationModal, onRemoveLocation }) => (
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
                {!locations.length && (
                  <div className="add-class-box"></div>
                )}
                {locations.map((location, index) => (
                  <LocationCard location={location} onRemoveLocation={() => onRemoveLocation(index, 'userLocation', 'locations')} />
                ))}
              </div>
            </div>
          </div>
          <div className="card-footer right-align">
            <a
              href="#"
              className="modal-trigger link-block"
              onClick={onOpenLocationModal}
            >
              Add Location
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UserLocation.propTypes = {
  state: PropTypes.object,
  onRemoveLocation: PropTypes.func.isRequired,
  onOpenLocationModal: PropTypes.func.isRequired,
};

export default UserLocation;
