import React from 'react';
import PropTypes from 'prop-types';
import { Sticky, StickyContainer } from 'react-sticky';
import { connect } from "react-redux";
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import LocationCard from './components/LocationCard';
import NewLocationModal from '../components/NewLocationModal';
import sampleLocationList from '../utils/sampleLocationList';
import Locations from '../../../pages/locations';
import {
  fetchAllLocationns,
  createLocation,
} from '../index/actions';
import { makeSelectLocations } from '../index/selectors';
import { makeSelectCurrentUser } from '../../../components/User/index/selectors';
const faker = require('faker');
class LocationListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      locations: sampleLocationList,
      selectedLocation: null,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const { onFetchAllLocationns } = this.props;
    const { locations } = nextProps;
    if (!locations && nextProps.currentUser) {
      const { currentUser: { id } } = nextProps;
      onFetchAllLocationns(id);
    }
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onAddNewLocation = (newLocation) => {
    const {
      onCreateLocation,
      currentUser: { id },
    } = this.props;

    const {
      owner,
      locationContactInfo: { streetAddress, city, state, zip, locationPhone, website },
    } = newLocation;

    let firstName = ''; let lastName = '';
    if (owner) {
      firstName = owner.firstName;
      lastName = owner.lastName;
    }


    const locationData = {
      organization_id: this.props.locations[0].organization.id,
      name: (firstName || lastName) ? `${firstName} ${lastName}` : 'Clear Choice Test Prep',
      nickname: firstName || 'Clear Choice',
      subdomain: `${faker.name.firstName()}-${faker.name.lastName()}-${Math.floor(Math.random() * 10)}`,
      address: streetAddress || '409 N Pacific Coast Hwy Ste. 128',
      city: city || 'Redondo Beach',
      state: state || 'CA',
      zip: zip || '90277',
      phone: locationPhone || '310.775.0482',
      website: website || 'http://www.clearchoiceprep.com',
    };
    const payload = { location: locationData, user_id: id };
    onCreateLocation(payload);
    this.setState(({ locations }) => ({ locations: [...locations, newLocation] }));
  }

  onRedirectToLocationsPage = (event) => {
    event.preventDefault();
    this.setState({ selectedLocation: null });
  }

  handleLocationCardClick = (index) => {
    const { locations } = this.state;
    this.setState({ selectedLocation: locations[index] });
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
            <StickyContainer>
              <Sticky>
                {({ style }) => (
                  <div className="title-row card-panel" style={{ ...style, zIndex: 1999 }}>

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
                )}
              </Sticky>
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
            </StickyContainer>
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


LocationListPage.propTypes = {
  locations: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  onCreateLocation: PropTypes.func.isRequired,
  onFetchAllLocationns: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  locations: makeSelectLocations(),
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = dispatch => ({
  onFetchAllLocationns: (payload) => dispatch(fetchAllLocationns(payload)),
  onCreateLocation: (payload) => dispatch(createLocation(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LocationListPage);
