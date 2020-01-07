/* eslint-disable no-unused-vars */
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

import ClassModal from '../ClassModal';
import LocationModal from '../../Location/components/LocationModal';
import InstructorModal from '../../Instructor/components/InstructorModal';

import { nestedEditFieldValidation } from '../../utils/fieldValidation';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      classModalOpen: false,
      originalUser: {
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
          locations: [],
        },
        instructor: {
          instructors: [],
        },
        course: {
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
        course: {
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
        },
        emailAddress: {
          email: true,
        },
      },
    };
  }

  componentDidMount() {
    const { user: { id, studentInformation, contactInformation, emailAddress, location, instructor, course, courseContext, accountSettings } = {} } = this.props;
    const updatedUser = { id, studentInformation, contactInformation, emailAddress, location, instructor, course, courseContext, accountSettings };
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
      const { user: { id, studentInformation, contactInformation, emailAddress, location, instructor, course, courseContext, accountSettings } = {} } = nextProps;
      const updatedUser = { id, studentInformation, contactInformation, emailAddress, location, instructor, course, courseContext, accountSettings };
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

  onOpenClassModal = () => this.setState({ classModalOpen: true });
  onCloseClassModal = () => this.setState({ classModalOpen: false });

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

  onDeleteAccount = () => {
    console.warn('Stubbed out delete user');
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
    const { locationModalOpen, instructorModalOpen, classModalOpen, actions,
      updatedUser: { studentInformation: updatedStudentInformation, contactInformation: updatedContactInformation, emailAddress: updatedEmailAddress, location: updatedLocation,
        instructor: updatedInstructor, course: updatedClasses, courseContext: updatedCourseContext, accountSettings: updatedAccountSettings } } = this.state;
    const { user: { studentInformation, contactInformation, emailAddress, location, instructor, course, courseContext, accountSettings, accountStatus, accountType } = {} } = this.props;
    return (
      <React.Fragment>
        <Toast />
        <ClassModal
          open={classModalOpen}
          onClose={this.onCloseClassModal}
          handleClassChange={this.handleOptionsChange}
        />
        <LocationModal
          open={locationModalOpen}
          onClose={this.onCloseLocationModal}
          handleLocationsChange={(selectedLocations) => this.handleOptionsChange(selectedLocations, 'location', 'locations')}
        />
        <InstructorModal
          open={instructorModalOpen}
          onClose={this.onCloseInstructorModal}
          handleInstructorsChange={(selectedInstructors) => this.handleOptionsChange(selectedInstructors, 'instructor', 'instructors')}
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
                <Location
                  state={this.initialUserMount() ? location : updatedLocation}
                  onOpenLocationModal={this.onOpenLocationModal}
                  onRemoveLocation={this.onRemoveOption}
                />
                <Instructor
                  state={this.initialUserMount() ? instructor : updatedInstructor}
                  onOpenInstructorModal={this.onOpenInstructorModal}
                  onRemoveInstructor={this.onRemoveOption}
                />
                <Class
                  state={this.initialUserMount() ? course : updatedClasses}
                  onOpenClassModal={this.onOpenClassModal}
                  onRemoveClass={this.onRemoveOption}
                />
              </div>
            </div>
            <div className="row mb-0 d-flex-content large sameheight">
              <AccountStatus
                state={accountStatus}
              />
              <AccountType
                state={accountType}
              />
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
            <DeleteAccount
              activeButton={accountStatus.status !== 'Activated'}
              onDeleteAccount={this.onDeleteAccount}
            />
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
