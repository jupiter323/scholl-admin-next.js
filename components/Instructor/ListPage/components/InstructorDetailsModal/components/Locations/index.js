/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Modal from '../../../../../../Modal';

import NewLocationModal from '../../../../../../Location/components/NewLocationModal';
import LocationDetailsModal from '../../../../../../Location/components/LocationDetailsModal';
import LocationRow from './components/LocationRow';

import { saveNewSuccess as saveLocationSuccess, saveChangesSuccess, saveNewError as saveLocationError } from '../../../../../../utils/fieldValidation';
import sampleLocations from '../../../../../../Location/utils/sampleLocationList';

const idGenerator = () => Math.floor((Math.random() * 100) + 1);

const validationFieldMap = {
  locationName: 'Location Name',
  locationNickname: 'Location Nickname',
  locationEmail: 'Location Email',
  automatedEmailOrigin: 'Automated Email Origin',
  automatedEmailSalutation: 'Automated Email Salutation',
  locationUrl: 'Location Url',
  headerColor1: 'Header Color 1',
  headerColor2: 'Header Color 2',
  headerLogoBackgroundColor: 'Header Logo Background Color',
  headerLogoBackgroundAlpha: 'Header Logo Background Alpha',
  horizontalLogoVariation: 'Horizonal Logo Variation',
  squareLogoVariation: 'Square Logo Variation',
  backgroundImage: 'Background Image',
  backgroundBlur: 'Background Blur',
  backgroundOverlayAlpha: 'Background Overlay  Alpha',
};

// TODO: mock out update/delete action to backend
// TODO: Will this delete just remove the location from the owner or delete the location altogethe?
class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: sampleLocations,
      dropdownIndex: null,
      pendingLocationDelete: {},
      locationValidation: {},
    };
  }

  onSetLocationValidation = locationValidation => this.setState({ locationValidation });

  // This function is stubbing out what should happen when the location is saved
  // We finish by pushing the new location to this page's state
  onSaveNewLocation = ({ locationContactInfo, locationEmailSettings, locationBranding, owner }) => {
    this.onCloseNewLocationModal();
    const newLocation = {
      id: idGenerator(),
      owner,
      locationContactInfo,
      locationEmailSettings,
      locationBranding,
      locationBasicInfo: {
        activeStudents: 0,
        pastStudents: 0,
        unactivatedStudents: 0,
        averageImprovement: 0,
        averageInitialScore: 0,
        averageFinalScore: 0,
        studentsAchievingTargetScore: 0,
      },
    };
    const locations = update(this.state.locations, {
      $push: [newLocation],
    });
    this.setState({ locations });
    saveLocationSuccess('location');
  }

  // IMPORTANT: This update implementation starts by destructuring the three sections of the location being edited in addition to its id
  // Grabs location to update based on its index in array of current locations
  // Use immutability-helper splice function to replace previous instace of the location with the incoming updated version
  onSaveLocationChanges = ({ id, locationContactInfo, locationEmailSettings, locationBranding }) => {
    const { locations: originalLocations } = this.state;
    const { onCloseDropdown } = this.props;
    const locationToUpdate = originalLocations.filter(location => location.id === id)[0];
    const updatedLocation = update(locationToUpdate, {
      locationContactInfo: {
        $set: locationContactInfo,
      },
      locationEmailSettings: {
        $set: locationEmailSettings,
      },
      locationBranding: {
        $set: locationBranding,
      },
    });
    const updatedLocationIndex = originalLocations.indexOf(locationToUpdate);
    const locations = update(originalLocations, {
      $splice: [[updatedLocationIndex, 1, updatedLocation]],
    });
    saveChangesSuccess();
    this.setState({ locations });
    onCloseDropdown();
    return this.onCloseEditLocationModal();
  }

  onConfirmDeleteLocation = () => {
    const { pendingLocationDelete, onCloseDeleteLocationModal } = this.props;
    this.onDeleteLocation(pendingLocationDelete);
    onCloseDeleteLocationModal();
  }

  onDeleteLocation = (deletedLocation) => {
    const updatedState = update(this.state, {
      locations: unfilteredLocations => unfilteredLocations.filter(location => location.id !== deletedLocation.id),
    });
    this.setState({ locations: updatedState.locations });
    this.props.onCloseDropdown();
  }

  handleDropdownClick = (event, index) => {
    const { dropdownIsOpen, onCloseDropdown, onSetDropdown } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  mapUserLocations = () => this.state.locations.map((location, index) => (
    <LocationRow
      key={index}
      index={index}
      location={location}
      dropdownIndex={this.props.dropdownIndex}
      dropdownIsOpen={this.props.dropdownIsOpen}
      handleDropdownClick={this.handleDropdownClick}
      onOpenEditLocationModal={() => this.props.onOpenEditLocationModal(location)}
      onOpenDeleteModal={() => this.props.onOpenDeleteLocationModal(location)}
    />
  ))

  render() {
    const { deleteLocationModalOpen, activeLocation, newLocationModalOpen, editLocationModalOpen, onOpenNewLocationModal, onCloseNewLocationModal, onCloseEditLocationModal, onCloseDeleteLocationModal } = this.props;
    return (
      <React.Fragment>
        <Modal
          open={deleteLocationModalOpen}
          onConfirm={this.onConfirmDeleteLocation}
          onClose={onCloseDeleteLocationModal}
          header="Are You Sure?"
          body="Deleting this location will be permanent"
        />
        <NewLocationModal
          fromInstructorPage
          open={newLocationModalOpen}
          onClose={onCloseNewLocationModal}
          onSaveNewLocation={this.onSaveNewLocation}
          onSaveLocationError={() => saveLocationError(this.state.locationValidation, validationFieldMap)}
          onSetLocationValidation={this.onSetLocationValidation}
        />
        <LocationDetailsModal
          location={activeLocation}
          open={editLocationModalOpen}
          onClose={onCloseEditLocationModal}
          onSaveLocationError={() => saveLocationError(this.state.locationValidation, validationFieldMap)}
          onSetLocationValidation={this.onSetLocationValidation}
          onSaveLocationChanges={this.onSaveLocationChanges}
        />
        <div className="card-block">
          <h3>Location(s)</h3>
          {this.mapUserLocations()}
          <div className="add-box">
            <div className="add-box-holder">
              <a
                href="#"
                onClick={onOpenNewLocationModal}
                className="btn-floating waves-effect waves-light green lighten-1"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Locations.propTypes = {
  activeLocation: PropTypes.object,
  dropdownIndex: PropTypes.number,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  newLocationModalOpen: PropTypes.bool.isRequired,
  editLocationModalOpen: PropTypes.bool.isRequired,
  pendingLocationDelete: PropTypes.object.isRequired,
  deleteLocationModalOpen: PropTypes.bool.isRequired,
  onOpenNewLocationModal: PropTypes.func.isRequired,
  onCloseNewLocationModal: PropTypes.func.isRequired,
  onOpenEditLocationModal: PropTypes.func.isRequired,
  onCloseEditLocationModal: PropTypes.func.isRequired,
  onOpenDeleteLocationModal: PropTypes.func.isRequired,
  onCloseDeleteLocationModal: PropTypes.func.isRequired,
};

export default Locations;
