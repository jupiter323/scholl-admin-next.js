import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';
import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';

const sampleVersions = [
  {
    label: 'SAT Practice Test #1',
    value: 'SAT Practice Test #1',
  },
  {
    label: 'SAT Practice Test #2',
    value: 'SAT Practice Test #2',
  },
  {
    label: 'SAT Practice Test #3',
    value: 'SAT Practice Test #3',
  },
];

class AssignSimulatedSatModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      version: '',
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
      sections: [],
      allowStudentToEnterAnswers: false,
      includeScoreInImprovementMetrics: false,
      timed: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { modalDate } = this.props;
    if (prevState.assignDate === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ assignDate: new Date(modalDate) });
    }
  }

  onResetModal = () => this.setState({ version: '', assignDate: '', assignTime: '', dueDate: '', dueTime: '', sections: [], allowStudentToEnterAnswers: false, includeScoreInImprovementMetrics: false, timed: false })

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetModal();
  }

  assignSimulatedSat = () => {
    const { onAssignSimulatedSat } = this.props;
    const { version, assignDate: unformattedAssignDate, assignTime: unformattedAssignTime, dueDate: unformattedDueDate, dueTime: unformattedDueTime, sections, allowStudentToEnterAnswers, includeScoreInImprovementMetrics, timed } = this.state;
    const assignDate = moment(unformattedAssignDate).format('MM/DD/YY');
    const assignTime = moment(unformattedAssignTime).format('hh:mm');
    const dueDate = moment(unformattedDueDate).format('MM/DD/YY');
    const dueTime = moment(unformattedDueTime).format('hh:mm');
    onAssignSimulatedSat({ version, assignDate, assignTime, dueDate, dueTime, sections, allowStudentToEnterAnswers, includeScoreInImprovementMetrics, timed });
    this.onResetModal();
  }

  handleDetailsChange = (event, name = null) => {
    if (event.target) {
      const checkboxName = event.target.name;
      const prevState = this.state[checkboxName]
      this.setState({ [checkboxName]: !prevState });
    } else {
      this.setState({ [name]: event });
    }
  }

  handleSectionsChange = (event) => {
    const { sections } = this.state;
    if (sections.indexOf(event.target.name) === -1) {
      const updatedSections = update(sections, {
        $push: [ event.target.name ],
      });
      this.setState({ sections: updatedSections });
    } else {
      const sectionIndex = sections.indexOf(event.target.name);
      const updatedSections = update(sections, {
        $splice: [[ sectionIndex, 1 ]],
      });
      this.setState({ sections: updatedSections });
    }
  }

  handleDatePickerChange = (field, value) => this.setState({ [field]: value })

  render() {
    const { open } = this.props;
    const { version, assignDate, assignTime, dueDate, dueTime, sections, allowStudentToEnterAnswers, includeScoreInImprovementMetrics, timed } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_assign_simulated_sat" className="modal modal-custom modal-calendar">
                <div className="card-modal card">
                  <div className="card-panel card-panel-title" style={{ backgroundColor: '#ec3330', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h2>
                          <span className="heading-holder">
                            <i className="icon-circles"></i>
                            <span className="heading-block"> New Scored SAT Test</span>
                          </span>
                        </h2>
                      </div>
                      <div className="col right-align">
                        <a href="#" onClick={this.onCloseModal} className="panel-link close modal-close"><i className="icon-close-thin"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <div className="modal-row row">
                        <div className="col s12">
                          <div className="input-field" style={{ marginBottom: '0', marginTop: '0' }}>
                            <Dropdown
                              value={getValueFromState(version, sampleVersions)}
                              onChange={(event) => this.handleDetailsChange(event, 'version')}
                              options={sampleVersions}
                              name="version"
                              label="Version"
                              stateKey="version"
                              dropdownKey="version"
                            />

                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-calendar"></i>
                            <DatePicker
                              selected={assignDate}
                              dateFormat="MM/dd/yy"
                              id="assignDate"
                              name="assignDate"
                              onChange={(event) => this.handleDatePickerChange('assignDate', event)}
                            />
                            <label className={assignDate ? 'label active' : 'label'} htmlFor="new_test_section_assign_date">Assign For</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <DatePicker
                              selected={assignTime}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                              id="assignTime"
                              name="assignTime"
                              onChange={(event) => this.handleDatePickerChange('assignTime', event)}
                            />
                            <label className={assignTime ? 'label active' : 'label'} htmlFor="assignTime">Time</label>
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-calendar"></i>
                            <DatePicker
                              selected={dueDate}
                              dateFormat="MM/dd/yy"
                              id="dueDate"
                              name="dueDate"
                              onChange={(event) => this.handleDatePickerChange('dueDate', event)}
                            />
                            <label className={dueDate ? 'label active' : 'label'} htmlFor="dueDate">Due (optional)</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <DatePicker
                              selected={dueTime}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                              id="dueTime"
                              name="dueTime"
                              onChange={(event) => this.handleDatePickerChange('dueTime', event)}
                            />
                            <label className={dueTime ? 'label active' : 'label'} htmlFor="dueTime">Time</label>
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s12">
                          <span className="card-subtitle">Sections:</span>
                          <div className="check-holder">
                            <div className="row mb-0">
                              <div className="col s6">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="filled-in"
                                      name="Reading"
                                      id="reading"
                                      checked={sections.indexOf('Reading') !== -1}
                                      onChange={this.handleSectionsChange}
                                    />
                                    <span>Reading</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="filled-in"
                                      name="Math (no calc)"
                                      id="mathNoCalc"
                                      checked={sections.indexOf('Math (no calc)') !== -1}
                                      onChange={this.handleSectionsChange}
                                    />
                                    <span>Math (no calc)</span>
                                  </label>
                                </p>
                              </div>
                              <div className="col s6">
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="filled-in"
                                      name="Writing"
                                      id="writing"
                                      checked={sections.indexOf('Writing') !== -1}
                                      onChange={this.handleSectionsChange}
                                    />
                                    <span>Writing</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="filled-in"
                                      name="Math (calculator)"
                                      id="Math (calculator)"
                                      checked={sections.indexOf('Math (calculator)') !== -1}
                                      onChange={this.handleSectionsChange}
                                    />
                                    <span>Math (calculator)</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                            <span className="card-note">Note: scaled test scores may require combinations of sections</span>
                          </div>
                          <p>
                            <label>
                              <input
                                type="checkbox"
                                className="filled-in"
                                name="allowStudentToEnterAnswers"
                                id="allowStudentToEnterAnswers"
                                checked={allowStudentToEnterAnswers}
                                onChange={this.handleDetailsChange}
                              />
                              <span>Allow Student to Enter Answers</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                type="checkbox"
                                className="filled-in"
                                name="includeScoreInImprovementMetrics"
                                id="includeScoreInImprovementMetrics"
                                checked={includeScoreInImprovementMetrics}
                                onChange={this.handleDetailsChange}
                              />
                              <span>Include Score in Improvement Metrics</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                type="checkbox"
                                className="filled-in"
                                name="timed"
                                id="timed"
                                checked={timed}
                                onChange={this.handleDetailsChange}
                              />
                              <span>Timed</span>
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer modal-footer-width">
                      <a href="#" onClick={this.onCloseModal} className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                      <a href="#" onClick={this.assignSimulatedSat} className="link-btn waves-effect waves-teal btn-flat">Save</a>
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
            z-index: 999;
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
        `}
        </style>
      </Portal>
    );
  }
}

AssignSimulatedSatModal.propTypes = {
  modalDate: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAssignSimulatedSat: PropTypes.func.isRequired,
};

export default AssignSimulatedSatModal;
