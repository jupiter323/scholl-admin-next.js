import React, { Component } from 'react';

import InstructorNavBar from '../components/Instructor/components/InstructorNavBar';
import DetailManagementPage from '../components/Instructor/DetailManagementPage';

import sampleUser from '../components/Instructor/utils/sampleUser';

// eslint-disable-next-line react/prefer-stateless-function
class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'summary',
    };
  }
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
            <div className="main-holder grey lighten-3">
              <InstructorNavBar active={active} />
              <DetailManagementPage user={sampleUser} />
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
                              <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
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
              <div className="card-modal card-main card">
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
                              <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                <span className="check-link icon-check"></span>
                                <div className="card-panel-row row">
                                  <div className="col s10">
                                    <div className="user-block">
                                      <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                        <img src="images/img-owner01.jpg" alt="" />
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                <span className="check-link icon-check"></span>
                                <div className="card-panel-row row">
                                  <div className="col s10">
                                    <div className="user-block">
                                      <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                        <img src="images/img-owner01.jpg" alt="" />
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
                            </li>
                            <li>
                              <input type="checkbox" />
                              <div className="card-main card-location card">
                                <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                  <span className="check-link icon-check"></span>
                                  <div className="card-panel-row row">
                                    <div className="col s10">
                                      <div className="user-block">
                                        <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                          <img src="images/img-owner01.jpg" alt="" />
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

export default Locations;
