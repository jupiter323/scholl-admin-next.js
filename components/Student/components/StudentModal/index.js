import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../../Portal';
import Dropdown from '../../../FormComponents/Dropdown';
import genderOptions from '../../../utils/genderOptions';
import getValueFromState from '../../../utils/getValueFromState';
import stateOptions from '../../../utils/stateOptions';
import Location from './components/Location';

// eslint-disable-next-line react/prefer-stateless-function
class StudentModal extends React.Component {
  render() {
    const { state, open, handleChange, onSave, onClose, onOpenLocationModal, onRemoveLocation, onDeleteNewStudent } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">

            <div id="modal_user_edit" className="modal modal-custom modal-custom-large modal-gray">
              <form action="#" className="custom-form" >
                <fieldset>
                  <div className="card-modal card-main card grey lighten-3">
                    <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: "#31837a", color: "#fff" }}>
                      <div className="card-panel-row row">
                        <div className="col s9">
                          <div className="user-block">
                            <div className="user-circle" style={{ backgroundColor: "#0085ce", color: "#fff" }}>
                              <img src="images/img-owner01.jpg" alt="" />
                            </div>
                            <div className="user-text" style={{ color: "#fff" }}>
                              <h4 className="h3">Ownerly, Jennifer</h4>
                              <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                            </div>
                          </div>
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
                          <div className="col s12 l6">

                            {/* form panel */}
                            <div className="card-block">
                              <h3>Account Info</h3>
                              <div className="card-main card">
                                <div className="card-content">
                                  <div className="row mb-0">
                                    <div className="input-field col s12">
                                      <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={state.studentInformation.firstName}
                                        onChange={(event) => handleChange(event, 'firstName', 'studentInformation')} />
                                      <label className="label" htmlFor="firstName">First Name*</label>
                                    </div>
                                  </div>
                                  <div className="row mb-0">
                                    <div className="input-field col s12">
                                      <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={state.studentInformation.lastName}
                                        onChange={(event) => handleChange(event, 'lastName', 'studentInformation')} />
                                      <label className="label" htmlFor="lastName">Last Name*</label>
                                    </div>
                                  </div>
                                  <div className="row mb-0">
                                    <div className="input-field col s12">
                                      <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={state.emailAddress.email}
                                        onChange={(event) => handleChange(event, 'email', 'emailAddress')} />
                                      <label className="label" htmlFor="email">Email Address*</label>
                                    </div>
                                  </div>
                                  <div className="row mb-0">
                                    <div className="">
                                      <div className="input-field col s12 l7">
                                        <Dropdown
                                          value={getValueFromState(state.studentInformation.gender, genderOptions)}
                                          onChange={(event) => handleChange(event, 'gender', 'studentInformation')}
                                          options={genderOptions}
                                          label="Gender"
                                          stateKey="state"
                                          dropdownKey="state"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* form panel */}
                            <div className="card-block">
                              <h3>Contact Info</h3>
                              <div className="card-main card">
                                <div className="card-content">
                                  <div className="row mb-0">
                                    <div className="input-field col s12">
                                      <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={state.contactInformation.phone}
                                        onChange={(event) => handleChange(event, 'phone', 'contactInformation')} />
                                      <label className="label" htmlFor="phone">Phone (optional)</label>
                                    </div>
                                  </div>
                                  <div className="row mb-0">
                                    <div className="input-field col s12">
                                      <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={state.contactInformation.addressLine1}
                                        onChange={(event) => handleChange(event, 'addressLine1', 'contactInformation')} />
                                      <label className="label" htmlFor="address">Street Address (optional)</label>
                                    </div>
                                  </div>
                                  <div className="row mb-0">
                                    <div className="input-field col s12">
                                      <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={state.contactInformation.city}
                                        onChange={(event) => handleChange(event, 'city', 'contactInformation')} />
                                      <label className="label" htmlFor="city">City (optional)</label>
                                    </div>
                                  </div>
                                  <div className="row mb-0">
                                    <div className="col s12 m6 l5">
                                      <div className="input-field">
                                        <Dropdown
                                          value={getValueFromState(state.contactInformation.state, stateOptions)}
                                          onChange={(event) => handleChange(event, 'state', 'contactInformation')}
                                          options={stateOptions}
                                          label="State"
                                          stateKey="state"
                                          dropdownKey="state"
                                        />
                                      </div>
                                    </div>
                                    <div className="col s12 m6 l7">
                                      <div className="input-field">
                                        <input
                                          type="tel"
                                          name="zipCode"
                                          id="zipCode"
                                          value={state.contactInformation.zipCode}
                                          onChange={(event) => handleChange(event, 'zipCode', 'contactInformation')} />
                                        <label className="label" htmlFor="zipCode">Zip (optional)</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col s12 l6">
                            <Location locations={state.location.locations} onOpenLocationModal={onOpenLocationModal} onRemoveLocation={onRemoveLocation} />
                            <div className="modal-footer">
                              <a href="#!" className="waves-effect waves-teal btn-flat pink-text text-darken-1" onClick={onDeleteNewStudent}>Delete</a>
                              <a href="#!" className="modal-close waves-effect waves-teal btn-flat grey-text text-darken-1" onClick={onClose}>Cancel</a>
                              <a href="#" className="btn" onClick={onSave}>Save</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
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
            #modal_Location1 {
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
      </Portal >
    )
  }
};

StudentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  onOpenLocationModal: PropTypes.func.isRequired,
  onRemoveLocation: PropTypes.func.isRequired,
  onDeleteNewStudent: PropTypes.func.isRequired,
};

export default StudentModal;

