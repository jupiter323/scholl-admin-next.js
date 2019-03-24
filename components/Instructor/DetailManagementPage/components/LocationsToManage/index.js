import React from 'react';
import PropTypes from 'prop-types';

import LocationCard from '../../../../Location/components/LocationCard';

const LocationsToManage = ({ state: { locations }, onOpenLocationModal, onRemoveLocation }) => (
  <div className="col s12 l5">
    <div className="card-block">
      <h3>Locations to Manage</h3>
      <div className="card-main card card-instructor">
        <div className="card-content">
          <div className="text-block">
            <p>If this user manages one or more locations/branches, add them below. This user will be able to view and edit the accounts for all instructors and students at selected locations. </p>
          </div>
          <div className="box-scrollable">
            <div className="height-360 jcf-scrollable">
              <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
                {!locations.length && (
                  <div className="add-class-box"></div>
                )}
                {locations.map((location, index) => (
                  <LocationCard location={location} onRemoveLocation={() => onRemoveLocation(index, 'locationsToManage', 'locations')} />
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
  </div>
);

LocationsToManage.propTypes = {
  state: PropTypes.object.isRequired,
  onRemoveLocation: PropTypes.func.isRequired,
  onOpenLocationModal: PropTypes.func.isRequired,
};

export default LocationsToManage;
