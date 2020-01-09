/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

import AccountInfo from '../SharedModalComponents/AccountInfo';
import ContactInfo from '../SharedModalComponents/ContactInfo';
import Locations from '../SharedModalComponents/Locations';

import { nestedCreateFieldValidation } from '../../../../utils/fieldValidation';
import initialState from './utils/initialState';

const idGenerator = () => Math.floor((Math.random() * 100) + 1);

class NewInstructorModal extends React.Component {
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
      accountInfo: {
        firstName: '',
        lastName: '',
        email: '',
        gender: {},
      },
      contactInfo: {
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
      },
      locations: [],
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

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onOpenDeleteLocationModal = (pendingLocationDelete) => this.setState({ deleteLocationModalOpen: true, pendingLocationDelete });
  onCloseDeleteLocationModal = () => this.setState({ deleteLocationModalOpen: false, pendingLocationDelete: {} });

  onOpenNewLocationModal = () => this.setState({ newLocationModalOpen: true });
  onCloseNewLocationModal = () => this.setState({ newLocationModalOpen: false });

  onOpenEditLocationModal = (activeLocation) => this.setState({ editLocationModalOpen: true, activeLocation });
  onCloseEditLocationModal = () => this.setState({ editLocationModalOpen: false, dropdownIsOpen: false, activeLocation: {} });

  onResetInstructor = () => this.setState(initialState);

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetInstructor();
  }

  // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // If all the fields are valid, we construct a post body and call onSaveNewLocation passed down from the container level
  onSubmit = async (event) => {
    event.preventDefault();
    const { accountInfo, contactInfo, locations } = this.state;
    const { onAddNewInstructor, onClose } = this.props;
    // NOTE: Swap out what instance of valid is active if you want to test saving a new location without worrying about validation
    // const valid = true;
    const valid = await nestedCreateFieldValidation(this.state, this.onSetValidation, (validation) => console.warn('validation', validation));
    if (!valid) {
      // return onSaveLocationError();
      console.warn('not valid');
    }
    const id = idGenerator();
    const postBody = { id, accountInfo, contactInfo, locations };
    onAddNewInstructor(postBody);
    console.warn('stubbed out save function');
    onClose();
  }

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState(updatedState);
  }

  renderModalHeader = () => {
    const { accountInfo: { lastName, firstName, email } } = this.state;
    return (
      <React.Fragment>
        <h4 className="h3">{lastName}, {firstName}</h4>
        <a href={`mailto:${email}`}>{email}</a>
      </React.Fragment>
    );
  }

  render() {
    const { open } = this.props;
    const { dropdownIsOpen, dropdownIndex, activeLocation, deleteLocationModalOpen, pendingLocationDelete,
      newLocationModalOpen, editLocationModalOpen, accountInfo, contactInfo, locations,
    } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal} nestedModals={deleteLocationModalOpen || editLocationModalOpen || newLocationModalOpen}>
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
                            state={accountInfo}
                            handleDetailsChange={this.handleDetailsChange}
                          />
                          <ContactInfo
                            state={contactInfo}
                            handleDetailsChange={this.handleDetailsChange}
                          />
                        </div>
                        <div className="col s12 l6">
                          <Locations
                            state={locations}
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
                        onClick={this.onCloseModal}
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

NewInstructorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewInstructorModal;
