/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

import OwnerContactInfo from './components/OwnerContactInfo';

class NewLocationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerContactInfo: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
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
        locationPhone: '',
        website: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
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
          gender: true,
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

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    // const { updatedLocation: previousLocationState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState(updatedState);
  }

  render() {
    const { open, onClose } = this.props;
    const { ownerContactInfo, locationEmailSettings, locationContactInfo, locationBranding } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={onClose}>
              <div id="modal_user_create" className="modal modal-custom modal-custom-large modal-gray">
                <div className="card-modal card-main card grey lighten-3">
                  <div className="card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
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
                        <div className="col s12 l6">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Location Contact Info</h3>
                            <div className="card-main card">
                              <div className="card-content">
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_name_create" value="Tutor Doctor" />
                                    <label className="label" htmlFor="location_name_create">Location Name*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_nickname_create" value="Tutor Doctor - Newport Beach, CA" />
                                    <label className="label" htmlFor="location_nickname_create">Location Nickname*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_email_create" value="info@clearchoiceprep.com" />
                                    <label className="label" htmlFor="location_email_create">Location Email*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="tel" id="location_phone_create" />
                                    <label className="label" htmlFor="location_phone_create">Location Phone Number (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="url" id="location_website_create" />
                                    <label className="label" htmlFor="location_website_create">Website (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_address_create" />
                                    <label className="label" htmlFor="location_address_create">Street Address (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_city_create" />
                                    <label className="label" htmlFor="location_city_create">City (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="col s12 m6 l5">
                                    <div className="input-field">
                                      <select id="location_state_create">
                                        <option>State (optional)</option>
                                        <option>State</option>
                                        <option>State</option>
                                      </select>
                                      <label className="label" htmlFor="location_state_create">Test</label>
                                    </div>
                                  </div>
                                  <div className="col s12 m6 l7">
                                    <div className="input-field">
                                      <input type="tel" id="location_zip_create" />
                                      <label className="label" htmlFor="location_zip_create">Zip (optional)</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s12 l6">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Location Email Settings</h3>
                            <div className="card-main card">
                              <div className="card-content">
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="auto_email_create" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
                                    <label className="label" htmlFor="auto_email_create">Automated Emails Come From (email)*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <textarea id="email_salutation_create" className="materialize-textarea">All the best,The Clear Choice Team</textarea>
                                    <label className="label" htmlFor="email_salutation_create">Automated Email Salutation*</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 l6">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Location Branding</h3>
                            <div className="card-main card">
                              <div className="card-content">
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_url_create" value="newport-beach.tutordoctor.mysatcourse.com" />
                                    <label className="label" htmlFor="location_url_create">Location Url*</label>
                                  </div>
                                </div>
                                {/* <!-- colorpicker row --> */}
                                <div className="row mb-0">
                                  <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                                    <input type="text" className="js-spectrum-input" value="#123456" id="header_color_1_create" readOnly />
                                    <label className="label" htmlFor="header_color_1_create">Header Color 1*</label>
                                  </div>
                                  <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                                    <input type="text" className="js-spectrum-input" value="#123456" id="header_color_2_create" readOnly />
                                    <label className="label" htmlFor="header_color_2_create">Header Color 2*</label>
                                  </div>
                                </div>
                                {/* <!-- colorpicker row --> */}
                                <div className="row mb-0">
                                  <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                                    <input type="text" className="js-spectrum-input" value="#123456" id="header_logo_bgcolor_create" readOnly />
                                    <label className="label" htmlFor="header_logo_bgcolor_create">Header Logo Background Color*</label>
                                  </div>
                                  <div className="input-field col s12 m6">
                                    <input type="text" value="100%" id="header_logo_bg_alpha_create" />
                                    <label className="label" htmlFor="header_logo_bg_alpha_create">Header Logo Background Alpha*</label>
                                  </div>
                                </div>
                                {/* <!-- upload file row --> */}
                                <div className="row mb-0">
                                  <div className="file-input-custom file-field input-field col s12">
                                    <div className="file-path-wrapper">
                                      <input className="file-path" type="text" value="horiz_logo.png" id="horizontal_logo_create" />
                                      <label className="label" htmlFor="horizontal_logo_create">Horizontal Logo Variation*</label>
                                    </div>
                                    <span className="btn-upload">
                                      <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                      <input type="file" />
                                    </span>
                                  </div>
                                </div>
                                {/* <!-- upload file row --> */}
                                <div className="row mb-0">
                                  <div className="file-input-custom file-field input-field col s12">
                                    <div className="file-path-wrapper">
                                      <input className="file-path" type="text" value="square_logo.jpg" id="square_logo_create" />
                                      <label className="label" htmlFor="square_logo_create">Square Logo Variation*</label>
                                    </div>
                                    <span className="btn-upload">
                                      <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                      <input type="file" />
                                    </span>
                                  </div>
                                </div>
                                {/* <!-- upload file row --> */}
                                <div className="row mb-0">
                                  <div className="file-input-custom file-field input-field col s12">
                                    <div className="file-path-wrapper">
                                      <input className="file-path" type="text" value="background.jpg" id="background_image_create" />
                                      <label className="label" htmlFor="background_image_create">Background Image*</label>
                                    </div>
                                    <span className="btn-upload">
                                      <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                      <input type="file" />
                                    </span>
                                  </div>
                                </div>
                                {/* <!-- twocolumns row background here --> */}
                                <div className="row mb-0">
                                  <div className="col s12 m6">
                                    <div className="input-field">
                                      <input type="text" value="24" id="background_blur_create" />
                                      <label className="label" htmlFor="background_blur_create">Background Blur*</label>
                                    </div>
                                  </div>
                                  <div className="col s12 m6">
                                    <div className="input-field">
                                      <input type="text" value="70%" id="background_overlay_alpha_create" />
                                      <label className="label" htmlFor="background_blur_create">Background Overlay Alpha*</label>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- upload file row --> */}
                                <div className="row mb-0">
                                  <div className="file-input-custom file-field input-field col s12">
                                    <div className="file-path-wrapper">
                                      <input className="file-path" type="text" value="student_welcome_video.mp4" id="student_video_create" />
                                      <label className="label" htmlFor="student_video_create">Student Welcome Video (optional)</label>
                                    </div>
                                    <span className="btn-upload">
                                      <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                      <input type="file" />
                                    </span>
                                  </div>
                                </div>
                                {/* <!-- upload file row --> */}
                                <div className="row mb-0">
                                  <div className="file-input-custom file-field input-field col s12">
                                    <div className="file-path-wrapper">
                                      <input className="file-path" type="text" id="instructor_video_create" />
                                      <label className="label" htmlFor="instructor_video_create">Instructor Welcome Video (optional)</label>
                                    </div>
                                    <span className="btn-upload">
                                      <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                      <input type="file" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                      <a href="#" className="btn">Save</a>
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
                z-index: 999;
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
