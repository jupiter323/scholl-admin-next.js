import React from "react";
import PropTypes from 'prop-types';
import LocationCard from '../Locations/components/LocationCard';


class Locations extends React.Component {
  constructor(props) {
    super(props);
  }

  mapLocations = () =>{
    const { locations } = this.props;
    return locations.map((location,index) => {
      <LocationCard
        key = {index}
        index = {index}
        location = {location}
      />
    })
  }

  render() {
    const { onOpenLocationModal } = this.props;
    return (
      <div className="card-block">
        <h3>Class Location</h3>
        {/* card */}
        <div className="card-main card card-instructor">
          <div className="card-content">
            <div className="text-block">
              <p>
                Select the location/branch where this class will be located.
              </p>
            </div>
            <div className="box-scrollable">
              <div className="height-360 jcf-scrollable">
                <div className="card-location-holder">
                  {this.mapLocations()}
                </div>
              </div>
            </div>
            <div className="card-footer right-align">
              <a href="#modal_Location1" className="modal-trigger link-block" onClick = { onOpenLocationModal}>
                Add Location
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Locations.propTypes = {
  locations:PropTypes.array.isRequired,
  onOpenLocationModal:PropTypes.func.isRequired,
}

export default Locations;
