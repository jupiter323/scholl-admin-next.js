import React from "react";
import PropTypes from "prop-types";
import Portal from "../../Portal";

import ClassInfo from '../SharedModalComponents/ClassInformation';
import AccountSetting from '../SharedModalComponents/AccountSettings';
import Locations from '../SharedModalComponents/Locations';
import Instructors from '../SharedModalComponents/Instructors';


class ClassModal extends React.Component {
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
    }
  }

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
  }

  onSave = () => {
    const { onClose,onSave } = this.props;
    onClose();
    onSave();
  }

  render() {
    const { open,onOpenLocationModal,state:{location} } = this.props;
    console.log("current Location:",location.locations)
    return (
      <Portal selector="#modal">
        {open && (
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
                            <a href="#!" className="panel-link close modal-close" >
                              <i className="icon-close-thin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                            <ClassInfo/>
                            <AccountSetting/>
                            <Locations
                              locations = {location.locations}
                              onOpenLocationModal = {onOpenLocationModal}
                            />
                            <Instructors/>
                        </div>
                        <div className="modal-footer">
                          <a
                            href="#!"
                            className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
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
  onOpenLocationModal:PropTypes.func.isRequired,
  state:PropTypes.object.isRequired,
};

export default ClassModal;
