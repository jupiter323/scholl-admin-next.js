import React from 'react';
// import PropTypes from 'prop-types';
import update from 'immutability-helper';

import InstructorCard from './components/InstructorCard';
// import NewInstructorModal from './components/NewInstructorModal';

import sampleInstructorList from '../utils/sampleInstructorList';
// import { saveNewSuccess as savePracticeTestSuccess, saveChangesSuccess, saveNewError as savePracticeTestError } from '../../utils/fieldValidation';

class InstructorListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorModalOpen: false,
      instructors: sampleInstructorList,
      dropdownIndex: null,
      dropdownIsOpen: false,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIsOpen: true, dropdownIndex });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onOpenInstructorModal = () => this.setState({ instructorModalOpen: true });
  onCloseInstructorModal = () => this.setState({ instructorModalOpen: false });

  onAddNewInstructor = (newInstructor) => this.setState(({ instructors }) => ({ instructors: [...instructors, newInstructor] }))

  onDeleteInstructor = (deletedInstructor) => {
    const updatedState = update(this.state, {
      instructors: unfilteredInstructors => unfilteredInstructors.filter(instructor => instructor.id !== deletedInstructor.id),
    });
    this.setState({ instructors: updatedState.instructors });
  }

  onCloneInstructor = (instructor) => {
    const cloneIndex = this.state.instructors.indexOf(instructor);
    const instructors = update(this.state.instructors, {
      $splice: [[cloneIndex, 0, instructor]],
    });
    this.setState({ instructors }, this.onCloseDropdown);
  }

  onSaveInstructorChanges = (updatedInstructor) => {
    const { instructors: originalInstructors } = this.state;
    const instructorToUpdate = originalInstructors.filter(instructor => instructor.id === updatedInstructor.id)[0];
    const updatedInstructorIndex = originalInstructors.indexOf(instructorToUpdate);
    const instructors = update(originalInstructors, {
      $splice: [[updatedInstructorIndex, 1, updatedInstructor]],
    });
    // saveChangesSuccess();
    this.setState({ instructors });
  }

  mapInstructors = () => this.state.instructors.map((instructor, index) => (
    <InstructorCard
      index={index}
      instructor={instructor}
      dropdownIsOpen={this.state.dropdownIsOpen}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      dropdownIndex={this.state.dropdownIndex}
      onDeleteInstructor={this.onDeleteInstructor}
      onCloneInstructor={this.onCloneInstructor}
      onSaveInstructorChanges={this.onSaveInstructorChanges}
    />
  ))

  render() {
    // eslint-disable-next-line no-unused-vars
    const { instructorModalOpen } = this.state;
    return (
      <React.Fragment>
        {/* <NewInstructorModal
          open={instructorModalOpen}
          onClose={this.onCloseInstructorModal}
          onAddNewInstructor={this.onAddNewInstructor}
        /> */}
        <div className="main-holder grey lighten-5">
          <div className="title-row card-panel">
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            <h2 className="h1 white-text">
              <span className="heading-holder">
                <i className="icon-instructors"></i>
                <span className="heading-block">Instructors</span>
              </span>
            </h2>
          </div>
          <div className="filter-inputs-holder">
            <div className="row mb-0">
              <div className="col s12 m4 l3">
                <div className="search-field input-field">
                  <input type="search" id="name_search" className="input-control  validate" placeholder="Edwar" />
                  <button type="submit" className="search-button"><i className="icon-search"></i></button>
                  <label className="label" htmlFor="name_search">Search</label>
                </div>
              </div>
              <div className="col s12 m4 l3">
                <div className="input-field">
                  <select id="location_search">
                    <option>Any</option>
                    <option>Option</option>
                    <option>Option</option>
                  </select>
                  <label className="label" htmlFor="location_search">Location</label>
                </div>
              </div>
              <div className="col s12 m4 l3">
                <div className="input-field">
                  <select id="sort_search">
                    <option>Last Name (ascending)</option>
                    <option>Option</option>
                    <option>Option</option>
                  </select>
                  <label className="label" htmlFor="sort_search">Sort</label>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section">
            <div className="row d-flex-content">
              {this.mapInstructors()}
            </div>
          </div>
        </div>
        <a
          href="#"
          onClick={this.onOpenInstructorModal}
          className="waves-effect waves-teal btn add-btn"
        >
          <i className="material-icons">add</i>
          New Location
        </a>
      </React.Fragment>
    );
  }
}

export default InstructorListPage;
