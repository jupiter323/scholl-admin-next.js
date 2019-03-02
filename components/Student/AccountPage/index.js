/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

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
    };
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onOpenInstructorModal = () => this.setState({ instructorModalOpen: true });
  onCloseInstructorModal = () => this.setState({ instructorModalOpen: false });

  onSaveChanges = () => {
    console.warn('stubbed out save changes');
  }

  render() {
    const { locationModalOpen, instructorModalOpen } = this.state;
    return (
      <React.Fragment>
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
                <StudentInformation />
                <ContactInformation />
                <EmailAddress />
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
            <CourseContext />
            <AccountSettings />
            <Actions />
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

export default AccountPage;
