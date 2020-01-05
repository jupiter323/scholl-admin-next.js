import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import update from 'immutability-helper';
import Portal from "../../../Portal";
import InstructorCard from "../../../Instructor/components/InstructorCard";
import LocationModal from '../../../Location/components/LocationModal';
import LocationCard from '../../../Location/components/LocationCard';
import InstructorModal from '../../../Instructor/components/InstructorModal';

const DatePicker = dynamic(() => import('../../../FormComponents/DatePicker'), {
  ssr: false,
});

class NewClassModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      selectedLocations: [],
      newClass: {
        name: "",
        startDate: "",
        endDate: "",
        students: 0,
        active: true,
        excludeStats: "",
        locations: [],
        instructors: [],
      },
    };
  }

  // onCloseModal = () => this.setState({ newClass: [] }, () => this.props.onCloseNewClassModal)
  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });
  onOpenInstructorModal = () => this.setState({ instructorModalOpen: true });
  onCloseInstrucorModal = () => this.setState({ instructorModalOpen: false });

  onToggleCheckbox = (event) => {
    const newClass = update(this.state.newClass, {
      [event.target.name]: {
        $set: !this.state[event.target.name],
      },
    })
    this.setState({ newClass })
  }

  onResetForm = (array, sampleList) => {
    this.setState({
      [array]: [sampleList],
    })
  }
  onRemoveLocation = (index) => {
    const { locations } = this.state;
    const newArray = this.arrayItemRemover(locations, locations[index])
    this.setState({ locations: newArray }, () => {
      this.handleOptionsChange(newArray, 'locations')
    })
  }

  onRemoveInstructor = (index) => {
    const { instructors } = this.state;
    const newArray = this.arrayItemRemover(instructors, instructors[index])
    this.setState({ instructors: newArray }, () => {
      this.handleOptionsChange(newArray, 'instructors')
    })
  }

  handleOptionsChange = (selectedOptions, array) => {
    const newClass = update(this.state.newClass, {
      [array]: {
        $set: selectedOptions,
      },
    });
    this.setState({ newClass });
  }

  handleChange = (event) => {
    const newClass = update(this.state.newClass, {
      [event.target.id]: {
        $set: event.target.value,
      },
    });
    this.setState({ newClass });
  }

  arrayItemRemover = (array, value) => array.filter((item) => item !== value)

  render() {
    const { open, onAddNewClass, onCloseNewClassModal } = this.props;
    const { locationModalOpen, instructorModalOpen, newClass } = this.state;
    const { locations, instructors, excludeStats, active, endDate, startDate } = newClass
    return (
      <Portal selector="#modal">
        {open && (
          <div className="outer-overlay">
            <div id="modal_add_new_class" className="modal modal-custom modal-460">
              <form action="#" className="custom-form">
                <fieldset>
                  <div className="card-modal card-main card">
                    <div className="card-panel card-panel-title" style={{ backgroundColor: "#408e49", color: "#fff" }}>
                      <div className="card-panel-row row">
                        <div className="col">
                          <h2>
                            <span className="heading-holder">
                              <i className="icon-members"></i>
                              <span className="heading-block"> New Class</span>
                            </span>
                          </h2>
                        </div>
                        <div className="col right-align">
                          <a href="#!" className="panel-link close modal-close" onClick={onCloseNewClassModal}><i className="icon-close-thin"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">

                        <div className="card-block">
                          <h3>Class Information</h3>
                          <div className="card-main card">
                            <div className="card-content">
                              <div className="row mb-0">
                                <div className="input-field col s12">
                                  <input
                                    type="text"
                                    id="name"
                                    onChange={this.handleChange} />
                                  <label className="label" htmlFor="name">Class Name</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>Account Settings</h3>
                          <div className="card-main card">
                            <div className="card-content">
                              <div className="row">
                                <div className="col s6">
                                  <div className="datepicker-field input-field">
                                    <i className="icon-calendar"></i>
                                    <DatePicker
                                      id="startDate"
                                      selected={startDate}
                                      onChange={this.handleChange} />
                                    <label className="label" htmlFor="startDate">Course Start Date</label>
                                  </div>
                                </div>
                                <div className="col s6">
                                  <div className="datepicker-field input-field">
                                    <i className="icon-calendar"></i>
                                    <DatePicker
                                      id="endDate"
                                      seleced={endDate}
                                      onChange={this.handleChange}
                                    />
                                    <label className="label" htmlFor="endDate">Course End Date</label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col s12">
                                  <div className="check-holder">
                                    <p>
                                      <label htmlFor="inactive">
                                        <input
                                          type="checkbox"
                                          className="filled-in"
                                          id="inactive"
                                          value={active}
                                          name="active"
                                          onChange={(event) => this.onToggleCheckbox(event)}
                                        />
                                        <span>Inactive</span>
                                      </label>
                                    </p>
                                    <span className="card-note">Select this option when you no longer want this class to appear on your list of current classes. All class data is retained and, by default, included in global statistics.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col s12">
                                  <div className="input-field">
                                    <select id="default_session_duration">
                                      <option>Use organization default</option>
                                      <option>Use organization default</option>
                                      <option>Use organization default</option>
                                    </select>
                                    <label className="label" htmlFor="default_session_duration">Default Session Duration</label>
                                  </div>
                                </div>
                              </div>
                              <p>
                                <label htmlFor="exclude" className="label-wrap">
                                  <input
                                    type="checkbox"
                                    className="filled-in"
                                    id="exclude"
                                    name="excludeStats"
                                    value={excludeStats}
                                    onChange={(event) => this.onToggleCheckbox(event)}
                                  />
                                  <span>Exclude Class from Performance Statistics</span>
                                </label>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- form panel --> */}
                        <div className="card-block">
                          <h3>Class Location</h3>
                          {/* <!-- card --> */}
                          <div className="card-main card card-instructor" style={{ marginBottom: "20px" }}>
                            <div className="card-content">
                              <div className="text-block">
                                <p>Select the location/branch where this class will be located.</p>
                              </div>
                              <div className="box-scrollable">
                                <div className="height-150 jcf-scrollable">
                                  <div className="card-location-holder" style={{ height: '100%', overflowY: "scroll" }} >
                                    {!locations.length && (
                                      <div className="add-box">
                                        <div className="add-box-holder">
                                          <a href="#" lassName="btn-floating waves-effect waves-light green lighten-1" onClick={this.onOpenLocationModal}><i className="material-icons">add</i></a>
                                        </div>
                                      </div>)}
                                    {locations.map((location, index) => (
                                      <LocationCard key={location.id} location={location} onRemoveLocation={() => this.onRemoveLocation(index)} />
                                    ))}
                                  </div>
                                </div>
                                <div className="card-footer right-align" style={{ width: '417px', margin: '0px 0px -30px' }}>
                                  <a
                                    href="#modal_Location1"
                                    className="modal-trigger link-block"
                                    onClick={this.onOpenLocationModal}>Add Location</a>
                                </div>
                                <LocationModal
                                  open={locationModalOpen}
                                  onClose={this.onCloseLocationModal}
                                  handleLocationsChange={(selectedLocations) => this.handleOptionsChange(selectedLocations, 'locations')}
                                />
                              </div>
                            </div>
                          </div>
                          {/* <!-- fprm panel --> */}
                          <div className="card-block">
                            <h3>Instructor(s)</h3>
                            {/* <!-- card --> */}
                            <div className="card-main card card-instructor">
                              <div className="card-content">
                                <div className="text-block">
                                  <p>Add one or more instructors to the list below. Each instructor can manage the coursework.</p>
                                </div>
                                <div className="box-scrollable">
                                  <div className="height-150 jcf-scrollable">
                                    <div className="card-location-holder" style={{ height: '100%', overflowY: "scroll" }}>
                                      {!instructors.length && (
                                        <div className="add-box">
                                          <div className="add-box-holder">
                                            <a href="#" lassName="btn-floating waves-effect waves-light green lighten-1" onClick={this.onOpenInstructorModal}><i className="material-icons">add</i></a>
                                          </div>
                                        </div>)}
                                      {instructors.map((instructor, index) => (
                                        <InstructorCard key={instructor.id} instructor={instructor} onRemoveInstructor={() => this.onRemoveInstructor(index)} />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="card-footer right-align">
                                  <a
                                    href="#modal_Instructor1"
                                    className="modal-trigger link-block"
                                    onClick={this.onOpenInstructorModal}>
                                    Add Instructor</a>
                                </div>
                                <InstructorModal open={instructorModalOpen} onClose={this.onCloseInstrucorModal} handleInstructorsChange={(selectedInstructors) => this.handleOptionsChange(selectedInstructors, 'instructors')} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <a href="#!" onClick={onCloseNewClassModal} className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                          <a href="#" onClick={() => onAddNewClass(newClass)} className="btn">Create Class</a>
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
            .outer-overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 2999;
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
            .modal-460 {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
          `}
        </style>
      </Portal>

    )
  }
}


NewClassModal.propTypes = {
  onCloseNewClassModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onAddNewClass: PropTypes.func.isRequired,
}


export default NewClassModal;