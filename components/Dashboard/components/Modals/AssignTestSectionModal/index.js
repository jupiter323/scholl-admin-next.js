import React from 'react';
// import PropTypes from 'prop-types';

class AssignTestSectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_assign_test_section" className="modal modal-custom modal-calendar">
        <div className="card-modal card">
          <div className="card-panel card-panel-title" style={{ backgroundColor: '#00638e', color: '#fff' }}>
            <div className="card-panel-row row">
              <div className="col">
                <h2 className="h3">
                  <span className="heading-holder">
                    <i className="icon-assign-section"></i>
                    <span className="heading-block"> Assign Test Section (as coursework)</span>
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
                    <select id="new_test_section_version">
                      <option>SAT Practice Test #1</option>
                      <option>SAT Practice Test #2</option>
                      <option>SAT Practice Test #3</option>
                    </select>
                    <label className="label" htmlFor="new_test_section_version">Version</label>
                  </div>
                </div>
                <div className="col s12">
                  <div className="input-field">
                    <select id="new_test_section">
                      <option>Math (no calc)</option>
                      <option>Option</option>
                      <option>Option</option>
                    </select>
                    <label className="label" htmlFor="new_test_section">Section</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-calendar"></i>
                    <input type="text"  className="datepicker" id="new_test_section_assign_date" />
                    <label className="label" htmlFor="new_test_section_assign_date">Assign For</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-clock2"></i>
                    <input type="text" className="timepicker" id="new_test_section_assign_time" />
                    <label className="label" htmlFor="new_test_section_assign_time">Time</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-calendar"></i>
                    <input type="text"  className="datepicker" id="new_test_section_due_date" />
                    <label className="label" htmlFor="new_test_section_due_date">Due (optional)</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-clock2"></i>
                    <input type="text" className="timepicker" id="new_test_section_due_time" />
                    <label className="label" htmlFor="new_test_section_due_time">Time</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s12">
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

export default AssignTestSectionModal;

/* <!-- Modal structure assign Test Section --> */