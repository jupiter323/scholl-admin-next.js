import React from 'react';
// import PropTypes from 'prop-types';

class AssignSimulatedSATModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
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
                <a href="#!" className="panel-link close modal-close"><i className="icon-close-thin"></i></a>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="modal-row row">
                <div className="col s12">
                  <div className="input-field">
                    <select id="new_test_version">
                      <option>SAT Practice Test #1</option>
                      <option>SAT Practice Test #2</option>
                      <option>SAT Practice Test #3</option>
                    </select>
                    <label className="label" htmlFor="new_test_version">Version</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-calendar"></i>
                    <input type="text"  className="datepicker" id="new_test_assign_date" />
                    <label className="label" htmlFor="new_test_assign_date">Assign For</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-clock2"></i>
                    <input type="text" className="timepicker" id="new_test_assign_time" />
                    <label className="label" htmlFor="new_test_assign_time">Time</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-calendar"></i>
                    <input type="text"  className="datepicker" id="new_test_due_date" />
                    <label className="label" htmlFor="new_test_due_date">Due (optional)</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-clock2"></i>
                    <input type="text" className="timepicker" id="new_test_due_time" />
                    <label className="label" htmlFor="new_test_due_time">Time</label>
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
                            <input type="checkbox" className="filled-in" />
                            <span>Reading</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input type="checkbox" className="filled-in" />
                            <span>Math (no calc)</span>
                          </label>
                        </p>
                      </div>
                      <div className="col s6">
                        <p>
                          <label>
                            <input type="checkbox" className="filled-in" />
                            <span>Writing</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input type="checkbox" className="filled-in" />
                            <span>Math (calculator)</span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <span className="card-note">Note: scaled test scores may require combinations of sections</span>
                  </div>
                  <p>
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span>Allow Student to Enter Answers</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span>Include Score in Improvement Metrics</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span>Timed</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer modal-footer-width">
              <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
              <a href="#" className="link-btn waves-effect waves-teal btn-flat">Save</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignSimulatedSATModal;

/* <!-- Modal structure assign Simulated SAT --> */