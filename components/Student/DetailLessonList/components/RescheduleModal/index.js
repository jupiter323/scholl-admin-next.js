import React from "react";
import PropTypes from "prop-types";
import Portal from "../../../../Portal";
import ClickOffComponentWrapper from "../../../../ClickOffComponentWrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class RescheduleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: "SAT Pratice Test #1",
      assignTime: new Date(),
      dueTime: new Date(),
      assignDate: new Date(),
      dueDate: new Date(),
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

  onSave = () => {
    const { onSave } = this.props;
    onSave(this.state);
  };

  render() {
    const {
      open,
      onClose,
    } = this.props;
    const {
      assignDate,
      dueDate,
      assignTime,
      dueTime,
      isTimed
    } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <React.Fragment>
            <div className="overlay">
              <ClickOffComponentWrapper onOuterClick={onClose}>
                <div id="modal_add_new_class" className="modal modal-custom modal-460" style = {{borderRadius:'5px'}}>
                  <form action="#" className="custom-form">
                    <fieldset>
                      <div className="card-modal card-main card">
                        <div
                          className="card-panel card-panel-title"
                          style={{ backgroundColor: "#21B9FF", color: "#fff" }}
                        >
                          <div className="card-panel-row row">
                            <div className="col">
                              <h2>
                                <span className="heading-holder">
                                  <span className="heading-block">Reschedule</span>
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
                              <div className="col s6">
                                <div className="datepicker-field input-field">
                                  <i className="icon-calendar" />
                                  <DatePicker
                                    id="assignDate"
                                    selected={assignDate}
                                    onChange={date => this.handleDetailsChange(date, "assignDate")}
                                    placeholderText="AssignFor"
                                  />
                                  <label
                                    className={assignDate !== "" ? "label active" : "label"}
                                    htmlFor="assignDate"
                                  >
                                    Assign For
                                  </label>
                                </div>
                              </div>
                              <div className="col s6">
                                <div className="datepicker-field input-field">
                                  <i className="icon-clock2"></i>
                                  <DatePicker
                                    id="assignTime"
                                    selected={assignTime}
                                    onChange={date => this.handleDetailsChange(date, "assignTime")}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                  />
                                  <label
                                    className={assignTime !== "" ? "label active" : "label"}
                                    htmlFor="assignTime"
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
                                    id="dueDate"
                                    selected={dueDate}
                                    onChange={date => this.handleDetailsChange(date, "dueDate")}
                                    placeholderText="Due(optional)"
                                  />
                                    <label
                                    className={dueDate !== "" ? "label active" : "label"}
                                    htmlFor="dueDate"
                                  >
                                    Due(Optionanl)
                                  </label>
                                </div>
                              </div>
                              <div className="col s6">
                                <div className="datepicker-field input-field">
                                  <i className="icon-clock2"></i>
                                  <DatePicker
                                    selected={dueTime}
                                    onChange={date => this.handleDetailsChange(date, "dueTime")}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                  />
                                  <label
                                    className={dueTime !== "" ? "label active" : "label"}
                                    htmlFor="dueTime"
                                  >
                                    Time
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="check-holder">
                              <div className="row mb-0">
                                <div className="col s12">
                                  <p>
                                    <label>
                                      <input
                                        type="checkbox"
                                        name="isTimed"
                                        className="filled-in"
                                        checked={isTimed}
                                        onChange={event =>
                                          this.handleDetailsChange(event, "isTimed", "checkbox")
                                        }
                                      />
                                      <span>No Due Date</span>
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
                            <a href="#" className="btn" onClick={this.onSave}>
                              Save Changes
                            </a>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </ClickOffComponentWrapper>
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
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
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

RescheduleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default RescheduleModal;
