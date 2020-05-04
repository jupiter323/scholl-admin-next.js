// TODO: change componentDidMount for when user comes though as props, profile pic change

import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import update from 'immutability-helper';
import Router from 'next/router';
import { StickyContainer, Sticky } from 'react-sticky';
import Dropdown from '../components/FormComponents/Dropdown';
import getValueFromState from '../components/utils/getValueFromState';
import stateOptions from '../components/utils/stateOptions';
import { nestedEditFieldValidation } from '../components/utils/fieldValidation';
import sampleInstructors from "../components/utils/sampleInstructors";
import { makeSelectCurrentUser } from '../components/User/index/selectors';
import UpdatePasswordModal from '../components/User/components/UpdatePasswordModal';
import {
  loggedIn,
} from "../utils/AuthService";

const timeZoneOptions = [
  {
    label: "(UTC - 10:00) Hawaii Time Zone (US)",
    value: "Hawaii",
  },
  {
    label: "(UTC - 9:00) Alaska Time Zone (US)",
    value: "Alaska",
  },
  {
    label: "(UTC - 8:00) Paciﬁc/Yukon Time Zone (US & Canada)",
    value: "Pacific",
  },
  {
    label: "(UTC - 7:00) Mountain Time Zone (US & Canada)",
    value: "Mountain",
  },
  {
    label: "(UTC - 6:00) Central Time Zone (US & Canada)",
    value: "Central",
  },
  {
    label: "(UTC - 5:00) Eastern Time Zone (US & Canada)",
    value: "Eastern",
  },
  {
    label: "(UTC - 4:00) Atlantic Time Zone (Canada)",
    value: "Atlantic",
  },
  {
    label: "(UTC - 3:30) Newfoundland Time Zone (Canada)",
    value: "Newfoundland",
  },
];

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalAccount: {
        firstName: "",
        lastName: "",
        avatarURL: "",
        addressLine1: "",
        city: "",
        state: "",
        zipCode: "",
        timeZone: "",
        email: "",
      },
      updatedAccount: {
        firstName: "",
        lastName: "",
        avatarURL: "",
        addressLine1: "",
        city: "",
        state: "",
        zipCode: "",
        timeZone: "",
        email: "",
      },
      actions: {
        ccAdmin: false,
        requireUserToChange: false,
        password: "",
        confirmPassword: "",
      },
      validation: {
        firstName: true,
        lastName: true,
        email: true,
      },
      openModal: false,
    };
  }

  componentDidMount() {
    if (!loggedIn()) {
      Router.push("/login");
    } else {
      this.setCurrentUser();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currUser !== this.props.currUser) {
      this.setCurrentUser();
    }
  }

  setCurrentUser = () => {
    const { originalAccount, updatedAccount } = this.state;
    this.setState({
      originalAccount: this.getUserObject(originalAccount),
      updatedAccount: this.getUserObject(updatedAccount),
    });
  };

  getUserObject = (accountFromState) => {
    const { currUser } = this.props;
    const user = {
      ...accountFromState,
      firstName: currUser.first_name,
      lastName: currUser.last_name,
      email: currUser.email,
      addressLine1: currUser.user_address && currUser.user_address.address || "",
      city: currUser.user_address && currUser.user_address.city || "",
      state: currUser.user_address && currUser.user_address.state || "",
      zipCode: currUser.user_address && currUser.user_address.zip || "",
    };
    return user;
  };

  // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // TODO: Clean this up once the react toast bugs are fixed. Just logging the validation response for now
  onUpdateProfile = async (event) => {
    event.preventDefault();
    // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;
    const { updatedAccount } = this.state;
    const valid = await nestedEditFieldValidation(
      this.state,
      this.state.updatedAccount,
      this.onSetValidation,
      (validation) => console.warn("validation", validation),
    );
    if (!valid) {
      // return onSaveChangesError();
      console.warn("not valid");
    }
    this.setState({ originalAccount: updatedAccount });
    // return onSavePassageChanges(updatedUser);
  };

  onSendPasswordResetEmail = (event) => {
    event.preventDefault();
    console.warn("Stubbed out password reset email");
  };

  onResetPassword = (event) => {
    event.preventDefault();
    this.setState({
      openModal: true,
    });
    const {
      actions: { password, confirmPassword },
    } = this.state;
    if (password !== confirmPassword) {
      console.warn("Toast is broken, have a console log");
      // return this.notify
    }
    if (!confirmPassword.length) {
      console.warn("Toast is broken, have a console log");
      // return this.notify()
    }
    return console.warn("stubbed out password reset");
  };

  handleDetailsChange = (event, name) => {
    const { updatedAccount: previousAccountState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedAccount = update(previousAccountState, {
      $merge: { [name]: value },
    });
    this.setState({ updatedAccount });
  };

  onToggleModal = (value) => {
    console.log(value);
    this.setState({
      openModal: value,
    });
  }


  render() {
    const {
      firstName,
      lastName,
      avatarURL,
      addressLine1,
      city,
      state,
      zipCode,
      timeZone,
      email = {},
    } = this.state.updatedAccount;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <StickyContainer>
            <Sticky>
              {({ style }) => (
                <div className="title-row card-panel" style={{ ...style, zIndex: 1999 }}>
                  <div className="mobile-header">
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                      <i className="material-icons">menu</i>
                    </a>
                  </div>
                  <h2 className="h1 white-text">
                    <span className="heading-holder">
                      <i className="icon-student"></i>
                      <span className="heading-block">My Account</span>
                    </span>
                  </h2>
                </div>
              )}
            </Sticky>

            <div className="content-section">
              <div className="content-section-holder">
                <UpdatePasswordModal onCloseModal={this.onToggleModal} open={this.state.openModal} />
                <form action="#" className="custom-form">
                  <fieldset>
                    <div className="container-xs container-align-left">
                      <div className="card-block">
                        <div className="card">
                          <div className="card-content card-account">
                            <div className="row mb-0">
                              <div className="col s12 m3 l5">
                                <div className="avatar">
                                  <img src={avatarURL} alt=""></img>
                                  <span className="btn-upload icon-photocam">
                                    <input type="file"></input>
                                  </span>
                                </div>
                              </div>
                              <div className="col s12 m9 l7">
                                <div className="input-field input-field-icon">
                                  <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(event) => this.handleDetailsChange(event, "email")}
                                  />
                                  <span className="input-icon icon-letter2"></span>
                                </div>
                                <div className="input-field input-field-icon">
                                  <input
                                    style={{ width: "44%" }}
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(event) =>
                                      this.handleDetailsChange(event, "firstName")
                                    }
                                  />
                                  <input
                                    style={{ width: "44%" }}
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(event) =>
                                      this.handleDetailsChange(event, "lastName")
                                    }
                                  />
                                  <span className="input-icon icon-user-line"></span>
                                </div>
                                <div className="input-field input-field-icon">
                                  <input
                                    type="text"
                                    placeholder="Street Address"
                                    value={addressLine1}
                                    onChange={(event) =>
                                      this.handleDetailsChange(event, "addressLine1")
                                    }
                                  />
                                  <span className="input-icon icon-search"></span>
                                </div>
                                <div className="input-field">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(event) => this.handleDetailsChange(event, "city")}
                                  />
                                </div>
                                <div className="row mb-0">
                                  <div className="col s12 m6">
                                    {/* add dropdown  */}
                                    <div className="input-field" style={{ zIndex: 1001 }}>
                                      <Dropdown
                                        value={getValueFromState(state, stateOptions)}
                                        onChange={(event) =>
                                          this.handleDetailsChange(event, "state")
                                        }
                                        options={stateOptions}
                                        label="State"
                                        stateKey="state"
                                        dropdownKey="state"
                                      />
                                    </div>
                                  </div>
                                  <div className="col s12 m6" style={{ marginTop: "9%" }}>
                                    <div className="input-field">
                                      <input
                                        type="text"
                                        placeholder="Zip Code"
                                        value={zipCode}
                                        onChange={(event) =>
                                          this.handleDetailsChange(event, "zipCode")
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="input-field">
                                  <Dropdown
                                    value={getValueFromState(timeZone, timeZoneOptions)}
                                    options={timeZoneOptions}
                                    stateKey="timeZone"
                                    dropdownKey="timeZone"
                                    label="Time Zone"
                                    onChange={(event) =>
                                      this.handleDetailsChange(event, "timeZone")
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="account_btn-holder">
                        <a href="#" onClick={(e) => this.onToggleModal(true, e)}>
                          Reset Password
                        </a>
                        <a className="btn" href="#" onClick={this.onUpdateProfile}>
                          Update Proﬁle
                        </a>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </StickyContainer>
        </div>
      </main>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currUser: makeSelectCurrentUser(),
});

export default connect(mapStateToProps, null)(Account);
