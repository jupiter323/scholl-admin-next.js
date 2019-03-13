/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const LocationToggleCard = ({ location, onToggleLocationSelect }) => (
  <li onClick={() => onToggleLocationSelect(location)}>
    <input
      type="checkbox"
    />
    <div className="card-location card card-large">
      <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
        <span className="check-link icon-check"></span>
        <div className="card-panel-row row">
          <div className="col s10">
            <h3 className="h4 truncate">{location.locationNickname}</h3>
            <h4 className="sub-title">{location.locationName}</h4>
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
  </li>
);

LocationToggleCard.propTypes = {
  location: PropTypes.object.isRequired,
  onToggleLocationSelect: PropTypes.func.isRequired,
};

export default LocationToggleCard;
