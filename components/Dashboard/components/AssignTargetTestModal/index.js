import React from 'react';
// import PropTypes from 'prop-types';

class AssignTargetTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_assign_target_test" className="modal modal-custom modal-calendar">
        <form action="#">
          <fieldset>
            <div className="card-modal card">
              <div className="card-panel card-panel-title" style={{ backgroundColor: '#ec3330', color: '#fff' }}>
                <div className="card-panel-row row">
                  <div className="col">
                    <h2>
                      <span className="heading-holder">
                        <i className="icon-cup"></i>
                        <span className="heading-block"> Set Target Test Date</span>
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
                        <select id="new_target_test_date">
                          <option>October SAT (10/4/2018)</option>
                          <option>October SAT (10/4/2018)</option>
                          <option>October SAT (10/4/2018)</option>
                        </select>
                        <label className="label" htmlFor="new_target_test_date">Test Date</label>
                      </div>
                      {/* <!-- <div class="datepicker-field input-field">
                        <i class="icon-calendar"></i>
                        <input type="text"  class="datepicker" id="new_test_due_date">
                        <label class="label" for="new_test_due_date">Due (optional)</label>
                      </div> --> */}
                    </div>
                  </div>
                  <div className="modal-row row">
                    <div className="col s12">
                      <span className="note">Note:</span>
                      <p>If the student plans to take the SAT multiple times, you may schedule multiple “Target Test Dates.” Test score and improvement metrics will be based on the student’s score on the ﬁnal target test date.</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer modal-footer-width">
                  <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                  <a href="#" className="link-btn waves-effect waves-teal btn-flat">Set Target Test Date</a>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AssignTargetTestModal;

/* <!-- Modal structure assign Target Test --> */