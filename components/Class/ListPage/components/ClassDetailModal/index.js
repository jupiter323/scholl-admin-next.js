import React from "react";
import PropTypes from "prop-types";
import Portal from "../../../../Portal";
import update from 'immutability-helper';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

import AccountInfo from '../SharedModalComponents/AccountInfo';
import ContactInfo from '../SharedModalComponents/ContactInfo';
import Locations from '../SharedModalComponents/Locations';

import { nestedEditFieldValidation } from '../../../../utils/fieldValidation';



class ClassDetailModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { open } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper
              onOuterClick={this.onCancelChanges}
              nestedModals={
                deleteModalOpen ||
                deleteLocationModalOpen ||
                editLocationModalOpen ||
                newLocationModalOpen
              }
            >
              <div
                id="modal_user_edit"
                className="modal modal-custom modal-custom-large modal-gray"
              >
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
                            <img src="./static/images/img-owner01.jpg" alt="" />
                          </div>
                          <div className="user-text" style={{ color: "#fff" }}>
                            {this.renderModalHeader()}
                          </div>
                        </div>
                      </div>
                      <div className="col" style={{ textAlign: "right" }}>
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
                            state={
                              this.initialInstructorMount()
                                ? accountInfo
                                : updatedAccountInfo
                            }
                            handleDetailsChange={this.handleDetailsChange}
                          />
                          <ContactInfo
                            state={
                              this.initialInstructorMount()
                                ? contactInfo
                                : updatedContactInfo
                            }
                            handleDetailsChange={this.handleDetailsChange}
                          />
                        </div>
                        <div className="col s12 l6">
                          <Locations
                            state={
                              this.initialInstructorMount()
                                ? locations
                                : updatedLocations
                            }
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
                            onOpenEditLocationModal={
                              this.onOpenEditLocationModal
                            }
                            onCloseNewLocationModal={
                              this.onCloseNewLocationModal
                            }
                            onCloseEditLocationModal={
                              this.onCloseEditLocationModal
                            }
                            onOpenDeleteLocationModal={
                              this.onOpenDeleteLocationModal
                            }
                            onCloseDeleteLocationModal={
                              this.onCloseDeleteLocationModal
                            }
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
                      <a href="#" onClick={this.onSubmit} className="btn">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
      </Portal>
    );
  }
}

ClassDetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  deleteModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenDeleteModal: PropTypes.func.isRequired,
  classroom: PropTypes.object.isRequired
};

export default ClassDetailModal;
