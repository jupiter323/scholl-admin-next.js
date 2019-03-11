/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import UserInfo from './components/UserInfo';
import ContactInfo from './components/ContactInfo';
import UserLocation from './components/UserLocation';
import LocationModal from '../../Location/components/LocationModal';

import { nestedEditFieldValidation } from '../../utils/fieldValidation';

class DetailAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      originalUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        userLocation: {
          locations: [],
        },
      },
      updatedUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        userLocation: {
          locations: [],
        },
      },
      validation: {
        userInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true,
        },
      },
    };
  }

  componentDidMount() {
    const { user: { id, userInfo, contactInfo, userLocation } = {} } = this.props;
    const updatedUser = { id, userInfo, contactInfo, userLocation };
    const { originalUser: originalUserState } = this.state;
    const originalUser = update(originalUserState, {
      $merge: updatedUser,
    });
    this.setState({ originalUser, updatedUser }); // eslint-disable-line
  }

  // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
  // This resets the component state to reflect the details of the next user the user clicks on
  componentWillReceiveProps = (nextProps) => {
    if ((!this.state.originalUser || nextProps.user.id !== this.state.originalUser.id)) {
      const { user: { id, userInfo, contactInfo, userLocation } = {} } = nextProps;
      const updatedUser = { id, userInfo, contactInfo, userLocation };
      const { originalUser: originalUserState } = this.state;
      const originalUser = update(originalUserState, {
        $merge: nextProps.user,
      });
      this.setState({ originalUser, updatedUser });
    }
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // TODO: Clean this up once the react toast bugs are fixed. Just logging the validation response for now
  onSaveChanges = async (event) => {
    event.preventDefault();
    // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;
    const { updatedUser } = this.state;
    const valid = await nestedEditFieldValidation(this.state, this.state.updatedUser, this.onSetValidation, (validation) => console.warn('validation', validation));
    if (!valid) {
      // return onSaveChangesError();
      console.warn('not valid');
    }
    this.setState({ originalUser: this.state.updatedUser });
    // return onSavePassageChanges(updatedUser);
  }

  onRemoveOption = (optionIndex, section, array) => {
    const updatedUser = update(this.state.updatedUser, {
      [section]: {
        [array]: {
          $splice: [[optionIndex, 1]],
        },
      },
    });
    this.setState({ updatedUser });
  }

  initialUserMount = () => this.state.originalUser.id !== this.props.user.id;

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    const { updatedUser: previousUserState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedUser = update(previousUserState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ updatedUser });
  }

  handleOptionsChange = (selectedOptions, section, array) => {
    const updatedUser = update(this.state.updatedUser, {
      [section]: {
        [array]: {
          $set: selectedOptions,
        },
      },
    });
    this.setState({ updatedUser });
  }

  render() {
    const { locationModalOpen, updatedUser: { userInfo: updatedUserInfo, contactInfo: updatedContactInfo, userLocation: updatedUserLocation } } = this.state;
    const { user: { userInfo, contactInfo, userLocation } } = this.props;
    return (
      <React.Fragment>
        <LocationModal
          open={locationModalOpen}
          onClose={this.onCloseLocationModal}
          handleLocationsChange={(selectedLocations) => this.handleOptionsChange(selectedLocations, 'userLocation', 'locations')}
        />
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <div className="col s12 l5">
                <UserInfo
                  state={this.initialUserMount() ? userInfo : updatedUserInfo}
                  handleDetailsChange={this.handleDetailsChange}
                />
                <ContactInfo
                  state={this.initialUserMount() ? contactInfo : updatedContactInfo}
                  handleDetailsChange={this.handleDetailsChange}
                />
              </div>
              <UserLocation
                state={this.initialUserMount() ? userLocation : updatedUserLocation}
                onOpenLocationModal={this.onOpenLocationModal}
                onRemoveLocation={this.onRemoveOption}
              />
            </div>
            <div className="btn-holder align-right-sm">
              <a
                href="#"
                className="btn"
                onClick={this.onSaveChanges}
              >
                Save
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailAccountPage.propTypes = {
  user: PropTypes.object,
};

export default DetailAccountPage;
