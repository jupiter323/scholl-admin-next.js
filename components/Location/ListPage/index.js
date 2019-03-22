import React from 'react';
// import PropTypes from 'prop-types';
import LocationCard from './components/LocationCard';
import NewLocationModal from './components/NewLocationModal';

import sampleLocationList from '../utils/sampleLocationList';

class LocationListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      locations: sampleLocationList,
    };
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onAddNewLocation = (newLocation) => this.setState(({ locations }) => ({ locations: [...locations, newLocation] }))

  mapLocations = () => this.state.locations.map((location) => (
    <LocationCard location={location} />
  ))
  render() {
    const { locationModalOpen } = this.state;
    return (
      <React.Fragment>
        <NewLocationModal
          open={locationModalOpen}
          onClose={this.onCloseLocationModal}
          onAddNewLocation={this.onAddNewLocation}
        />
        <div className="main-holder grey lighten-5">
          <div className="title-row card-panel">
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            <h2 className="h1 white-text">
              <span className="heading-holder">
                <i className="icon-location"></i>
                <span className="heading-block">Locations</span>
              </span>
            </h2>
          </div>
          <div className="content-section">
            <div className="row d-flex-content">
              {this.mapLocations()}
            </div>
          </div>
        </div>
        <a
          href="#"
          onClick={this.onOpenLocationModal}
          className="waves-effect waves-teal btn add-btn"
        >
          <i className="material-icons">add</i>
          New Location
        </a>
      </React.Fragment>
    );
  }
}

export default LocationListPage;
