import React from "react";
import PropTypes from "prop-types";
import Portal from "../../../../Portal";
import getValueFromState from "../../../../utils/getValueFromState";
import Dropdown from "../../../../FormComponents/Dropdown";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class NewTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      version: "SAT Pratice Test #1",
      timeAssignedFor: "",
      timeDueFor: "",
      dayAssignedFor: "",
      dayDueFor: "",
      reading: false,
      mathNoCalc: false,
      writing: false,
      mathWithCalc: false,
      isAllowed: false,
      isIncluded: false,
      isTimed: false,
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

  handleDetailsChange = (event, name, checkBox = false) => {
    const value = event.target ? event.target.value : event;
    if (checkBox) {
      this.setState({
        [name]: !this.state[name]
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    const { open, onClose } = this.props;
    const {
      versionOptions,
      version,
      dayAssignedFor,
      dayDueFor,
      timeAssignedFor,
      timeDueFor,
      reading,
      mathNoCalc,
      writing,
      mathWithCalc,
      isAllowed,
      isIncluded,
      isTimed
    } = this.state;
    console.log("timeDueFor length:",timeDueFor)
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
                                  value={getValueFromState( version,versionOptions)}
                                  onChange={event => this.handleDetailsChange(event, "version")}
                                  options={versionOptions}
                                  label="Version"
                                  stateKey="version"
                                  dropdownKey="version"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s6">
                              <div className="datepicker-field input-field">
                                <i className="icon-calendar" />
                                <DatePicker
                                  id="dayAssignedFor"
                                  selected={ dayAssignedFor !== "" ? new Date() : dayAssignedFor }
                                  onChange={date => this.handleDetailsChange( date,"dayAssignedFor")}
                                  placeholderText="AssignFor"
                                />
                              </div>
                            </div>
                            <div className="col s6">
                              <div className="datepicker-field input-field">
                                <i className="icon-clock2"></i>
                                <DatePicker
                                  id="timeAssignedFor"
                                  selected={timeAssignedFor}
                                  onChange={date => this.handleDetailsChange( date,"timeAssignedFor")}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={15}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                />
                                <label
                                  className={ timeAssignedFor !== "" ? "label active" : "label"}
                                  htmlFor="timeAssignedFor"
                                >
                                  Time
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s6">
                              <div className="datepicker-field input-field">
                                <i className="icon-calendar" />
                                <DatePicker
                                  id="dayDueFor"
                                  selected={ dayDueFor !== "" ? new Date() : dayDueFor}
                                  onChange={date => this.handleDetailsChange(date, "dayDueFor")}
                                  placeholderText="Due(optional)"
                                />
                              </div>
                            </div>
                            <div className="col s6">
                              <div className="datepicker-field input-field">
                                <i className="icon-clock2"></i>
                                <DatePicker
                                  selected={timeDueFor}
                                  onChange={date => this.handleDetailsChange(date, "timeDueFor")}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={15}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                />
                                <label
                                  className={ timeDueFor !== "" ? "label active" : "label"}
                                  htmlFor="timeDueFor"
                                >
                                  Time
                                </label>
                              </div>
                            </div>
                          </div>
                          <label>Sections:</label>
                          <div className="check-holder">
                            <div className="row mb-0">
                              <div className="col s6">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="reading"
                                      className="filled-in"
                                      checked={reading}
                                      onChange={event => this.handleDetailsChange(event,"reading","checkBox")
                                      }
                                    />
                                    <span>Reading</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="mathNoCalc"
                                      className="filled-in"
                                      checked={mathNoCalc}
                                      onChange={event => this.handleDetailsChange( event, "mathNoCalc","checkbox")}
                                    />
                                    <span>Math(no calc)</span>
                                  </label>
                                </p>
                              </div>
                              <div className="col s6">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="writing"
                                      className="filled-in"
                                      checked={writing}
                                      onChange={event => this.handleDetailsChange( event, "writing","checkbox")}
                                    />
                                    <span>Writing</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="mathWithCalc"
                                      className="filled-in"
                                      checked={mathWithCalc}
                                      onChange={event => this.handleDetailsChange(event,"mathWithCalc","checkbox")}
                                    />
                                    <span>Math(calculator)</span>
                                  </label>
                                </p>
                              </div>
                              <label>
                                Note: scaled test scores may require
                                combinations of sections
                              </label>
                            </div>
                          </div>
                          <div className="check-holder">
                            <div className="row mb-0">
                              <div className="col s12">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="isAllowed"
                                      className="filled-in"
                                      checked={isAllowed}
                                      onChange={event => this.handleDetailsChange( event,"isAllowed","checkbox")}
                                    />
                                    <span>Allow Student to Enter Answers</span>
                                  </label>
                                </p>
                              </div>
                              <div className="col s12">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="isIncluded"
                                      className="filled-in"
                                      checked={isIncluded}
                                      onChange={event => this.handleDetailsChange( event,"isIncluded","checkbox")}
                                    />
                                    <span>
                                      Include Score in Improvement Metrics
                                    </span>
                                  </label>
                                </p>
                              </div>
                              <div className="col s12">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="isTimed"
                                      className="filled-in"
                                      checked={isTimed}
                                      onChange={event => this.handleDetailsChange( event,"isTimed","checkbox")}
                                    />
                                    <span>Timed</span>
                                  </label>
                                </p>
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
