import React from "react";

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-block">
        <h3>Account Settings</h3>
        <div className="card-main card">
          <div className="card-content">
            <div className="row">
              <div className="col s6">
                <div className="datepicker-field input-field">
                  <i className="icon-calendar" />
                  <input
                    type="text"
                    className="datepicker"
                    id="course_start_date"
                  />
                  <label className="label" htmlFor="course_start_date">
                    Course Start Date
                  </label>
                </div>
              </div>
              <div className="col s6">
                <div className="datepicker-field input-field">
                  <i className="icon-calendar" />
                  <input
                    type="text"
                    className="datepicker"
                    defaultValue="6/1/18"
                    id="course_end_date"
                  />
                  <label className="label" htmlFor="course_end_date">
                    Course End Date
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="check-holder">
                  <p>
                    <label>
                      <input type="checkbox" className="filled-in" />
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
                <input type="checkbox" className="filled-in" />
                <span>Exclude Class from Performance Statistics</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSettings;
