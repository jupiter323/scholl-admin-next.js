import React from "react";
import PropTypes from "prop-types";
import update from 'immutability-helper';
import Portal from "../../Portal";

import ClassInfo from '../SharedModalComponents/ClassInformation';
import AccountSetting from '../SharedModalComponents/AccountSettings';
import Locations from '../SharedModalComponents/Locations';
import Instructors from '../SharedModalComponents/Instructors';


import LocationModal from '../../Location/components/LocationModal';
import InstructorModal from '../InstructorModal';

class ClassModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classroom:{
          classInfo:{
            className:"",
          },
          accountInfo:{
            start_date:"",
            end_date:"",
            active:false,
            isExclude:false,
          },
          location:{
            locations:[],
          },
          instructor:{
            instructors:[],
          },
        },
        locationModalOpen:false,
        instructorModalOpen:false,
        pendingLocationDelete: {},
    }
  }

  onOpenLocationModal = (event) => {
    event.preventDefault();
    this.setState({locationModalOpen:true});
  }

  onOpenInstructorModal = (event) =>{
    event.preventDefault();
    this.setState({instructorModalOpen:true});
  }

  onCloseLocationModal = () => this.setState({locationModalOpen:false});

  onCloseInstructorModal = () => this.setState({instructorModalOpen:false});

  arrayItemRemover = (array, value) => array.filter((item) => item !== value)

  onRemoveLocation = (index) => {
    const {location: { locations } } = this.state.classroom;
    const newLocationsArray = this.arrayItemRemover(locations, locations[index]);
    const updatedClassRoom = update(this.state.classroom, {
      location: { $set: {locations: newLocationsArray}},
    })
    this.setState({classroom:updatedClassRoom});
  }

  onRemoveInstructor = (index) => {
    const  { instructor:{instructors}} = this.state.classroom;
    const newInstructorsArray = this.arrayItemRemover(instructors,instructors[index]);
    const updatedClassRoom = update(this.state.classroom,{
      instructor:{$set:{instructors:newInstructorsArray}},
    });
    this.setState({classroom:updatedClassRoom});
   }

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
  }

  onSave = () => {
    const { onClose,onSave } = this.props;
    onClose();
    const classroom = this.state.classroom;
    onSave(classroom);
  }


  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section,checkBox = false) => {
    if(checkBox){
      const updatedClassRoom = update(this.state.classroom, {
        [section]: { $merge: { [name]: !this.state.classroom[section][name] } },
      });
      this.setState({classroom:updatedClassRoom});
    }else{
      const value = event.target ? event.target.value : event;
      const updatedClassRoom = update(this.state.classroom, {
        [section]: { $merge: { [name]: value } },
      });
      this.setState({classroom:updatedClassRoom});
    }
  }

  render() {
    const { open,onClose} = this.props;
    const {
      locationModalOpen,
      instructorModalOpen,
      classroom:{
        classInfo,
        accountInfo,
        location,
        instructor,
      }
    } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <React.Fragment>
          <div className="overlay">
              <div id="modal_add_new_class" className="modal modal-custom modal-460" >
                <form action="#" className="custom-form">
                  <fieldset>
                    <div className="card-modal card-main card">
                      <div className="card-panel card-panel-title" style={{ backgroundColor: "#408e49", color: "#fff" }} >
                        <div className="card-panel-row row">
                          <div className="col">
                            <h2>
                              <span className="heading-holder">
                                <i className="icon-members" />
                                <span className="heading-block"> New Class </span>
                              </span>
                            </h2>
                          </div>
                          <div className="col right-align">
                            <a href="#!" className="panel-link close modal-close" onClick = {onClose} >
                              <i className="icon-close-thin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                            <ClassInfo
                              state = {classInfo}
                              handleDetailsChange = {this.handleDetailsChange}
                            />
                            <AccountSetting
                              state = {accountInfo}
                              handleDetailsChange = {this.handleDetailsChange}
                            />
                            <Locations
                              locations = {location.locations}
                              onOpenLocationModal = {this.onOpenLocationModal}
                              onRemoveLocation = {this.onRemoveLocation}
                              handleDetailsChange={this.handleDetailsChange}
                            />
                            <Instructors
                              instructors = {instructor.instructors}
                              onOpenInstructorModal = {this.onOpenInstructorModal}
                              onRemoveInstructor = {this.onRemoveInstructor}
                            />
                        </div>
                        <div className="modal-footer">
                          <a
                            href="#!"
                            className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                            onClick = {onClose}
                          >
                            Cancel
                          </a>
                          <a href="#" className="btn" onClick = {this.onSave}>
                            Create Class
                          </a>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
          </div>
          <LocationModal 
            open={locationModalOpen} 
            onClose = {this.onCloseLocationModal} 
            handleLocationsChange ={(selectedLocations) => this.handleDetailsChange(selectedLocations, 'locations', 'location')}
        />
        <InstructorModal
          open = {instructorModalOpen}
          onClose = {this.onCloseInstructorModal}
          handleInstructorsChange ={(selectedInstructors) => this.handleDetailsChange(selectedInstructors, 'instructors', 'instructor')}
        />
        </React.Fragment>
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
              z-index: 1999;
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

ClassModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose:PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ClassModal;
