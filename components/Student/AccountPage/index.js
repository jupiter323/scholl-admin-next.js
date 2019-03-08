/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { toast } from 'react-toastify';

import Toast from '../../Toast';
import StudentInformation from './components/StudentInformation';
import ContactInformation from './components/ContactInformation';
import EmailAddress from './components/EmailAddress';
import Location from './components/Location';
import Instructor from './components/Instructor';
import Class from './components/Class';
import AccountStatus from './components/AccountStatus';
import AccountType from './components/AccountType';
import CourseContext from './components/CourseContext';
import AccountSettings from './components/AccountSettings';
import Actions from './components/Actions';
import DeleteAccount from './components/DeleteAccount';

import LocationModal from '../LocationModal';
import InstructorModal from '../InstructorModal';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      originalUser: {
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: '',
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
          locations: [],
        },
        instructor: {
          instructors: [],
        },
        class: {
          classes: [],
        },
        courseContext: {
          courseStartDateOption: '',
          courseStartDate: '',
          courseEndDateOption: '',
          courseEndDate: '',
          targetTestDate: '',
          targetScore: '',
          highSchool: '',
          graduationYear: '',
        },
        accountSettings: {
          loginBeforeActivation: false,
          unstructuredCourseMode: false,
          defaultSessionDuration: '',
          videoSolutionsRequired: false,
          preventLogin: false,
          inactive: false,
          excludeFromStatistics: false,
        },
      },
      updatedUser: {
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: '',
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
          locations: [],
        },
        instructor: {
          instructors: [],
        },
        classes: [],
        courseContext: {
          courseStartDateOption: '',
          courseStartDate: '',
          courseEndDateOption: '',
          courseEndDate: '',
          targetTestDate: '',
          targetScore: '',
          highSchool: '',
          graduationYear: '',
        },
        accountSettings: {
          loginBeforeActivation: false,
          unstructuredCourseMode: false,
          defaultSessionDuration: '',
          videoSolutionsRequired: false,
          preventLogin: false,
          inactive: false,
          excludeFromStatistics: false,
        },
      },
      actions: {
        ccAdmin: false,
        requireUserToChange: false,
        password: '',
        confirmPassword: '',
      },
      validation: {
        studentInformation: {
          firstName: true,
          lastName: true,
          gender: true,
        },
      },
    };
  }

  componentDidMount() {
    const { user: { id, studentInformation, contactInformation, emailAddress, location, instructor, classes, courseContext, accountSettings } = {} } = this.props;
    const updatedUser = { id, studentInformation, contactInformation, emailAddress, location, instructor, classes, courseContext, accountSettings };
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
      const { user: { id, studentInformation, contactInformation, emailAddress, location, instructor, classes, courseContext, accountSettings } = {} } = nextProps;
      const updatedUser = { id, studentInformation, contactInformation, emailAddress, location, instructor, classes, courseContext, accountSettings };
      const { originalUser: originalUserState } = this.state;
      const originalUser = update(originalUserState, {
        $merge: nextProps.user,
      });
      this.setState({ originalUser, updatedUser });
    }
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onOpenInstructorModal = () => this.setState({ instructorModalOpen: true });
  onCloseInstructorModal = () => this.setState({ instructorModalOpen: false });

  onSaveChanges = () => {
    console.warn('stubbed out save changes');
  }

  onSendWelcomeEmail = (event) => {
    event.preventDefault();
    console.warn('Stubbed out send email');
  }

  onSendPasswordResetEmail = (event) => {
    event.preventDefault();
    console.warn('Stubbed out password reset email');
  }

  onResetPassword = (event) => {
    event.preventDefault();
    const { actions: { password, confirmPassword } } = this.state;
    if (password !== confirmPassword) {
      console.warn('Toast is broken, have a console log');
      // return this.notify
    }
    if (!confirmPassword.length) {
      console.warn('Toast is broken, have a console log');
      // return this.notify()
    }
    return console.warn('stubbed out password reset');
  }

  initialUserMount = () => this.state.originalUser.id !== this.props.user.id;

  handleActionsChange = (event, name, checkBox = false) => {
    const { actions: previousActions } = this.state;
    let value;
    if (checkBox) {
      value = !previousActions.ccAdmin;
    } else {
      value = event.target.value;
    }
    const updatedState = update(this.state, {
      actions: { $merge: { [name]: value } },
    });
    this.setState(updatedState);
  }

  // Checkbox is passed in as a boolean to avoid creating a mostly similar function just for the active checkbox
  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section, checkBox = false) => {
    const { updatedUser: previousUserState } = this.state;
    let value;
    if (checkBox) {
      value = !previousUserState[section][name];
    } else {
      value = event.target ? event.target.value : event;
    }
    const updatedUser = update(previousUserState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ updatedUser });
  }

  render() {
    const { locationModalOpen, instructorModalOpen, actions,
      updatedUser: { studentInformation: updatedStudentInformation, contactInformation: updatedContactInformation, emailAddress: updatedEmailAddress, location: updatedLocation,
        instructor: updatedInstructor, classes: updatedClasses, courseContext: updatedCourseContext, accountSettings: updatedAccountSettings } } = this.state;
    const { user: { studentInformation, contactInformation, emailAddress, location, instructor, classes, courseContext, accountSettings } = {} } = this.props;
    return (
      <React.Fragment>
        <Toast />
        <LocationModal
          open={locationModalOpen}
          onClose={this.onCloseLocationModal}
        />
        <InstructorModal
          open={instructorModalOpen}
          onClose={this.onCloseInstructorModal}
        />
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <div className="col s12 l5">
                <StudentInformation
                  state={this.initialUserMount() ? studentInformation : updatedStudentInformation}
                  handleDetailsChange={this.handleDetailsChange}
                />
                <ContactInformation
                  state={this.initialUserMount() ? contactInformation : updatedContactInformation}
                  handleDetailsChange={this.handleDetailsChange}
                />
                <EmailAddress
                  state={this.initialUserMount() ? emailAddress : updatedEmailAddress}
                  handleDetailsChange={this.handleDetailsChange}
                />
              </div>
              <div className="col s12 l5">
                <Location onOpenLocationModal={this.onOpenLocationModal} />
                <Instructor onOpenInstructorModal={this.onOpenInstructorModal} />
                <Class />
              </div>
            </div>
            <div className="row mb-0 d-flex-content large sameheight">
              <AccountStatus />
              <AccountType />
            </div>
            <CourseContext
              state={this.initialUserMount() ? courseContext : updatedCourseContext}
              handleDetailsChange={this.handleDetailsChange}
            />
            <AccountSettings
              state={this.initialUserMount() ? accountSettings : updatedAccountSettings}
              handleDetailsChange={this.handleDetailsChange}
            />
            <Actions
              state={actions}
              handleActionsChange={this.handleActionsChange}
              onResetPassword={this.onResetPassword}
              onSendWelcomeEmail={this.onSendWelcomeEmail}
              onSendPasswordResetEmail={this.onSendPasswordResetEmail}
            />
            <DeleteAccount />
            <a
              href="#"
              onClick={this.onSaveChanges}
              className="btn"
            >
            Save
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AccountPage.propTypes = {
  user: PropTypes.object,
};

export default AccountPage;
