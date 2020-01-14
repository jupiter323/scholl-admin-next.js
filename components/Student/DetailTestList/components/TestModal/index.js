import React from "react";
import PropTypes from "prop-types";
import Portal from "../../../../Portal";
import getValueFromState from "../../../../utils/getValueFromState";
import Dropdown from "../../../../FormComponents/Dropdown";

class NewTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: "SAT Pratice Test #1",
      timeAssignedFor: '',
      versionOptions: [
        {
          label: "SAT Pratice Test #1",
          value: "SAT Pratice Test #1"
        },
        {
          label: "SAT Pratice Test #2",
          value: "SAT Pratice Test #2"
        },
        {
          label: "SAT Pratice Test #3",
          value: "SAT Pratice Test #3"
        }
      ]
    };
  }

  handleDetailsChange = (event, name) => {};

  render() {
    const { open, onClose } = this.props;
    const { versionOptions, version,timeAssignedFor } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <React.Fragment>
            <div className="overlay">
              <div
                id="modal_add_new_class"
                className="modal modal-custom modal-460"
              >
                <form action="#" className="custom-form">
                  <fieldset>
                    <div className="card-modal card-main card">
                      <div
                        className="card-panel card-panel-title"
                        style={{ backgroundColor: "#E74021", color: "#fff" }}
                      >
                        <div className="card-panel-row row">
                          <div className="col">
                            <h2>
                              <span className="heading-holder">
                                <i className="icon-courses" />
                                <span className="heading-block">New Test</span>
                              </span>
                            </h2>
                          </div>
                          <div className="col right-align">
                            <a
                              href="#!"
                              className="panel-link close modal-close"
                              onClick={onClose}
                            >
                              <i className="icon-close-thin" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="card-body">
                          <div className="row mb-0">
                            <div className="col s12">
                              <div className="input-field">
                                <Dropdown
                                  value={getValueFromState(
                                    version,
                                    versionOptions
                                  )}
                                  onChange={event =>
                                    this.handleDetailsChange(event, "version")
                                  }
                                  options={versionOptions}
                                  label="Version"
                                  stateKey="version"
                                  dropdownKey="version"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s12">
                              <div className="datepicker-field input-field">
                                <i className="icon-clock2"></i>
                                <input
                                  type="text"
                                  className="timepicker"
                                  id="assignFor"
                                  value={timeAssignedFor}
                                  onChange={event =>
                                    this.handleDetailsChange(
                                      event,
                                      "timeAssignedFor"
                                    )
                                  }
                                />
                                <label
                                  className={
                                    timeAssignedFor.length
                                      ? "label active"
                                      : "label"
                                  }
                                  htmlFor="detail_estimated_time"
                                >
                                  AssignFor
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <a
                            href="#!"
                            className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                            onClick={onClose}
                          >
                            Cancel
                          </a>
                          <a href="#" className="btn">
                            Save
                          </a>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
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

NewTestModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default NewTestModal;
