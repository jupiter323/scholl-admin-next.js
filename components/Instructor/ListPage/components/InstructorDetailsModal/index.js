/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { compose } from 'redux';
import { connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

import AccountInfo from '../SharedModalComponents/AccountInfo';
import ContactInfo from '../SharedModalComponents/ContactInfo';
import Locations from '../SharedModalComponents/Locations';

import { nestedEditFieldValidation } from '../../../../utils/fieldValidation';
import { updateInstructorFirstName, updateInstructorLastName, updateInstructorEmail, updateInstructorState, updateInstructorCity, updateInstructorZip, updateInstructorAddress, updateInstructorPhone } from '../../../index/actions';

class InstructorDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteLocationModalOpen: false,
      newLocationModalOpen: false,
      editLocationModalOpen: false,
      pendingLocationDelete: {},
      activeLocation: {},
      dropdownIsOpen: false,
      dropdownIndex: null,
      originalInstructor: {
        accountInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        locations: [],
      },
      updatedInstructor: {
        accountInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        locations: [],
      },
      validation: {
        accountInfo: {
          firstName: true,
          lastName: true,
          email: true,
          gender: true,
        },
      },
    };
  }

  componentDidMount() {
    const { instructor: { id, basicInfo, accountInfo, contactInfo, locations } = {} } = this.props;
    const updatedInstructor = { id, basicInfo, accountInfo, contactInfo, locations };
    const { originalInstructor: originalInstructorState } = this.state;
    const originalInstructor = update(originalInstructorState, {
      $merge: updatedInstructor,
    });
    this.setState({ originalInstructor, updatedInstructor }); // eslint-disable-line
  }

  // This resets the component state to reflect the details of the next instructor the user clicks on
  componentWillReceiveProps = (nextProps) => {
    if ((!this.state.originalInstructor || nextProps.instructor.id !== this.state.originalInstructor.id)) {
      const { instructor: { id, basicInfo, accountInfo, contactInfo, locations } = {} } = nextProps;
      const updatedInstructor = { id, basicInfo, accountInfo, contactInfo, locations };
      const { originalInstructor: originalInstructorState } = this.state;
      const originalInstructor = update(originalInstructorState, {
        $merge: nextProps.instructor,
      });
      this.setState({ originalInstructor, updatedInstructor });
    }
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onOpenDeleteLocationModal = (pendingLocationDelete) => this.setState({ deleteLocationModalOpen: true, pendingLocationDelete });
  onCloseDeleteLocationModal = () => this.setState({ deleteLocationModalOpen: false, pendingLocationDelete: {} });

  onOpenNewLocationModal = () => this.setState({ newLocationModalOpen: true });
  onCloseNewLocationModal = () => this.setState({ newLocationModalOpen: false });

  onOpenEditLocationModal = (activeLocation) => this.setState({ editLocationModalOpen: true, activeLocation });
  onCloseEditLocationModal = () => this.setState({ editLocationModalOpen: false, dropdownIsOpen: false, activeLocation: {} });

  onCancelChanges = () => {
    const { onClose } = this.props;
    const { updatedInstructor, originalInstructor } = this.state;
    this.setState({ updatedInstructor: originalInstructor }, onClose());
  }

  // This function is passed into nestedEditFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // If all the fields are valid, we construct a post body and call onSaveNewLocation passed down from the container level
  onSubmit = async (event) => {
    event.preventDefault();
    const { updatedInstructor: { id, basicInfo, accountInfo, contactInfo, locations } } = this.state;
    const { onSaveLocationError, onSaveInstructorChanges, onClose } = this.props;
    // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
    // const valid = true;
    const valid = await nestedEditFieldValidation(this.state, this.state.updatedInstructor, this.onSetValidation, (validation) => console.warn('validation', validation));
    if (!valid) {
      // return onSaveLocationError();
      console.warn('not valid');
    }
    const postBody = { id, basicInfo, accountInfo, contactInfo, locations };
    onSaveInstructorChanges(postBody);
    console.warn('stubbed out save function');
    onClose();
  }

  initialInstructorMount = () => this.state.originalInstructor.id !== this.props.instructor.id;

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    const {onUpdateInstructorFirstName, onUpdateInstructorLastName, onUpdateInstructorEmail, onUpdateInstructorState, onUpdateInstructorCity, onUpdateInstructorZip, onUpdateInstructorAddress, onUpdateInstructorPhone} = this.props;
    const { updatedInstructor: previousInstructorState } = this.state;
    const value = event.target ? event.target.value : event;
    // Dispatch which ever field name was changed
    const instructor_id = previousInstructorState.id;
    switch (name) {
      case "firstName":
        onUpdateInstructorFirstName({ instructor_id, first_name: value });
      case "lastName":
        onUpdateInstructorLastName({ instructor_id, last_name: value });
      case "email":
        onUpdateInstructorEmail({ instructor_id, email: value });
      case "state":
        onUpdateInstructorState({ instructor_id, state: value });
      case "city":
        onUpdateInstructorCity({ instructor_id, city: value });
      case "zip":
        onUpdateInstructorZip({ instructor_id, zip: value });
      case "streetAddress":
        onUpdateInstructorAddress({ instructor_id, address: value });
      case "phone":
        onUpdateInstructorPhone({ instructor_id, phone: value });
      default:
        break;
    }
    const updatedInstructor = update(previousInstructorState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ updatedInstructor });
  }

  renderModalHeader = () => {
    const { instructor: { accountInfo: { lastName: initialLastName, firstName: initialFIrstName, email: initialEmail } } } = this.props;
    const { updatedInstructor: { accountInfo: { lastName: updatedLastName, firstName: updatedFirstName, email: updatedEmail } } } = this.state;
    let lastName;
    let firstName;
    let email;
    if (this.initialInstructorMount()) {
      lastName = initialLastName;
      firstName = initialFIrstName;
      email = initialEmail;
    } else {
      lastName = updatedLastName;
      firstName = updatedFirstName;
      email = updatedEmail;
    }
    return (
      <React.Fragment>
        <h4 className="h3">{lastName}, {firstName}</h4>
        <a href={`mailto:${email}`}>{email}</a>
      </React.Fragment>
    );
  }

  render() {
    const { open, instructor: { accountInfo, contactInfo, locations }, onOpenDeleteModal, deleteModalOpen } = this.props;
    const { dropdownIsOpen, dropdownIndex, activeLocation, deleteLocationModalOpen, pendingLocationDelete, newLocationModalOpen, editLocationModalOpen,
      updatedInstructor: {
        accountInfo: updatedAccountInfo, contactInfo: updatedContactInfo, locations: updatedLocations,
      },
    } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCancelChanges} nestedModals={deleteModalOpen || deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen}>
              <div id="modal_user_edit" className="modal modal-custom modal-custom-large modal-gray">
                <div className="card-modal card-main card grey lighten-3">
                  <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col s9">
                        <div className="user-block">
                          <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                            <img src="./static/images/img-owner01.jpg" alt="" />
                          </div>
                          <div className="user-text" style={{ color: '#fff' }}>
                            {this.renderModalHeader()}
                          </div>
                        </div>
                      </div>
                      <div className="col" style={{ textAlign: 'right' }}>
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
                          <AccountInfo
                            state={this.initialInstructorMount() ? accountInfo : updatedAccountInfo}
                            handleDetailsChange={this.handleDetailsChange}
                          />
                          <ContactInfo
                            state={this.initialInstructorMount() ? contactInfo : updatedContactInfo}
                            handleDetailsChange={this.handleDetailsChange}
                          />
                        </div>
                        <div className="col s12 l6">
                          <Locations
                            state={this.initialInstructorMount() ? locations : updatedLocations}
                            handleDetailsChange={this.handleDetailsChange}

                            dropdownIsOpen={dropdownIsOpen}
                            dropdownIndex={dropdownIndex}
                            activeLocation={activeLocation}
                            deleteLocationModalOpen={deleteLocationModalOpen}
                            pendingLocationDelete={pendingLocationDelete}
                            newLocationModalOpen={newLocationModalOpen}
                            editLocationModalOpen={editLocationModalOpen}
                            onSetDropdown={this.onSetDropdown}
                            onCloseDropdown={this.onCloseDropdown}
                            onOpenNewLocationModal={this.onOpenNewLocationModal}
                            onOpenEditLocationModal={this.onOpenEditLocationModal}
                            onCloseNewLocationModal={this.onCloseNewLocationModal}
                            onCloseEditLocationModal={this.onCloseEditLocationModal}
                            onOpenDeleteLocationModal={this.onOpenDeleteLocationModal}
                            onCloseDeleteLocationModal={this.onCloseDeleteLocationModal}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="#"
                        onClick={onOpenDeleteModal}
                        className="waves-effect waves-teal btn-flat pink-text text-darken-1"
                      >
                        Delete
                      </a>
                      <a
                        href="#"
                        onClick={this.onCancelChanges}
                        className="modal-close waves-effect waves-teal btn-flat grey-text text-darken-1"
                      >
                        Cancel
                      </a>
                      <a
                        href="#"
                        onClick={this.onSubmit}
                        className="btn"
                      >
                        Save
                      </a>
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
                z-index: 1999;
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

InstructorDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  deleteModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenDeleteModal: PropTypes.func.isRequired,
  instructor: PropTypes.object.isRequired,
  onUpdateInstructorFirstName: PropTypes.func.isRequired,
  onUpdateInstructorLastName: PropTypes.func.isRequired,
  onUpdateInstructorEmail: PropTypes.func.isRequired,
  onUpdateInstructorState: PropTypes.func.isRequired,
  onUpdateInstructorCity: PropTypes.func.isRequired,
  onUpdateInstructorZip: PropTypes.func.isRequired,
  onUpdateInstructorAddress: PropTypes.func.isRequired,
  onUpdateInstructorPhone: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch){
  return{
    onUpdateInstructorFirstName:(value) => dispatch(updateInstructorFirstName(value)),
    onUpdateInstructorLastName:(value) => dispatch(updateInstructorLastName(value)),
    onUpdateInstructorEmail:(value) => dispatch(updateInstructorEmail(value)),
    onUpdateInstructorState:(value) => dispatch(updateInstructorState(value)),
    onUpdateInstructorCity:(value) => dispatch(updateInstructorCity(value)),
    onUpdateInstructorZip:(value) => dispatch(updateInstructorZip(value)),
    onUpdateInstructorAddress:(value) => dispatch(updateInstructorAddress(value)),
    onUpdateInstructorPhone:(value) => dispatch(updateInstructorPhone(value)),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(InstructorDetailsModal);
