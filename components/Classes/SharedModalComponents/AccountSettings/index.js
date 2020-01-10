import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.state);
    const {
      state: { start_date, end_date, active, isExclude }, handleDetailsChange,
    } = this.props;
    return (
      <div className="card-block">
        <h3>Account Settings</h3>
        <div className="card-main card">
          <div className="card-content">
            <div className="row">
              <div className="col s6">
                <div className="datepicker-field input-field">
                  <i className="icon-calendar" />
                  <DatePicker
                    id="course_start_date"
                    selected={start_date !== "" ? new Date(start_date) : start_date}
                    onChange={(date) => handleDetailsChange(date, 'start_date', 'accountInfo')}
                    placeholderText="Course Start Date"
                  />
                </div>
              </div>
              <div className="col s6">
                <div className="datepicker-field input-field">
                  <i className="icon-calendar" />
                  <DatePicker
                    id="course_end_date"
                    selected={end_date !== '' ? new Date(end_date) : end_date}
                    onChange={(date) => handleDetailsChange(date, 'end_date', 'accountInfo')}
                    placeholderText="Course End Date"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="check-holder">
                  <p>
                    <label>
                      <input
                        type="checkbox"
                        className="filled-in"
                        checked={active}
                        onChange={(event) => handleDetailsChange(event, 'active', 'accountInfo', 'checkBox')}
                      />
                      <span>Inactive</span>
                    </label>
                  </p>
                  <span className="card-note">
                    Select this option when you no longer want this student to
                    appear on your list of current students. All student data is
                    retained and, by default, included in instructor and global
                    statistics.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <select id="default_session_duration">
                    <option>Use organization default</option>
                    <option>Use organization default</option>
                    <option>Use organization default</option>
                  </select>
                  <label className="label" htmlFor="default_session_duration">
                    Default Session Duration
                  </label>
                </div>
              </div>
            </div>
            <p>
              <label className="label-wrap">
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={isExclude !== 0}
                  onChange={(event) => handleDetailsChange(event, 'isExclude', 'accountInfo', 'checkBox')}
                />
                <span>Exclude Class from Performance Statistics</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

AccountSettings.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default AccountSettings;
