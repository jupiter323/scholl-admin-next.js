import React from 'react';
// import PropTypes from 'prop-types';
import LocationCard from './components/LocationCard';
import NewLocationModal from '../components/NewLocationModal';
import sampleLocationList from '../utils/sampleLocationList';
import Locations from '../../../pages/locations';

class LocationListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      locations: sampleLocationList,
      selectedLocation: null,
    };
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onAddNewLocation = (newLocation) => this.setState(({ locations }) => ({ locations: [...locations, newLocation] }))

  onRedirectToLocationsPage = (event) => {
    event.preventDefault();
    this.setState({ selectedLocation: null })
  }

  handleLocationCardClick = (index) => {
    const { locations } = this.state;
    this.setState({ selectedLocation: locations[index] })
  }

  mapLocations = () => this.state.locations.map(((location, index) => (
    <LocationCard location={location} key={location.id} index={index} handleLocationCardClick={this.handleLocationCardClick} />
  )))

  render() {
    const { locationModalOpen, selectedLocation } = this.state;
    return (
      <React.Fragment>
        {!selectedLocation && (
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
            <a
              href="#"
              onClick={this.onOpenLocationModal}
              className="waves-effect waves-teal btn add-btn"
            >
              <i className="material-icons">add</i>
              New Location
        </a>
            <NewLocationModal
              open={locationModalOpen}
              onClose={this.onCloseLocationModal}
              onAddNewLocation={this.onAddNewLocation}
            />
          </div>
        )}
        {selectedLocation && (
          <Locations location={selectedLocation} onRedirectToLocationsPage={this.onRedirectToLocationsPage} />
          // <React.Fragment>
          // <LocationNavBar location={selectedLocation} onRedirectToLocationsPage={this.onRedirectToLocationsPage} />
          // <DetailAccountPage location={selectedLocation} />
          // </React.Fragment>
        )}
      </React.Fragment>

    );
  }

}

export default LocationListPage;
