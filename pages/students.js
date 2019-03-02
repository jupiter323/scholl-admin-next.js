/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Students extends Component {
  render() {
    return (
      <body className="instructor-page">
        <div className="wrapper">
          <aside id="slide-out" className="sidenav">
            <div className="sidenav-holder">
              <h1 className="white-text"><img src="images/instructor-logo.png" alt="image description" /></h1>
              <ul>
                <li className="active"><a href="#"><i className="icon-speed"></i> Dashboard</a></li>
                <li><a href="#"><i className="icon-student"></i> Students</a></li>
                <li><a href="#"><i className="icon-instructors"></i> Instructors</a></li>
                <li><a href="#"><i className="icon-location"></i> Locations</a></li>
                <li><a href="#"><i className="icon-help"></i> Help</a></li>
              </ul>
              <a href="#" className="log-block white-text">
                <div className="text">
                  <div className="block">Log Out</div>
                  <div className="block">Joe Smith</div>
                </div>
                <div className="img-block"><img src="images/img-user.jpg" className="circle" alt="image description" /></div>
              </a>
            </div>
          </aside>
          <main id="main" role="main">
            <div className="main-holder grey lighten-5">
              <div className="title-row card-panel">
                <div className="mobile-header">
                  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
                <nav className="breadcrumb-holder">
                  <div className="nav-wrapper ">
                    <a href="#!" className="breadcrumb">&lt;  Students</a>
                  </div>
                </nav>
                <h2 className="h1 white-text">
                  <span className="heading-holder">
                    <i className="icon-student"></i>
                    <span className="heading-block">Arnold Studently</span>
                  </span>
                </h2>
                {/* <!-- navigation additional --> */}
                <nav className="nav-additional">
                  <ul className="menu-additional">
                    <li><a className="active" href="#">Summary</a></li>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Lessons</a></li>
                    <li><a href="#">Tests</a></li>
                    <li><a href="#">Account</a></li>
                  </ul>
                </nav>
                <div className="activate-block">
                  <a href="#" className="waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"><b className="btn-text visible-lg">Account Activated</b> <i className="icon-unlock"></i></a>
                  <a href="#" className="waves-effect btn btn-orange btn-account_inactive dropdown-trigger" data-target="dropdown_activate"><b className="btn-text visible-lg">Activate Account</b> <i className="icon-key"></i></a>
                  {/* <!-- Dropdown Activate Structure --> */}
                  <div id="dropdown_activate" className="dropdown-content">
                    <div className="card-panel">
                      <div className="title-block">
                        <div className="h3">Ready to begin your course?</div>
                        <div className="subtitle">Please enter a valid license code below.</div>
                      </div>
                      <form action="#" className="activate-form">
                        <fieldset>
                          <div className="input-field">
                            <input type="text" value="4BF86266-A2A4-C9FB-387D07ABB5471305" id="license_code" />
                            <label className="label" htmlFor="license_code">License Code</label>
                          </div>
                          <div className="btn-holder center-align">
                            <button className="btn btn-blue" type="submit">Activate </button>
                          </div>
                        </fieldset>
                      </form>
                      <div className="text-block center-align">
                        <p>If you need license codes, you can get them here: <a href="#" className="waves-effect waves-light btn-small btn-blue">Purchase Licenses</a></p>
                      </div>
                      <div className="text-block">
                        <p>*Note: </p>
                        <p>We oﬀer discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-section">
                <div className="content-section-holder">
                  <form action="#" className="custom-form">
                    <fieldset>
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
                                  <a href="#modal_Location1" className="modal-trigger link-block">Add Location</a>
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
                                  <a href="#modal_Instructor1" className="modal-trigger link-block">Add Instructor</a>
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
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* <!-- Modal structure add location --> */}
        <div id="modal_Location1" className="modal modal-custom modal-location">
          <form action="#" className="custom-form">
            <fieldset>
              <div className="card-modal card">
                <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: '#00456b', color: '#fff' }}>
                  <div className="card-panel-row row">
                    <div className="col">
                      <h3>Select Locations(s)</h3>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <span className="hint">Click to select or deselect.</span>
                    <div className="box-scrollable">
                      <div className="height-40 jcf-scrollable">
                        <div className="card-location-holder">
                          <ul className="checkbox-list">
                            <li>
                              <input type="checkbox" />
                              <div className="card-location card card-large">
                                <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
                                  <div className="card-panel-row row">
                                    <div className="col s10">
                                      <h3 className="h4 truncate">Tutor Doctor - Manhattan Beach, CA</h3>
                                      <h4 className="sub-title">Tutor Doctor</h4>
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-location card card-large">
                                <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
                                  <div className="card-panel-row row">
                                    <div className="col s10">
                                      <h3 className="h4 truncate">Tutor Doctor - Manhattan Beach, CA</h3>
                                      <h4 className="sub-title">Tutor Doctor</h4>
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-location card card-large">
                                <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
                                  <div className="card-panel-row row">
                                    <div className="col s10">
                                      <h3 className="h4 truncate">Tutor Doctor - Location Two</h3>
                                      <h4 className="sub-title">Tutor Doctor</h4>
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
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                    <a href="#" className="btn">Add</a>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        {/* <!-- Modal structure add instructor --> */}
        <div id="modal_Instructor1" className="modal modal-custom modal-location">
          <form action="#" className="custom-form">
            <fieldset>
              <div className="card-modal card">
                <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: '#00456b', color: '#fff' }}>
                  <div className="card-panel-row row">
                    <div className="col">
                      <h3>Select Instructor(s)</h3>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <span className="hint">Click to select or deselect.</span>
                    <div className="row-holder">
                      <div className="search-field input-field">
                        <input type="search" id="name_search" className="input-control  validate" placeholder="Smith" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="name_search">Search</label>
                      </div>
                      <div className="input-field">
                        <select id="location_search">
                          <option>Any</option>
                          <option>option</option>
                          <option>option</option>
                        </select>
                        <label className="label" htmlFor="location_search">Location</label>
                      </div>
                    </div>
                    <div className="box-scrollable">
                      <div className="height-40 jcf-scrollable">
                        <div className="card-location-holder">
                          <ul className="checkbox-list">
                            <li>
                              <input type="checkbox" />
                              <div className="card-location card">
                                <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-location card">
                                <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-location card">
                                <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
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
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                    <a href="#" className="btn">Add</a>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </body>
    );
  }
}

export default Students;
