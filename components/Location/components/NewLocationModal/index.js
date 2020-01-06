/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../Portal';
import ClickOffComponentWrapper from '../../../ClickOffComponentWrapper';

import OwnerContactInfo from './components/OwnerContactInfo';
import LocationContactInfo from '../SharedModalComponents/LocationContactInfo';
import LocationEmailSettings from '../SharedModalComponents/LocationEmailSettings';
import LocationBranding from '../SharedModalComponents/LocationBranding';

import { nestedCreateFieldValidation } from '../../../utils/fieldValidation';
import initialState from '../../utils/initialState';

class NewLocationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerContactInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
      },
      locationEmailSettings: {
        automatedEmailOriginAddress: '',
        automatedEmailSalutation: '',
      },
      locationContactInfo: {
        locationName: '',
        locationNickname: '',
        locationEmail: '',
        locationPhoneNumber: '',
        website: '',
        locationStreetAddress: '',
        locationCity: '',
        locationState: '',
        locationZip: '',
      },
      locationBranding: {
        locationUrl: '',
        headerColor1: '',
        headerColor2: '',
        headerLogoBackgroundColor: '',
        headerLogoBackgroundAlpha: '',
        horizontalLogoVariation: '',
        squareLogoVariation: '',
        backgroundImage: '',
        backgroundBlur: '',
        backgroundOverlayAlpha: '',
        studentWelcomeVideo: '',
        instructorWelcomeVideo: '',
      },
      validation: {
        ownerContactInfo: {
          firstName: true,
          lastName: true,
          email: true,
        },
        locationEmailSettings: {
          automatedEmailOriginAddress: true,
          automatedEmailSalutation: true,
        },
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true,
        },
        locationBranding: {
          locationUrl: true,
          headerColor1: true,
          headerColor2: true,
          headerLogoBackgroundColor: true,
          headerLogoBackgroundAlpha: true,
          horizontalLogoVariation: true,
          squareLogoVariation: true,
          backgroundImage: true,
          backgroundBlur: true,
          backgroundOverlayAlpha: true,
        },
      },
    };
  }

  // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // If all the fields are valid, we construct a post body and call onSaveNewLocation passed down from the container level
  onSubmit = async (event) => {
    event.preventDefault();
    const { owner, locationContactInfo, locationEmailSettings, locationBranding } = this.state;
    const { onSaveNewLocation, onSaveLocationError, onAddNewLocation, fromInstructorPage = false } = this.props;
    // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
    // const valid = true;
    const valid = await nestedCreateFieldValidation(this.state, this.onSetValidation, (validation) => console.warn('validation', validation));
    if (!valid) {
      // return onSaveLocationError();
      console.warn('not valid');
    }
    const postBody = { locationContactInfo, locationEmailSettings, locationBranding, owner };
    if (fromInstructorPage) {
      onSaveNewLocation(postBody);
    } else {
      onAddNewLocation(postBody);
    }
    console.warn('stubbed out save function');
    this.onCloseModal();
  }

  onResetLocation = () => this.setState(initialState);

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetLocation();
  }

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    let value;
    if (event.hex) {
      value = event.hex;
    } else {
      value = event.target ? event.target.value : event;
    }
    const updatedState = update(this.state, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState(updatedState);
  }

  render() {
    const { open } = this.props;
    const { ownerContactInfo, locationEmailSettings, locationContactInfo, locationBranding } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_user_create" className="modal modal-custom modal-custom-large modal-gray">
                <div className="card-modal card-main card grey lighten-3">
                  <div className="card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col" style={{ display: 'block' }}>
                        <h3 className="h2">
                          <span className="heading-holder">
                            <span className="heading-block">Create New Owner</span>
                          </span>
                        </h3>
                      </div>
                      <div className="col">
                        <span className="block-icon">
                          <i className="icon-owner"></i>
                          <span className="text-icon">Owner</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <div className="row mb-0">
                        <OwnerContactInfo
                          state={ownerContactInfo}
                          handleDetailsChange={this.handleDetailsChange}
                        />
                        <LocationContactInfo
                          state={locationContactInfo}
                          handleDetailsChange={this.handleDetailsChange}
                        />
                      </div>
                      <div className="row mb-0">
                        <LocationEmailSettings
                          state={locationEmailSettings}
                          handleDetailsChange={this.handleDetailsChange}
                        />
                        <LocationBranding
                          state={locationBranding}
                          handleDetailsChange={this.handleDetailsChange}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="#!"
                        onClick={this.onCloseModal}
                        className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                      >
                        Cancel
                      </a>
                      <a
                        href="#"
                        className="btn"
                        onClick={this.onSubmit}
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
              .overlay {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1999;
              }
              .card-modal {
                margin: 0;
                border-radius: 6px;
              }
              .modal {
                display: block;
                background-color: white;
                position: absolute;
                top: 10%;
                right: 10%;
                left: 10%;
                box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
              }
              .modal-custom {
                opacity: 1;
                visibility: visible;
              }
              .modal-footer {
                background-color: white;
              }
            `}
        </style>
      </Portal>
    );
  }
}

NewLocationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewLocationModal;
