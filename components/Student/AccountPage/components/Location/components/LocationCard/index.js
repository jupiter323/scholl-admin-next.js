import React from 'react';
import PropTypes from 'prop-types';

const LcoationCard = ({ location: { locationNickname, locationName }, index, onRemoveLocation }) => (
  <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
    <a
      href="#"
      className="close-link icon-close-thin"
      onClick={() => onRemoveLocation(index)}
    ></a>
    <div className="card-panel-row row">
      <div className="col s10">
        <h3 className="h4 truncate">{locationNickname}</h3>
        <h4 className="sub-title">{locationName}</h4>
      </div>
      <div className="col s2 right-align">
        <span className="block-icon">
          <i className="icon-location"></i>
          <span className="text-icon">Location</span>
        </span>
      </div>
    </div>
  </div>
);

LcoationCard.propTypes = {
  location: PropTypes.object,
  index: PropTypes.number.isRequired,
  onRemoveLocation: PropTypes.func.isRequired,
};

export default LcoationCard;
