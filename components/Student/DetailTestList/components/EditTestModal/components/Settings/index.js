import React from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class Settings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      testDate,
      dueDate,
      handleDatePickerChange,
      allowStudentToEnterAnswers,
      timed,
      handleSettingsChange
    } = this.props;
    return (
      <React.Fragment>
        <h2>Settings</h2>
        <div className="card card-test-detail">
          <div className="card-content">
            <div className="datepicker-field input-field">
              <i className="icon-calendar"></i>
              <DatePicker
                selected={testDate}
                withPortal
                dateFormat="MM/dd/yy"
                id="testDate"
                name="testDate"
                onChange={event => handleDatePickerChange("testDate", event)}
              />
              <label
                className={testDate ? "label active" : "label"}
                htmlFor="date_Test"
              >
                Test Date
              </label>
            </div>
            <div className="datepicker-field input-field">
              <i className="icon-calendar"></i>
              <DatePicker
                selected={dueDate}
                withPortal
                dateFormat="MM/dd/yy"
                id="dueDate"
                name="dueDate"
                onChange={event => handleDatePickerChange("dueDate", event)}
              />
              <label
                className={dueDate ? "label active" : "label"}
                htmlFor="date_Test"
              >
                Due Date (optional)
              </label>
            </div>
            <div className="input-field">
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="allowStudentToEnterAnswers"
                    className="filled-in"
                    checked={allowStudentToEnterAnswers}
                    onChange={handleSettingsChange}
                  />
                  <span>Allow Student to Enter Answers</span>
                </label>
              </p>
            </div>
            <div className="input-field">
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="timed"
                    className="filled-in"
                    checked={timed}
                    onChange={handleSettingsChange}
                  />
                  <span>Timed</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Settings.propTypes = {
  dueDate: PropTypes.any,
  testDate: PropTypes.any,
  timed: PropTypes.bool.isRequired,
  handleSettingsChange: PropTypes.func.isRequired,
  handleDatePickerChange: PropTypes.func.isRequired,
  allowStudentToEnterAnswers: PropTypes.bool.isRequired
};

export default Settings;
