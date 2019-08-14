/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../Portal';
import ClickOffComponentWrapper from '../../../ClickOffComponentWrapper';

import OwnerSection from '../SharedModalComponents/OwnerSection';
import LocationContactInfo from '../SharedModalComponents/LocationContactInfo';
import LocationEmailSettings from '../SharedModalComponents/LocationEmailSettings';
import LocationBranding from '../SharedModalComponents/LocationBranding';

import sampleOwners from '../NewLocationModal/utils/sampleOwners';
import { nestedEditFieldValidation } from '../../../utils/fieldValidation';

// TODO: Render only one instance of this modal
class LocationDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: null,
      userListModalOpen: false,
      changeModalOpen: false,
      originalLocation: {
        id: '',
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
        locationEmailSettings: {
          automatedEmailOrigin: '',
          automatedEmailSalutation: '',
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
      },
      updatedLocation: {
        id: '',
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
        locationEmailSettings: {
          automatedEmailOrigin: '',
          automatedEmailSalutation: '',
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
      },
      validation: {
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true,
        },
        locationEmailSettings: {
          automatedEmailOrigin: true,
          automatedEmailSalutation: true,
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

  componentDidMount() {
    const { location: { owner, id, locationContactInfo, locationEmailSettings, locationBranding } = {} } = this.props;
    const updatedLocation = { owner, id, locationContactInfo, locationEmailSettings, locationBranding };
    const { originalLocation: originalLocationState } = this.state;
    const originalLocation = update(originalLocationState, {
      $merge: updatedLocation,
    });
    this.setState({ originalLocation, updatedLocation }); // eslint-disable-line
  }

  // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
  // This resets the component state to reflect the details of the next user the user clicks on
  componentWillReceiveProps = (nextProps) => {
    if ((!this.state.originalLocation || nextProps.location.id !== this.state.originalLocation.id)) {
      const { location: { owner, id, locationContactInfo, locationEmailSettings, locationBranding } = {} } = nextProps;
      const updatedLocation = { owner, id, locationContactInfo, locationEmailSettings, locationBranding };
      const { originalLocation: originalLocationState } = this.state;
      const originalLocation = update(originalLocationState, {
        $merge: nextProps.location,
      });
      this.setState({ originalLocation, updatedLocation });
    }
  }

  // UserListModal is used to assign and reassign users to a new location
  onOpenUserListModal = () => this.setState({ userListModalOpen: true, changeModalOpen: false });
  onCloseUserListModal = () => this.setState({ userListModalOpen: false });

  // ChangeModal pops up when user clicks on set owner and asks for confirmation that they wish to assign a new owner to the new location
  onOpenChangeModal = () => this.setState({ changeModalOpen: true });
  onCloseChangeModal = () => this.setState({ changeModalOpen: false });

  // This function is passed into nestedEditFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // If all the fields are valid, we construct a post body and call onSaveLocationChanges passed down from the container level
  onSubmit = async (event) => {
    event.preventDefault();
    const { updatedLocation } = this.state;
    const { onSaveLocationChanges, onSaveLocationError, onClose } = this.props;
    // const valid = true;
    const valid = await nestedEditFieldValidation(this.state, this.state.updatedLocation, this.onSetValidation, this.props.onSetLocationValidation);
    if (!valid) {
      return onSaveLocationError();
    }
    onSaveLocationChanges(updatedLocation);
    return onClose();
  }

  initialLocationMount = () => this.state.originalLocation.id !== this.props.location.id;

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, stateKey) => {
    const { updatedLocation: previousLocationState } = this.state;
    let value;
    if (event.hex) {
      value = event.hex;
    } else if (event.target) {
      value = event.target.value;
    } else {
      value = event;
    }
    let updatedLocation;
    if (name === 'owner') {
      updatedLocation = update(previousLocationState, {
        owner: {
          $set: event,
        },
      });
    } else {
      updatedLocation = update(previousLocationState, {
        [stateKey]: {
          $merge: { [name]: value },
        },
      });
    }
    this.setState({ updatedLocation });
  }

  render() {
    const { open, onClose, location } = this.props;
    const { owner, locationContactInfo, locationEmailSettings, locationBranding } = location;
    const {
      updatedLocation: { owner: updatedOwner, locationContactInfo: updatedLocationContactInfo, locationEmailSettings: updatedLocationEmailSettings, locationBranding: updatedLocationBranding },
      validation: { locationContactInfo: locationContactInfoValidation, locationEmailSettings: locationEmailSettingsValidation, locationBranding: locationBrandingValidation },
      userListModalOpen, changeModalOpen } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <form>
            <div className="overlay">
              <ClickOffComponentWrapper nestedModals={userListModalOpen || changeModalOpen} onOuterClick={onClose}>
                <div id="modal_location_create" className="modal modal-custom modal-custom-large modal-gray">
                  <div className="card-modal card-main card grey lighten-3">
                    <div className="card-panel card-panel-title green lighten-1 white-text">
                      <div className="card-panel-row row">
                        <div className="col">
                          <h3 className="h2">
                            <span className="heading-holder">
                              <span className="heading-block">Edit Location</span>
                            </span>
                          </h3>
                        </div>
                        <div className="col" style={{ textAlign: 'right' }}>
                          <span className="block-icon">
                            <i className="icon-location"></i>
                            <span className="text-icon">Location</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row mb-0">
                          <div className="col s12 l6">
                            <OwnerSection
                              owner={this.initialLocationMount() ? owner : updatedOwner}
                              userList={sampleOwners}
                              handleDetailsChange={this.handleDetailsChange}
                              userListModalOpen={userListModalOpen}
                              changeModalOpen={changeModalOpen}
                              onOpenUserListModal={this.onOpenUserListModal}
                              onCloseUserListModal={this.onCloseUserListModal}
                              onOpenChangeModal={this.onOpenChangeModal}
                              onCloseChangeModal={this.onCloseChangeModal}
                            />
                            <LocationContactInfo
                              state={this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo}
                              handleDetailsChange={this.handleDetailsChange}
                              validation={locationContactInfoValidation}
                              noColumn
                            />
                            <LocationEmailSettings
                              state={this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings}
                              handleDetailsChange={this.handleDetailsChange}
                              validation={locationEmailSettingsValidation}
                              noColumn
                            />
                          </div>
                          <LocationBranding
                            state={this.initialLocationMount() ? locationBranding : updatedLocationBranding}
                            handleDetailsChange={this.handleDetailsChange}
                            validation={locationBrandingValidation}
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1" onClick={onClose}>Cancel</a>
                        <a href="#" className="btn" style={{ color: 'white' }} onClick={this.onSubmit}>Save</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ClickOffComponentWrapper>
            </div>
          </form>
        )}

        <style jsx>
          {`
              h4 {
                font-size: 2.28rem;
                line-height: 110%;
                margin: 1.52rem 0 .912rem 0;
                margin-top: 0;
              }
              p {
                font-size: 16px;
                color: #343434;
              }
              p.passage {
                font-size: 14px;
              }
              a {
                color: #343434;
              }
              .overlay {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 1999;
              }
              .modal {
                display: block;
                background-color: transparent;
                position: absolute;
                top: 10%;
                right: 10%;
                left: 10%;
                box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
              }
              .modal-footer {
                background-color: white;
              }
              .modal-custom {
                opacity: 1;
                visibility: visible;
              }
              .modal-full-size {
                z-index: 999;
                width: 100%;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
              }
            `}
        </style>
      </Portal>
    );
  }
}

LocationDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSetLocationValidation: PropTypes.func.isRequired,
};

export default LocationDetailsModal;
