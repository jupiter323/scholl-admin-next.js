import React from 'react';
// import PropTypes from 'prop-types';

class ApplyCourseTemplateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_apply_course_template" className="modal modal-custom modal-calendar modal-course_template">
        <div className="card-modal card">
          <div className="card-panel card-panel-title" style={{ backgroundColor: '#661f77', color: '#fff' }}>
            <div className="card-panel-row row">
              <div className="col">
                <h2>
                  <span className="heading-holder">
                    <i className="icon-module"></i>
                    <span className="heading-block"> Apply a Course Template</span>
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
              {/* <!-- To make the STEP active, class .STEP-ACTIVE should be added to the <LI>element. --> */}
              {/* <!-- To make the STEP completed, class .STEP-COMPLETED should be added to the <LI>element. --> */}
              <ol className="steps-list">
                {/* <!-- step 01 --> */}
                <li className="step-01 step-completed">
                  <div className="modal-row row">
                    <div className="col s12">
                      <span className="step-title"><span className="title-holder">Choose a Template</span> <a href="#" className="link-edit completed-visible"><i className="icon-pencil2"></i></a></span>
                    </div>
                  </div>
                  <div className="step-holder active-visible">
                    <div className="modal-row row">
                      <div className="col s12 m6">
                        <div className="input-field">
                          <select id="template_source">
                            <option>Built-In Templates</option>
                            <option>Option</option>
                            <option>Option</option>
                          </select>
                          <label className="label" htmlFor="template_source">Template Source</label>
                        </div>
                      </div>
                      <div className="col s12 m6">
                        <div className="input-field">
                          <select id="template">
                            <option>Source 01</option>
                            <option>Source 02</option>
                            <option>Source 03</option>
                          </select>
                          <label className="label" htmlFor="template">Template</label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-row row">
                      <div className="col s12 l6">
                        <div className="card-block">
                          <div className="list-block">
                            <span className="card-subtitle">Description:</span>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                          </div>
                          <div className="list-block">
                            <span className="card-subtitle">Instructions:</span>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col s12 l6">
                        <div className="row mb-0">
                          <div className="col s4">
                            <ul className="points-list list-one-col badge-circle-78">
                              <li className="style-purple-dark">
                                <span className="badge-circle">24</span>
                                <span className="point-text">Sessions</span>
                              </li>
                              <li className="style-pink">
                                <span className="badge-circle">62 <span className="badge-text">hrs</span></span>
                                <span className="point-text">Estimated Total Course Work</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col s8">
                            <div className="chart-block chart-block-170">
                              <div className="js-donut-chart" data-stroke-width="50" data-source='./inc/score-data-multiline.json'></div>
                              <div className="chart-text">
                                <span className="value">120</span>
                                <span className="description">Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-holder">
                      <a href="#" className="btn-large waves-effect waves-light bg-blue">Continue</a>
                      <a href="#" className="waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                    </div>
                  </div>
                </li>
                {/* <!-- step 02 --> */}
                <li className="step-02 step-completed">
                  <div className="modal-row row">
                    <div className="col s12">
                      <span className="step-title"><span className="title-holder">Set Course Options</span> <a href="#" className="link-edit completed-visible"><i className="icon-pencil2"></i></a></span>
                    </div>
                  </div>
                  <div className="step-holder active-visible">
                    <div className="modal-row row">
                      <div className="col s12">
                        <div className="list-block">
                          <p>Complete this form to initialize a course template. Once the template has been applied, you can make changes to the student's schedule at any time using the course planner.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-block">
                      <div className="modal-row row">
                        <div className="col s12 m7">
                          <div className="modal-row row">
                            <div className="col m7 l8">
                              <div className="row">
                                <div className="col s12 l10">
                                  <div className="datepicker-field input-field">
                                    <i className="icon-calendar"></i>
                                    <input type="text"  className="datepicker" id="first_session_date" />
                                    <label className="label" htmlFor="first_session_date">First Session Date</label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col s12 l10">
                                  <div className="datepicker-field input-field">
                                    <i className="icon-clock2"></i>
                                    <input type="text" className="timepicker" id="default_session_time" />
                                    <label className="label" htmlFor="default_session_time">Default Session Time</label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col s11 l10">
                                  <div className="input-field">
                                    <select id="default_session_duration">
                                      <option>Built-In Templates</option>
                                      <option>Option</option>
                                      <option>Option</option>
                                    </select>
                                    <label className="label" htmlFor="default_session_duration">Default Session Duration</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col m5 l4">
                              <p>Session Days</p>
                              <div className="checkboxes-block">
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Sunday</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Monday</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Tuesday</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Wednesday</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Thursday</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Friday</span>
                                  </label>
                                </p>
                                <p>
                                  <label>
                                    <input type="checkbox" className="filled-in" />
                                    <span>Saturday</span>
                                  </label>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m5">
                          <p>
                            <label>
                              <input type="checkbox" className="filled-in" />
                              <span>Set Due Dates</span>
                            </label>
                          </p>
                          <div className="list-block">
                            <p>Due dates are required for additional options including student and parent reminders and “on time” percentage tracking.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-holder">
                      <a href="#" className="btn-large waves-effect waves-light bg-blue">Continue</a>
                      <a href="#" className="waves-effect waves-teal btn-flat pink-text text-darken-1">Back</a>
                    </div>
                  </div>
                </li>
                {/* <!-- step 03 --> */}
                <li className="step-03 step-active">
                  <div className="modal-row row">
                    <div className="col s12">
                      <span className="step-title"><span className="title-holder">Adjust Session Schedule</span> <a href="#" className="link-edit completed-visible"><i className="icon-pencil2"></i></a></span>
                    </div>
                  </div>
                  <div className="step-holder active-visible">
                    <div className="card-block">
                      <div className="modal-row row">
                        <div className="col s12 m6">
                          <div className="list-block">
                            <p>You can adjust the session dates on the calendar below. Hold down the "ctrl" button on your keyboard ("command" for Mac) and click on calendar days to add or remove sessions. The total number of session days must remain the same as the number of sessions in the template you selected.</p>
                          </div>
                          <ul className="points-list list-one-col badge-circle-98">
                            <li className="style-green-dark">
                              <span className="badge-circle"><span>24 </span> <span className="of">of 24</span></span>
                              <span className="point-text">Sessions <br />scheduled</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col s12 m6">
                          <div className="inline-datepicker-holder">
                            <input type="hidden" className="inline-datepicker" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-holder">
                      <a href="#" className="btn-large waves-effect waves-light bg-blue">Continue</a>
                      <a href="#" className="waves-effect waves-teal btn-flat pink-text text-darken-1">Back</a>
                    </div>
                  </div>
                </li>
                {/* <!-- step 04 --> */}
                <li className="step-04">
                  <div className="modal-row row">
                    <div className="col s12">
                      <span className="step-title"><span className="title-holder">Schedule Tests</span> <a href="#" className="link-edit completed-visible"><i className="icon-pencil2"></i></a></span>
                    </div>
                  </div>
                  <div className="step-holder active-visible">
                    <div className="card-block">
                      <div className="modal-row row">
                        <div className="col s12 m6">
                          <div className="list-block">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos-trud exerci tation ullamcorper suscipit lobortis nisl.</p>
                          </div>
                          <ul className="points-list list-one-col badge-circle-98">
                            <li className="style-pink">
                              <span className="badge-circle"><span>3</span></span>
                              <span className="point-text">practice tests <br />scheduled</span>
                            </li>
                          </ul>
                          <div className="row">
                            <div className="col s11 l10">
                              <div className="input-field">
                                <select id="target_test_date">
                                  <option>October 2018 SAT (10/7/2018)</option>
                                  <option>Option</option>
                                  <option>Option</option>
                                </select>
                                <label className="label" htmlFor="target_test_date">Target Test Date</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6">
                          <div className="datepicker-container">
                            <div className="inline-datepicker-holder">
                              <input type="hidden" className="inline-datepicker" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-holder">
                      <a href="#" className="btn-large waves-effect waves-light bg-blue">Apply Template</a>
                      <a href="#" className="waves-effect waves-teal btn-flat pink-text text-darken-1">Back</a>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplyCourseTemplateModal;

/* <!-- Modal structure Apply a Course Template --> */