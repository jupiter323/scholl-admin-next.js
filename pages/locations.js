import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Locations extends Component {
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
            <div className="main-holder grey lighten-3">
              <div className="title-row card-panel">
                <div className="mobile-header">
                  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
                <nav className="breadcrumb-holder">
                  <div className="nav-wrapper ">
                    <a href="#!" className="breadcrumb">&lt;  Instructors</a>
                  </div>
                </nav>
                <h2 className="h1 white-text">
                  <span className="heading-holder">
                    <i className="icon-instructors"></i>
                    <span className="heading-block">George Tutorly</span>
                  </span>
                </h2>
                {/* <!-- navigation additional --> */}
                <nav className="nav-additional">
                  <ul className="menu-additional">
                    <li><a className="active" href="#">Summary</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Management Settings</a></li>
                  </ul>
                </nav>
              </div>
              <div className="content-section">
                <div className="content-section-holder">
                  <form action="#" className="custom-form">
                    <fieldset>
                      <div className="row mb-0 d-flex-content large">
                        <div className="col s12 l5">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Locations to Manage</h3>
                            {/* <!-- card --> */}
                            <div className="card-main card card-instructor">
                              <div className="card-content">
                                <div className="text-block">
                                  <p>If this user manages one or more locations/branches, add them below. This user will be able to view and edit the accounts for all instructors and students at selected locations. </p>
                                </div>
                                <div className="box-scrollable">
                                  <div className="height-360 jcf-scrollable">
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
                        </div>
                        <div className="col s12 l5">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Instructors to Manage</h3>
                            {/* <!-- card --> */}
                            <div className="card-main card card-instructor">
                              <div className="card-content">
                                <div className="text-block">
                                  <p>Add each instructor that you’d like to allow this user to manage. For each instructor you add, this user will be able to view and edit the selected instructor’s account, as well as the accounts of each of the instructor’s students.</p>
                                </div>
                                <div className="box-scrollable">
                                  <div className="height-360 jcf-scrollable">
                                    <div className="card-location-holder">
                                      <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <a href="#" className="close-link icon-close-thin"></a>
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
                                      <div className="owner-box card-panel  card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <a href="#" className="close-link icon-close-thin"></a>
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
                                      <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <a href="#" className="close-link icon-close-thin"></a>
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
                                      <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <a href="#" className="close-link icon-close-thin"></a>
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
                                      <div className="owner-box card-panel  card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <a href="#" className="close-link icon-close-thin"></a>
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
                                      <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <a href="#" className="close-link icon-close-thin"></a>
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
                                  </div>
                                </div>
                                <div className="card-footer right-align">
                                  <a href="#modal_Instructor1" className="modal-trigger link-block">Add Instructor</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 l5">
                          {/* <!-- form-panel --> */}
                          <div className="card-block">
                            <h3>Full Access (be careful!)</h3>
                            <div className="card-main card card-instructor">
                              <div className="card-content">
                                <div className="row mb-0">
                                  <div className="col s12">
                                    <div className="large">
                                      <p>{`To give this instructor full access to all students and instructors, select “Full Access." Caution: this option will give this user access to your whole organization.`}</p>
                                      <label>
                                        <input type="checkbox" className="filled-in" />
                                        <span className="large-label">Full Access</span>
                                      </label>
                                    </div>
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
