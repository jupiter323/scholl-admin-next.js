import React from "react";
import update from 'immutability-helper';
import PropTypes from "prop-types";
import Portal from "../../../../Portal";
import ClickOffComponentWrapper from "../.././../../ClickOffComponentWrapper";
import Dropdown from "../../../../FormComponents/Dropdown";
import stateOptions from "../../../../utils/stateOptions";
import getValueFromState from '../../../../utils/getValueFromState';

import {
  updateStudentActivationApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi
} from "../../../index/api";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalStudent:{
        id:"",
        active: false,
        studentInformation: {
          firstName: '',
          lastName: '',
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: '',
        },
        emailAddress: {
          email: '',
        },
        location: {
          locations: [
            {
              locationNickname: '',
              locationName: '',
            },
            {
              locationNickname: '',
              locationName: '',
            },
            {
              locationNickname: '',
              locationName: '',
            },
          ],
        },
      },
      updatedStudent:{
        id:"",
        active: false,
        studentInformation: {
          firstName: '',
          lastName: '',
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: '',
        },
        emailAddress: {
          email: '',
        },
        location: {
          locations: [
            {
              locationNickname: '',
              locationName: '',
            },
            {
              locationNickname: '',
              locationName: '',
            },
            {
              locationNickname: '',
              locationName: '',
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    const { student: { id, active,studentInformation, contactInformation, emailAddress, location } = {} } = this.props;
    const updatedStudent = { id, active,studentInformation, contactInformation, emailAddress, location };
    const { originalStudent: originalStudentState } = this.state;
    const originalStudent = update(originalStudentState, {
      $merge: updatedStudent,
    });
    this.setState({ originalStudent, updatedStudent }); // eslint-disable-line
  }

  // This resets the component state to reflect the details of the next student the user clicks on
  componentWillReceiveProps = (nextProps) => {
    if ((!this.state.originalStudent || nextProps.student.id !== this.state.originalStudent.id)) {
      const { student: { id, active,studentInformation, contactInformation, emailAddress, location} = {} } = nextProps;
      const updatedStudent = { id, active,studentInformation, contactInformation, emailAddress, location };
      const { originalStudent: originalStudentState } = this.state;
      const originalStudent = update(originalStudentState, {
        $merge: nextProps.student,
      });
      this.setState({ originalStudent, updatedStudent });
    }
  }

  initialStudentMount = () => this.state.originalStudent.id !== this.props.student.id;

  handleDetailsChange = (event, name,section) => {
    const { updatedStudent: previousStudentState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedStudent = update(previousStudentState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ updatedStudent });
    this.handleUnitApiUpdate(name, value);
  };

  // Fired after every handleDetailsChange call to make the appropriate update api call
  // eslint-disable-next-line consistent-return
  handleUnitApiUpdate = async (name, value) => {
    const {
      student: { id:student_id },
    } = this.props;
    switch (name) {
      case "firstName":
        return await updateStudentFirstNameApi({
          student_id,
          first_name: value
        });
      case "lastName":
        return await updateStudentLastNameApi({ student_id, last_name: value });
      case "email":
        return await updateStudentEmailApi({ student_id, email: value });
      case "phone":
        return await updateStudentPhoneApi({ student_id, phone: value });
      case "addressLine1":
        return await updateStudentAddressApi({ student_id, address: value });
      case "city":
        return await updateStudentCityApi({ student_id, city: value });
      case "state":
        return await updateStudentStateApi({ student_id, state: value });
      case "zipCode":
        return await updateStudentZipApi({ student_id, zip: value });
      default:
        break;
    }
  };


  onSubmit = async (event) => {
    event.preventDefault();
    const { updatedStudent: { id, active,studentInformation, contactInformation, emailAddress, location }} = this.state;
    const { onSaveStudentChanges, onCloseEditModal } = this.props;
    const postBody = { id, active,studentInformation, contactInformation, emailAddress, location };
    onSaveStudentChanges(postBody);
    onCloseEditModal();
  }

  render() {
    const { open, onCloseEditModal, student:{id,active,studentInformation, contactInformation, emailAddress, location} } = this.props;
    const {
      updatedStudent: {
        active:updatedActive,studentInformation:updatedStudentInformation, contactInformation:updatedContactInformation, emailAddress:updatedEmailAddress, location:updatedLocation,
      },
    } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={onCloseEditModal}>
              <div
                id="modal_user_edit"
                className="modal modal-custom modal-custom-large modal-gray"
              >
                <form action="#" className="custom-form">
                  <fieldset>
                    <div className="card-modal card-main card grey lighten-3">
                      <div
                        className="owner-box card-panel card-panel-title"
                        style={{ backgroundColor: "#31837a", color: "#fff" }}
                      >
                        <div className="card-panel-row row">
                          <div className="col s9">
                            <div className="user-block">
                              <div
                                className="user-circle"
                                style={{
                                  backgroundColor: "#0085ce",
                                  color: "#fff"
                                }}
                              >
                                <img
                                  src="./static/images/img-owner01.jpg"
                                  alt=""
                                />
                              </div>
                              <div
                                className="user-text"
                                style={{ color: "#fff" }}
                              >
                                <h4 className="h3">Ownerly, Jennifer</h4>
                                <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                                  &#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                                </a>
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
                                          value = {this.initialStudentMount() ? studentInformation.firstName : updatedStudentInformation.firstName}
                                          onChange={event => this.handleDetailsChange(event,"firstName","studentInformation")}
                                        />
                                        <label
                                          className={studentInformation.firstName ? 'label active' : 'label'}
                                          htmlFor="firstName"
                                        >
                                          FirstName
                                        </label>
                                      </div>
                                    </div>
                                    <div className="row mb-0">
                                      <div className="input-field col s12">
                                        <input
                                          type="text"
                                          id="lastName"
                                          name="lastName"
                                          value = {this.initialStudentMount() ? studentInformation.lastName : updatedStudentInformation.lastName}
                                          onChange={event => this.handleDetailsChange(event,"lastName","studentInformation")}
                                        />
                                        <label
                                          className={studentInformation.lastName ? 'label active' : 'label'}
                                          htmlFor="lastName"
                                        >
                                          LastName
                                        </label>
                                      </div>
                                    </div>
                                    <div className="row mb-0">
                                      <div className="input-field col s12">
                                        <input
                                          type="text"
                                          id="email"
                                          name="email"
                                          value = {this.initialStudentMount() ? emailAddress.email : updatedEmailAddress.email}
                                          onChange={event => this.handleDetailsChange(event,"email","emailAddress")}
                                        />
                                        <label
                                          className={emailAddress.email ? 'label active' : 'label'}
                                          htmlFor="email"
                                        >
                                          Email
                                        </label>
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
                                          value = {this.initialStudentMount() ? contactInformation.phone : updatedContactInformation.phone}
                                          onChange={event => this.handleDetailsChange(event,"phone","contactInformation")}
                                        />
                                        <label
                                          className={contactInformation.phone ? 'label active' : 'label'}
                                          htmlFor="phone"
                                        >
                                          Phone
                                        </label>
                                      </div>
                                    </div>
                                    <div className="row mb-0">
                                      <div className="input-field col s12">
                                        <input
                                          type="text"
                                          id="address"
                                          name="address"
                                          value = {this.initialStudentMount() ? contactInformation.addressLine1 : updatedContactInformation.addressLine1}
                                          onChange={event => this.handleDetailsChange(event,"addressLine1","contactInformation")}
                                        />
                                        <label
                                          className={contactInformation.addressLine1 ? 'label active' : 'label'}
                                          htmlFor="address"
                                        >
                                          Address
                                          (optional)
                                        </label>
                                      </div>
                                    </div>
                                    <div className="row mb-0">
                                      <div className="input-field col s12">
                                        <input
                                          type="text"
                                          id="city"
                                          value = {this.initialStudentMount() ? contactInformation.city : updatedContactInformation.city}
                                          name="city"
                                          onChange={event => this.handleDetailsChange(event,"city","contactInformation")}
                                        />
                                        <label className={contactInformation.city ? 'label active' : 'label'} htmlFor="city">
                                          City
                                          (optional)
                                        </label>
                                      </div>
                                    </div>
                                    <div className="row mb-0">
                                      <div className="col s12 m6 l5">
                                        <div className="input-field">
                                          <Dropdown
                                            value={this.initialStudentMount() ?getValueFromState(contactInformation.state, stateOptions):getValueFromState(updatedContactInformation.state, stateOptions)}
                                            name="state"
                                            onChange={event => this.handleDetailsChange(event,"state","contactInformation")}
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
                                            id="zipCode"
                                            name="zipCode"
                                            value = {this.initialStudentMount() ? contactInformation.zipCode : updatedContactInformation.zipCode}
                                            onChange={event => this.handleDetailsChange(event,"zipCode","contactInformation")}
                                          />
                                          <label
                                            className={contactInformation.zipCode ? 'label active' : 'label'}
                                            htmlFor="zipCode"
                                          >
                                            zipCode
                                            (optional)
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col s12 l6">
                              <div className="card-block">
                                <h3>Location(s)</h3>
                                <div className="card-main card-location card card-large">
                                  <div className="card-panel card-panel-location"
                                    style={{
                                      backgroundColor: "#62b771",
                                      color: "#fff"
                                    }}
                                  >
                                    <div className="card-panel-row row">
                                      <div className="col s9">
                                        <h3 className="h4 truncate">
                                          Tutor Doctor
                                        </h3>
                                        <h4 className="sub-title">
                                          Tutor Doctor - Austin, TX
                                        </h4>
                                      </div>
                                      <div className="col s3">
                                        <div className="row icons-row">
                                          <div className="col">
                                            <span className="block-icon">
                                              <i className="icon-location"></i>
                                              <span className="text-icon">
                                                Location
                                              </span>
                                            </span>
                                          </div>
                                          <div className="dropdown-block col">
                                            <a className="dropdown-trigger btn" href="#">
                                              <i className="material-icons dots-icon">
                                                more_vert
                                              </i>
                                            </a>
                                            <ul id="dropdown105" className="dropdown-content dropdown-wide">
                                              <li>
                                                <a
                                                  href="#modal_location_edit"
                                                  className="modal-trigger link-block"
                                                >
                                                  Edit
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#!">Clone</a>
                                              </li>
                                              <li>
                                                <a href="#!">Delete</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="card-main card-location card card-large">
                                  <div className="card-panel card-panel-location"
                                    style={{
                                      backgroundColor: "#62b771",
                                      color: "#fff"
                                    }}
                                  >
                                    <div className="card-panel-row row">
                                      <div className="col s9">
                                        <h3 className="h4 truncate">
                                          Tutor Doctor
                                        </h3>
                                        <h4 className="sub-title">
                                          Tutor Doctor - Dallas, TX
                                        </h4>
                                      </div>
                                      <div className="col s3">
                                        <div className="row icons-row">
                                          <div className="col">
                                            <span className="block-icon">
                                              <i className="icon-location"></i>
                                              <span className="text-icon">
                                                Location
                                              </span>
                                            </span>
                                          </div>
                                          <div className="dropdown-block col">
                                            <a className="dropdown-trigger btn" href="#">
                                              <i className="material-icons dots-icon">
                                                more_vert
                                              </i>
                                            </a>
                                            <ul id="dropdown106" className="dropdown-content dropdown-wide">
                                              <li>
                                                <a href="#modal_location_edit" className="modal-trigger link-block">
                                                  Edit
                                                </a>
                                              </li>
                                              <li>
                                                <a href="#!">Clone</a>
                                              </li>
                                              <li>
                                                <a href="#!">Delete</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="add-box">
                                  <div className="add-box-holder">
                                    <a className="btn-floating waves-effect waves-light green lighten-1">
                                      <i className="material-icons">add</i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <a href="#!" className="waves-effect waves-teal btn-flat pink-text text-darken-1">
                            Delete
                          </a>
                          <a
                            href="#!"
                            className="modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
                            onClick={onCloseEditModal}
                          >
                            Cancel
                          </a>
                          <a href="#" className="btn" onClick={this.onSubmit}>
                            Save
                          </a>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
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
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                0 9px 46px 8px rgba(0, 0, 0, 0.12),
                0 11px 15px -7px rgba(0, 0, 0, 0.2);
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

EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseEditModal: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
  onSaveStudentChanges:PropTypes.func.isRequired,
};
export default EditModal;
