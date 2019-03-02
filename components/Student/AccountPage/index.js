/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';


import LocationModal from '../LocationModal';
import InstructorModal from '../InstructorModal';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
    };
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onOpenInstructorModal = () => this.setState({ instructorlocationModalOpen: true });
  onCloseInstructorModal = () => this.setState({ instructorModalOpen: false });

  render() {
    const { locationModalOpen, instructorModalOpen } = this.state;
    return (
      <React.Fragment>
        <LocationModal
          open={locationModalOpen}
          onClose={this.onCloseLocationModal}
        />
        <InstructorModal
          open={instructorModalOpen}
          onClose={this.onCloseInstructorModal}
        />
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h2>Student Information</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="text" id="first_name" value="Arnold" />
                          <label className="label" htmlFor="first_name">First Name</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="text" id="last_name" value="Studently" />
                          <label className="label" htmlFor="last_name">Last Name</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s6 l5 focus-blue">
                          <select id="state_edit">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                          <label className="label" htmlFor="state_edit">Gender</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h2>Contact Information (optional)</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="tel" id="tel" />
                          <label className="label" htmlFor="tel">Phone*</label>
                          <span className="note">*Optional</span>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="text" id="address-01" />
                          <label className="label" htmlFor="address-01">Address Line 1*</label>
                          <span className="note">*Optional</span>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="text" id="address-02" />
                          <label className="label" htmlFor="address-02">Address Line 2*</label>
                          <span className="note">*Optional</span>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="text" id="city" />
                          <label className="label" htmlFor="city">City*</label>
                          <span className="note">*Optional</span>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s6 l5">
                          <div className="input-field focus-blue">
                            <select id="contact_state_edit">
                              <option>State*</option>
                              <option>State</option>
                              <option>State</option>
                            </select>
                            <span className="note">*Optional</span>
                          </div>
                        </div>
                        <div className="col s6 l7">
                          <div className="input-field focus-blue">
                            <input type="text" id="contact_zip_edit" />
                            <label className="label" htmlFor="contact_zip_edit">Zip</label>
                            <span className="note">*Optional</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h2>Email Address</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="row mb-0">
                        <div className="input-field col s12 focus-blue">
                          <input type="email" id="email" value="arnold.studently@clearchoiceprep.com" />
                          <label className="label" htmlFor="email">Email*</label>
                          <span className="note">*Optional</span>
                        </div>
                      </div>
                      <p className="text">A valid student email address is required for most student functions. You may create an account without an email address, but until a valid email address is entered, the student will not receive the requisite welcome email and cannot login to the system.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h3>Location</h3>
                  {/* <!-- card --> */}
                  <div className="card card-instructor">
                    <div className="card-content">
                      <div className="text-block">
                        <p>Depending on your settings, you may have more than one location/branch. The student’s location aﬀects which managers have access to this student. </p>
                      </div>
                      <div className="box-scrollable">
                        <div className="height-15 jcf-scrollable">
                          <div className="card-location-holder">
                            <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                              <a href="#" className="close-link icon-close-thin"></a>
                              <div className="card-panel-row row">
                                <div className="col s10">
                                  <h3 className="h4 truncate">Location Nickname</h3>
                                  <h4 className="sub-title">Location Name</h4>
                                </div>
                                <div className="col s2 right-align">
                                  <span className="block-icon">
                                    <i className="icon-location"></i>
                                    <span className="text-icon">Location</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer right-align">
                        <a
                          href="#"
                          onClick={this.onOpenLocationModal}
                          className="modal-trigger link-block"
                        >
                          Add Location
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h3>Instructor</h3>
                  {/* <!-- card --> */}
                  <div className="card card-instructor">
                    <div className="card-content">
                      <div className="text-block">
                        <p>Add one or more instructors to the list below. Each instructor can manage the student’s course.</p>
                      </div>
                      <div className="box-scrollable">
                        <div className="height-15 jcf-scrollable">
                          <div className="card-location-holder">
                            <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                              <a href="#" className="close-link icon-close-thin"></a>
                              <div className="card-panel-row row">
                                <div className="col s10">
                                  <div className="user-block">
                                    <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                      <img src="images/img-owner01.jpg" alt="image description" />
                                    </div>
                                    <div className="user-text" style={{ color: '#fff' }}>
                                      <h4 className="h3">Smith, John</h4>
                                      <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col s2 right-align">
                                  <span className="block-icon">
                                    <i className="icon-user"></i>
                                    <span className="text-icon">Instructor</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer right-align">
                        <a
                          href="#"
                          onClick={this.onOpenInstructorModal}
                          className="modal-trigger link-block"
                        >
                          Add Instructor
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h3>Class</h3>
                  {/* <!-- card --> */}
                  <div className="card card-instructor">
                    <div className="card-content">
                      <div className="text-block">
                        <p>If this student is in a class, add it here. When a student is a member of a class, he or she will automatically be assigned all the classwork. </p>
                      </div>
                      <div className="box-scrollable">
                        <div className="height-20 jcf-scrollable">
                          <div className="card-location-holder">
                            <div className="add-class-box"></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer right-align">
                        <a href="#!" className="modal-trigger link-block">Add Class</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex-content large sameheight">
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h2>Account Status</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="row mb-0">
                        <div className="input-field account-status_input col s12 focus-blue">
                          <input type="text" id="code" value="792AF70E-DC1C-1448-FCCB5DA2C5890364" readOnly="" />
                          <label className="label active" htmlFor="code">License Code</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field account-status_input col s12 focus-blue">
                          <input type="text" id="status" value="Activated" readOnly="" />
                          <label className="label active" htmlFor="status">Status</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field account-status_input col s12 focus-blue">
                          <input type="text" id="activation-date" value="6/16/2017" readOnly="" />
                          <label className="label active" htmlFor="activation-date">Activation Date</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field account-status_input col s12 focus-blue">
                          <input type="text" id="expiration-date" value="6/16/2017" readOnly="" />
                          <label className="label active" htmlFor="expiration-date">Expiration Date</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h2>Account Type</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="account-type-block">
                        <div className="account-type-block_holder">
                          <div className="head-box">
                            <h3><span>License Type</span> Class Member</h3>
                          </div>
                          <div className="picture-holder">
                            <img src="images/img-01.png" alt="image description" />
                          </div>
                          <p>This license type allows the student to participate in a course with 4 or more other students. The coursework may be customized for the class as a whole, but not for individual students within the class.</p>
                          <p>To conduct a course for an individual student in a one-on-one format (tutoring), you need a “one-on-one” license type.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 one-large-col d-flex-content">
              <div className="col s12">
                <div className="card-block">
                  <h2>Course Context</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="course-context_two-col">
                        <div className="column">
                          <div className="row mb-0">
                            <div className="col s12">
                              <div className="input-field focus-blue">
                                <select id="first_date">
                                  <option>First Assignment Date (default)</option>
                                  <option>Option</option>
                                  <option>Option</option>
                                </select>
                                <label htmlFor="first_date">Course Start Date</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s4">
                              <div className="datepicker-field input-field">
                                <i className="icon-calendar-dark"></i>
                                <input type="text" className="datepicker" value="10/01/2018" />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s12">
                              <div className="input-field focus-blue">
                                <select id="last_date">
                                  <option>Target Test Date (default)</option>
                                  <option>Option</option>
                                  <option>Option</option>
                                </select>
                                <label htmlFor="last_date">Course End Date</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s4">
                              <div className="datepicker-field input-field">
                                <i className="icon-calendar-dark"></i>
                                <input type="text" className="datepicker" value="01/26/2019" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column">
                          <div className="row">
                            <div className="col s12 m6 l8">
                              <div className="input-field focus-blue">
                                <select id="date">
                                  <option>October 6, 2018</option>
                                  <option>Option</option>
                                  <option>Option</option>
                                </select>
                                <label htmlFor="date">Target Test Date*</label>
                                <span className="note">*Optional</span>
                              </div>
                            </div>
                            <div className="col s12 m6 l4">
                              <div className="input-field focus-blue">
                                <input type="text" id="score" />
                                <label className="label" htmlFor="score">Target Score*</label>
                                <span className="note">*Optional</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col s12">
                              <div className="input-field focus-blue">
                                <input type="text" id="school" />
                                <label className="label" htmlFor="school">Hight School*</label>
                                <span className="note">*Optional</span>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s12">
                              <div className="input-field focus-blue">
                                <input type="text" id="year" />
                                <label className="label" htmlFor="year">Graduation Year*</label>
                                <span className="note">*Optional</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 one-large-col d-flex-content">
              <div className="col s12">
                <div className="card-block">
                  <h2>Account Settings</h2>
                  <div className="card">
                    <div className="card-content">
                      <div className="course-context_two-col">
                        <div className="column">
                          <div className="checkbox-block">
                            <div className="checkbox-holder">
                              <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="large-label">Allow Student Login Prior to Activation</span>
                              </label>
                              <span className="note">To enter initial practice test answers</span>
                            </div>
                            <p>{"By default, a student may not log in until you activate the student's account. If, prior to signing up for the course, this student needs to enter his or her own answers for an initial practice test, choose this option to allow the student access. When the student completes the test, we will not reveal the score or score report, which will retain your opportunity to setup a consultation with student/parent to review the results."}</p>
                          </div>
                          <div className="checkbox-block">
                            <div className="checkbox-holder">
                              <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="large-label">Unstructured Course Mode</span>
                              </label>
                              <span className="note">Oﬀ by default</span>
                            </div>
                            <p>{"With this option selected, the student can access any lesson at any time, whether or not you've explicitly assigned it. If a student begins a lesson that you have not yet assigned, the lesson will appear on the student's planner for the day that the student begins the lesson, and no due date will be assigned."}</p>
                          </div>
                          <div className="checkbox-block">
                            <div className="row mb-0">
                              <div className="col s12 l8">
                                <div className="input-field focus-blue">
                                  <select id="duration">
                                    <option>Use organization default</option>
                                    <option>Option</option>
                                    <option>Option</option>
                                  </select>
                                  <label htmlFor="duration">Default Session Duration</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column">
                          <div className="checkbox-block">
                            <div className="checkbox-holder">
                              <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="large-label">Require Students to Watch Video Solutions</span>
                              </label>
                              <span className="note">Not recommended</span>
                            </div>
                            <p>With this option is selected, the student must watch video solutions for each of the problems that he or she misses or skips before the lesson or quiz is marked complete.</p>
                          </div>
                          <div className="checkbox-block">
                            <div className="checkbox-holder">
                              <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="large-label">Prevent Login</span>
                              </label>
                            </div>
                            <p>Check this box to temporarily prevent this student from logging in. If this account has not yet been activated, selecting this option is unnecessary because an unactivated student cannot login anyway.</p>
                          </div>
                          <div className="checkbox-block">
                            <div className="checkbox-holder">
                              <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="large-label">Inactive</span>
                              </label>
                            </div>
                            <p>Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics. </p>
                          </div>
                          <div className="checkbox-block">
                            <div className="checkbox-holder">
                              <label>
                                <input type="checkbox" className="filled-in" />
                                <span className="large-label">Exclude from Statistics</span>
                              </label>
                            </div>
                            <p>Use this option to exclude this student’s data from all instructor and global statistics.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-block">
              <h2>Actions</h2>
              <div className="row mb-0 d-flex-content large sameheight">
                <div className="col s12 l5">
                  {/* <!-- form-panel --> */}
                  <div className="card">
                    <div className="card-content">
                      <div className="account-block">
                        <h3>Welcome Email</h3>
                        <p>Use this feature to send (or resend) a welcome email to the student. The welcome email contains login instruction and a temporary password that the student can use to login for the ﬁrst time. Keep in mind that sending this email will automatically set a new, randomly generated password which may be confusing to the student if he or she has already received a welcome email or has already set a permanent password.</p>
                        <p>
                          <button className="btn waves-effect waves-light bg-blue" type="submit" name="action">(Re)send Welcome Email</button>
                        </p>
                        <label>
                          <input type="checkbox" className="filled-in" checked />
                          <span className="large-label">cc me at:  this_is_me@gmail.com</span>
                        </label>
                      </div>
                      <div className="account-block">
                        <h3>Password Reset Email</h3>
                        <p>{"The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid.."}</p>
                        <p>
                          <button className="btn waves-effect waves-light bg-blue" type="submit" name="action">Send Password Reset Email</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l5">
                  {/* <!-- form-panel --> */}
                  <div className="card">
                    <div className="card-content">
                      <div className="account-block">
                        <h3>Reset Password</h3>
                        <p>{"The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid."}</p>
                        <div className="row mb-0">
                          <div className="input-field col s12 focus-blue">
                            <input type="password" id="password" value="****************" />
                            <label className="label" htmlFor="password">Password</label>
                            <span className="note">6 to 20 characters</span>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="input-field col s12 focus-blue">
                            <input type="password" id="password-confirm" value="****************" />
                            <label className="label" htmlFor="password-confirm">Conﬁrm Password</label>
                          </div>
                        </div>
                        <p>
                          <label>
                            <input type="checkbox" className="filled-in" checked />
                            <span className="large-label">Require user to change</span>
                          </label>
                        </p>
                        <p>
                          <button className="btn waves-effect waves-light bg-blue" type="submit" name="action">Set Password</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex-content large sameheight">
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <div className="card">
                    <div className="card-content">
                      <div className="account-block">
                        <h3>Delete Account</h3>
                        <p>{"This option will only be available until the student account is activated.  Once activated, if you need to delete a student's account, please contact your system administrator."}</p>
                        <p>
                          <button className="btn waves-effect waves-light bg-blue disabled" type="submit" name="action">Delete Account</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn">Save</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountPage;
