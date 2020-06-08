import React from 'react';
import PropTypes from 'prop-types';
import LcoationCard from '../../../../../Location/components/LocationCard';

const Location = ({ locations, onOpenLocationModal, onRemoveLocation }) => (
  <React.Fragment>
    <div className="card-block">
      <h3>Location(s)</h3>

      {locations.length > 0 && (
        locations.map((location, index) => (
          <LcoationCard location={location} onRemoveLocation={() => onRemoveLocation(index)} key={location.id} />
        ))
      )}
    </div>
    <div className="add-box">
      <div className="add-box-holder">
        <a href="#" className="btn-floating waves-effect waves-light green lighten-1" onClick={onOpenLocationModal}><i className="material-icons">add</i></a>
      </div>
    </div>
  </React.Fragment>
);

Location.propTypes = {
  locations: PropTypes.array.isRequired,
  onRemoveLocation: PropTypes.func.isRequired,
  onOpenLocationModal: PropTypes.func.isRequired,
};

export default Location;
