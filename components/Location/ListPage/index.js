import React from 'react';
// import PropTypes from 'prop-types';

class LocationDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  render() {
    return (
      <body className="instructor-page">
        <div className="wrapper">
          <aside id="slide-out" className="sidenav">
            <div className="sidenav-holder">
              <h1 className="white-text"><img src="images/instructor-logo.png" alt="" /></h1>
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
                <div className="img-block"><img src="images/img-user.jpg" className="circle" alt="" /></div>
              </a>
            </div>
          </aside>
          <main id="main" role="main">
            <div className="main-holder grey lighten-5">
              <div className="title-row card-panel">
                <div className="mobile-header">
                  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
                <h2 className="h1 white-text">
                  <span className="heading-holder">
                    <i className="icon-location"></i>
                    <span className="heading-block">Locations</span>
                  </span>
                </h2>
              </div>
              <div className="content-section">
                <div className="row d-flex-content">
                  {/* <!-- card User small --> */}
                  <div className="card-main-col col s12 m8 l7 xl5">
                    <div className="card-main card-location card card-large">
                      <div className="card-panel" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                        <div className="card-panel-row row">
                          <div className="col s10">
                            <div className="user-block">
                              <div className="user-text" style={{ color: '#fff' }}>
                                <h4 className="h3">Study Hut - Redondo Beach, CA</h4>
                                <span className="sub-title">Study Hut</span>
                              </div>
                            </div>
                          </div>
                          <div className="col s2 right-align">
                            <div className="row icons-row">
                              <div className="col right-align">
                                <span className="block-icon">
                                  <i className="icon-location"></i>
                                  <span className="text-icon">Location</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="row d-flex align-items-center mb-0">
                          <div className="col s12 m5">
                            <div className="chart-container">
                              <div className="chart-holder">
                                <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 71}' data-duration="1">
                                  {/* <!-- do not change path attribute "d" !!! --> */}
                                  <svg width="110px" height="110px" viewBox=" 0 0 110 110">
                                    <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                    <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#62b771' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                                  </svg>
                                </span>
                                <span className="chart-value" style={{ backgroundColor: '#62b771' }}><span data-count-up data-start-val="0" data-end-val="91" data-duration="1"></span>%</span>
                              </div>
                              <div className="chart-description" style={{ color: '#31837a' }}>Students Who Achieved Target Score</div>
                            </div>
                          </div>
                          <div className="col s12 m7">
                            <ul className="points-list">
                              <li className="style-red-darken">
                                <span className="badge-circle">14</span>
                                <span className="point-text">active students</span>
                              </li>
                              <li className="style-pink-darken">
                                <span className="badge-circle">27</span>
                                <span className="point-text">past students</span>
                              </li>
                              <li>
                                <span className="badge-circle">29</span>
                                <span className="point-text">unactivated students</span>
                              </li>
                              <li className="style-blue-light">
                                <span className="badge-circle">+185</span>
                                <span className="point-text">average improvement</span>
                              </li>
                              <li className="style-blue">
                                <span className="badge-circle">1037</span>
                                <span className="point-text">average initial score</span>
                              </li>
                              <li className="style-blue-dark">
                                <span className="badge-circle">1218</span>
                                <span className="point-text">average final score</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Location</a>
          </main>
        </div>
        {/* <!-- Modal structure CREATE --> */}
        <div id="modal_user_create" className="modal modal-custom modal-custom-large modal-gray">
          <div className="card-modal card-main card grey lighten-3">
            <div className="card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
              <div className="card-panel-row row">
                <div className="col">
                  <h3 className="h2">
                    <span className="heading-holder">
                      <span className="heading-block">Create New Owner</span>
                    </span>
                  </h3>
                </div>
                <div className="col">
                  <span className="block-icon">
                    <i className="icon-owner"></i>
                    <span className="text-icon">Owner</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-body">
                <div className="row mb-0">
                  <div className="col s12 l6">
                    {/* <!-- form-panel --> */}
                    <div className="card-block">
                      <h3>Owner Contact Info</h3>
                      <div className="card-main card">
                        <div className="card-content">
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="first_name_create" />
                              <label className="label" htmlFor="first_name_create">First Name*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="last_name_create" />
                              <label className="label" htmlFor="last_name_create">Last Name*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="contact_email_create" />
                              <label className="label" htmlFor="contact_email_create">Email Address*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12 l7">
                              <select id="state_edit">
                                <option>Other</option>
                                <option>Other</option>
                                <option>Other</option>
                              </select>
                              <label className="label" htmlFor="state_edit">Gender*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="tel" id="contact_phone_create" />
                              <label className="label" htmlFor="contact_phone_create">Phone (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="contact_address_create" />
                              <label className="label" htmlFor="contact_address_create">Street Address (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="contact_city_create" />
                              <label className="label" htmlFor="contact_city_create">City (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s12 m6 l5">
                              <div className="input-field">
                                <select id="contact_state_create">
                                  <option>State (optional)</option>
                                  <option>State</option>
                                  <option>State</option>
                                </select>
                                <label className="label" htmlFor="contact_state_create">Test</label>
                              </div>
                            </div>
                            <div className="col s12 m6 l7">
                              <div className="input-field">
                                <input type="tel" id="zip_create" />
                                <label className="label" htmlFor="zip_create">Zip (optional)</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 l6">
                    {/* <!-- form-panel --> */}
                    <div className="card-block">
                      <h3>Location Contact Info</h3>
                      <div className="card-main card">
                        <div className="card-content">
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="location_name_create" value="Tutor Doctor" />
                              <label className="label" htmlFor="location_name_create">Location Name*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="location_nickname_create" value="Tutor Doctor - Newport Beach, CA" />
                              <label className="label" htmlFor="location_nickname_create">Location Nickname*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="location_email_create" value="info@clearchoiceprep.com" />
                              <label className="label" htmlFor="location_email_create">Location Email*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="tel" id="location_phone_create" />
                              <label className="label" htmlFor="location_phone_create">Location Phone Number (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="url" id="location_website_create" />
                              <label className="label" htmlFor="location_website_create">Website (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="location_address_create" />
                              <label className="label" htmlFor="location_address_create">Street Address (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="location_city_create" />
                              <label className="label" htmlFor="location_city_create">City (optional)</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="col s12 m6 l5">
                              <div className="input-field">
                                <select id="location_state_create">
                                  <option>State (optional)</option>
                                  <option>State</option>
                                  <option>State</option>
                                </select>
                                <label className="label" htmlFor="location_state_create">Test</label>
                              </div>
                            </div>
                            <div className="col s12 m6 l7">
                              <div className="input-field">
                                <input type="tel" id="location_zip_create" />
                                <label className="label" htmlFor="location_zip_create">Zip (optional)</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12 l6">
                    {/* <!-- form-panel --> */}
                    <div className="card-block">
                      <h3>Location Email Settings</h3>
                      <div className="card-main card">
                        <div className="card-content">
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="auto_email_create" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
                              <label className="label" htmlFor="auto_email_create">Automated Emails Come From (email)*</label>
                            </div>
                          </div>
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <textarea id="email_salutation_create" className="materialize-textarea">All the best,The Clear Choice Team</textarea>
                              <label className="label" htmlFor="email_salutation_create">Automated Email Salutation*</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 l6">
                    {/* <!-- form-panel --> */}
                    <div className="card-block">
                      <h3>Location Branding</h3>
                      <div className="card-main card">
                        <div className="card-content">
                          <div className="row mb-0">
                            <div className="input-field col s12">
                              <input type="text" id="location_url_create" value="newport-beach.tutordoctor.mysatcourse.com" />
                              <label className="label" htmlFor="location_url_create">Location Url*</label>
                            </div>
                          </div>
                          {/* <!-- colorpicker row --> */}
                          <div className="row mb-0">
                            <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                              <input type="text" className="js-spectrum-input" value="#123456" id="header_color_1_create" readOnly />
                              <label className="label" htmlFor="header_color_1_create">Header Color 1*</label>
                            </div>
                            <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                              <input type="text" className="js-spectrum-input" value="#123456" id="header_color_2_create" readOnly />
                              <label className="label" htmlFor="header_color_2_create">Header Color 2*</label>
                            </div>
                          </div>
                          {/* <!-- colorpicker row --> */}
                          <div className="row mb-0">
                            <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                              <input type="text" className="js-spectrum-input" value="#123456" id="header_logo_bgcolor_create" readOnly />
                              <label className="label" htmlFor="header_logo_bgcolor_create">Header Logo Background Color*</label>
                            </div>
                            <div className="input-field col s12 m6">
                              <input type="text" value="100%" id="header_logo_bg_alpha_create" />
                              <label className="label" htmlFor="header_logo_bg_alpha_create">Header Logo Background Alpha*</label>
                            </div>
                          </div>
                          {/* <!-- upload file row --> */}
                          <div className="row mb-0">
                            <div className="file-input-custom file-field input-field col s12">
                              <div className="file-path-wrapper">
                                <input className="file-path" type="text" value="horiz_logo.png" id="horizontal_logo_create" />
                                <label className="label" htmlFor="horizontal_logo_create">Horizontal Logo Variation*</label>
                              </div>
                              <span className="btn-upload">
                                <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                <input type="file" />
                              </span>
                            </div>
                          </div>
                          {/* <!-- upload file row --> */}
                          <div className="row mb-0">
                            <div className="file-input-custom file-field input-field col s12">
                              <div className="file-path-wrapper">
                                <input className="file-path" type="text" value="square_logo.jpg" id="square_logo_create" />
                                <label className="label" htmlFor="square_logo_create">Square Logo Variation*</label>
                              </div>
                              <span className="btn-upload">
                                <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                <input type="file" />
                              </span>
                            </div>
                          </div>
                          {/* <!-- upload file row --> */}
                          <div className="row mb-0">
                            <div className="file-input-custom file-field input-field col s12">
                              <div className="file-path-wrapper">
                                <input className="file-path" type="text" value="background.jpg" id="background_image_create" />
                                <label className="label" htmlFor="background_image_create">Background Image*</label>
                              </div>
                              <span className="btn-upload">
                                <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                <input type="file" />
                              </span>
                            </div>
                          </div>
                          {/* <!-- twocolumns row background here --> */}
                          <div className="row mb-0">
                            <div className="col s12 m6">
                              <div className="input-field">
                                <input type="text" value="24" id="background_blur_create" />
                                <label className="label" htmlFor="background_blur_create">Background Blur*</label>
                              </div>
                            </div>
                            <div className="col s12 m6">
                              <div className="input-field">
                                <input type="text" value="70%" id="background_overlay_alpha_create" />
                                <label className="label" htmlFor="background_blur_create">Background Overlay Alpha*</label>
                              </div>
                            </div>
                          </div>
                          {/* <!-- upload file row --> */}
                          <div className="row mb-0">
                            <div className="file-input-custom file-field input-field col s12">
                              <div className="file-path-wrapper">
                                <input className="file-path" type="text" value="student_welcome_video.mp4" id="student_video_create" />
                                <label className="label" htmlFor="student_video_create">Student Welcome Video (optional)</label>
                              </div>
                              <span className="btn-upload">
                                <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                <input type="file" />
                              </span>
                            </div>
                          </div>
                          {/* <!-- upload file row --> */}
                          <div className="row mb-0">
                            <div className="file-input-custom file-field input-field col s12">
                              <div className="file-path-wrapper">
                                <input className="file-path" type="text" id="instructor_video_create" />
                                <label className="label" htmlFor="instructor_video_create">Instructor Welcome Video (optional)</label>
                              </div>
                              <span className="btn-upload">
                                <span className="holder-icon"><i className="icon-upload-file"></i></span>
                                <input type="file" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                <a href="#" className="btn">Save</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default LocationDetailPage;
