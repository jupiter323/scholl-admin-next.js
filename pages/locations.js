import React, { Component } from 'react';

import DetailAccountPage from '../components/Location/components/LocationNavBar';

// eslint-disable-next-line react/prefer-stateless-function
class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'account',
    };
  }

  onSetActivePage = (active) => this.setState({ active })

  // renderCurrentPage = () => {
  //   const { active } = this.state;
  //   if (active === 'summary') {
  //     return <DetailSummaryPage user={sampleUser} />;
  //   }
  //   if (active === 'account') {
  //     return <DetailAccountPage user={sampleUser} />;
  //   }
  //   return null;
  // }

  render() {
    const { active } = this.state;
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
              <DetailAccountPage active={active} onSetActivePage={this.onSetActivePage} />
              <div className="content-section">
                <div className="content-section-holder">
                  <form action="#" className="custom-form">
                    <fieldset>
                      <div className="row mb-0 d-flex-content large">
                        <div className="col s12 l5">
                          <div className="card-block">
                            <h3>Owner</h3>
                            <div className="owner-box card-panel" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                              <div className="card-panel-row row">
                                <div className="col s10">
                                  <div className="user-block">
                                    <div className="user-circle" style={{ backgroundColor: '#9c27b0', color: '#fff' }}>
                                      <img src="images/img-owner01.jpg" alt="" />
                                    </div>
                                    <div className="user-text" style={{ color: '#fff' }}>
                                      <h4 className="h3">Ownerly, Jennifer</h4>
                                      <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col s2 right-align">
                                  <span className="block-icon">
                                    <i className="icon-owner"></i>
                                    <span className="text-icon">Owner</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Location Email Settings</h3>
                            <div className="card-main card">
                              <div className="card-content">
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="auto_email_edit" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
                                    <label className="label" htmlFor="auto_email_edit">Automated Emails Come From (email)*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <textarea id="email_salutation_edit" className="materialize-textarea">All the best,The Clear Choice Team</textarea>
                                    <label className="label" htmlFor="email_salutation_edit">Automated Email Salutation*</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 l5">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Location Contact Info</h3>
                            <div className="card-main card">
                              <div className="card-content">
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_name_edit" value="Study Hut" />
                                    <label className="label" htmlFor="location_name_edit">Location Name*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_nickname_edit" value="Study Hut - Redondo Beach, CA" />
                                    <label className="label" htmlFor="location_nickname_edit">Location Nickname*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="text" id="location_email_edit" value="info@clearchoiceprep.com" />
                                    <label className="label" htmlFor="location_email_edit">Location Email*</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="tel" id="location_phone_edit" />
                                    <label className="label" htmlFor="location_phone_edit">Location Phone Number (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="url" id="website_edit" value="http://www.clearchoiceprep.com" />
                                    <label className="label active" htmlFor="website_edit">Website (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="tel" id="street_address_edit" />
                                    <label className="label" htmlFor="street_address_edit">Street Address (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12">
                                    <input type="tel" id="city_edit" />
                                    <label className="label" htmlFor="city_edit">City (optional)</label>
                                  </div>
                                </div>
                                <div className="row mb-0">
                                  <div className="input-field col s12 m6 l5">
                                    <select id="state_edit">
                                      <option>State (optional)</option>
                                      <option>State</option>
                                      <option>State</option>
                                    </select>
                                    <label className="label" htmlFor="state_edit">Test</label>
                                  </div>
                                  <div className="input-field col s12 m6 l7">
                                    <input type="tel" id="zip_edit" />
                                    <label className="label" htmlFor="zip_edit">Zip (optional)</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn-holder align-right-sm">
                        <a href="#" className="btn">Save</a>
                      </div>
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
              <div className="card-modal card-main card">
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
                              <div className="card-main card-location card card-large">
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
                              <div className="card-main card-location card card-large">
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
                              <div className="card-main card-location card card-large">
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
      </body>
    );
  }
}

export default Instructors;
