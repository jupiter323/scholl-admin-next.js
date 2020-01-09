/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';

import Portal from '../../../../Portal';
import TestVersionSettings from './components/TestVersionSettings';
import Settings from './components/Settings';

class EditTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testVersion: {
        version: '',
        sections: {
          reading: false,
          writing: false,
          math: false,
          essay: false,
        },
        includeScoreInImprovementMetrics: false,
      },
      settings: {
        testDate: '',
        dueDate: '',
        allowStudentToEnterAnswers: false,
        timed: false,
      },
    };
  }

  componentDidMount() {
    const { test: { testDate: unformattedTestDate, dueDate: unformattedDueDate } } = this.props;
    const testDate = new Date(unformattedTestDate);
    const dueDate = unformattedDueDate ? new Date(unformattedDueDate) : '';
    const settings = update(this.state.settings, {
      testDate: {
        $set: testDate,
      },
      dueDate: {
        $set: dueDate,
      },
    });
    this.setState({ settings });
  }

  componentDidUpdate(prevProps) {
    const { test: { testDate: unformattedTestDate, dueDate: unformattedDueDate } } = this.props;
    const testDate = new Date(unformattedTestDate);
    const dueDate = unformattedDueDate ? new Date(unformattedDueDate) : '';
    if (prevProps.test.id !== this.props.test.id) {
      const settings = update(this.state.settings, {
        testDate: {
          $set: testDate,
        },
        dueDate: {
          $set: dueDate,
        },
      });
      this.setState({ settings });
    }
  }

  handleTestVersionSettingsChange = (event) => {
    const { testVersion: { sections } } = this.state;
    let testVersion;
    if (event.target) {
      const { target: { name: setting } } = event;
      if (sections[setting] !== undefined) {
        testVersion = update(this.state.testVersion, {
          sections: {
            [setting]: {
              $set: !sections[setting],
            },
          },
        });
      } else {
        testVersion = update(this.state.testVersion, {
          [setting]: {
            $set: !this.state.testVersion[setting],
          },
        });
      }
    } else {
      testVersion = update(this.state.testVersion, {
        version: {
          $set: event,
        },
      });
    }
    this.setState({ testVersion });
  }

  handleSettingsChange = (event) => {
    const { settings: previousSettings } = this.state;
    const { target: { name: setting } } = event;
    const settings = update(this.state.settings, {
      [setting]: {
        $set: !previousSettings[setting],
      },
    });
    this.setState({ settings });
  }

  handleDatePickerChange = (field, value) => {
    const settings = update(this.state.settings, {
      [field]: {
        $set: value,
      },
    });
    this.setState({ settings });
  }

  saveTestChanges = () => {
    const { onSaveTestChanges } = this.props;
    const { testVersion, settings: { testDate: unformattedTestDate, dueDate: unformattedDueDate, allowStudentToEnterAnswers, timed } } = this.state;
    const testDate = moment(unformattedTestDate).format('MM/DD/YY');
    const dueDate = moment(unformattedDueDate).format('MM/DD/YY');
    onSaveTestChanges(testVersion, { testDate, dueDate, allowStudentToEnterAnswers, timed });
  }

  render() {
    const { test, user, onDeleteTest } = this.props;
    const { title, version: testVersion, completionDate, completionTime } = test;
    const { studentInformation: { firstName, lastName } } = user;
    const {
      testVersion: {
        sections: {
          reading, writing, math, essay,
        },
        version, includeScoreInImprovementMetrics,
      },
      settings: { testDate, dueDate, allowStudentToEnterAnswers, timed },
    } = this.state;
    return (
      <Portal selector="#modal">
        <div className="main-holder grey lighten-5 modal" style={{ zIndex: '1003', display: 'block', position: 'absolute', top: '0', width: '100%' }}>
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="icon-col col s1">
                <i className="icon-letter-a"></i>
              </div>
              <div className="col s9">
                <div className="card-panel-text center-align">
                  <div className="text-xlarge">{title}</div>
                  <div className="text-small">Version: SAT Practice Test #{testVersion}</div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row">&nbsp;</div>
              </div>
            </div>
            <div className="header-row-block card-panel-row row">
              <div className="col s3">&nbsp;</div>
              <div className="col s9 right-align">
                <div><span className="name">{firstName} {lastName}</span></div>
              </div>
            </div>
          </div>
          <div className="nav-header white">
            <div className="nav-additional">
              <ul className="menu-additional">
                <li className="col s3"><a className="active" href="#">Scores</a></li>
                <li className="col s3"><a href="#">Answer Sheet</a></li>
                <li className="col s3"><a href="#">Strengths &amp; Weaknesses</a></li>
                <li className="col s3"><a href="#">Test Version</a></li>
                <li className="menu-special col s3"><a href="#">Download Score Report <i className="icon-download-file"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="content-section">
            <div className="content-section-holder">
              <div className="container-xsmall">
                <div className="row d-flex-content card-width-322">
                  <div className="card-main-col col s12 m8 l7 xl5">
                    <TestVersionSettings
                      version={version}
                      reading={reading}
                      writing={writing}
                      math={math}
                      essay={essay}
                      includeScoreInImprovementMetrics={includeScoreInImprovementMetrics}
                      handleTestVersionSettingsChange={this.handleTestVersionSettingsChange}
                    />
                    <Settings
                      timed={timed}
                      testDate={testDate}
                      dueDate={dueDate}
                      handleSettingsChange={this.handleSettingsChange}
                      handleDatePickerChange={this.handleDatePickerChange}
                      allowStudentToEnterAnswers={allowStudentToEnterAnswers}
                    />
                  </div>
                  <div className="card-main-col col s12 m8 l7 xl5">
                    <h2>Status</h2>
                    <div className="card card-test-detail">
                      <div className="card-content">
                        <div className="meta-info">
                          <If condition={completionDate.length}>
                            <p>
                              Completed : <time dateTime="2018-12-29">{completionDate} at {completionTime}</time>
                              <If condition={completionDate.length && test.dueDate < completionDate}>
                                <span className="badge white-text badge-rounded-sm" style={{ backgroundColor: '#db1d41' }}><b className="badge-text">late</b></span>
                              </If>
                            </p>
                          </If>
                          <p>Answers Entered by: {firstName} {lastName} (student)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-holder">
                  <a href="#" className="btn" onClick={this.saveTestChanges}>Save</a>
                  <a href="#" className="waves-effect waves-teal btn-flat pink-text text-darken-1" onClick={onDeleteTest}>Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}

EditTestModal.propTypes = {
  test: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onDeleteTest: PropTypes.func.isRequired,
  onSaveTestChanges: PropTypes.func.isRequired,
}

export default EditTestModal;
