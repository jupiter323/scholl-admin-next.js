import React from 'react';
// import PropTpes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class DetailAccountPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h3>User Info</h3>
                  <div className="card-main card card-instructor">
                    <div className="card-content">
                      <div className="row mb-0">
                        <div className="input-field col s12">
                          <input type="text" id="first_name_edit" value="John" />
                          <label className="label" htmlFor="first_name_edit">First Name*</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12">
                          <input type="text" id="last_name_edit" value="Smith" />
                          <label className="label" htmlFor="last_name_edit">Last Name*</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12">
                          <input type="text" id="account_email_edit" value="john.smith@clearchoiceprep.com" />
                          <label className="label" htmlFor="account_email_edit">Email Address*</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="">
                          <div className="input-field col s6 l7">
                            <select id="gender_edit">
                              <option>Other</option>
                              <option>Other</option>
                              <option>Other</option>
                            </select>
                            <label className="label" htmlFor="gender_edit">Gender*</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h3>Contact Info</h3>
                  <div className="card-main card card-instructor">
                    <div className="card-content">
                      <div className="row mb-0">
                        <div className="input-field col s12">
                          <input type="tel" id="contact_phone_edit" />
                          <label className="label" htmlFor="contact_phone_edit">Phone (optional)</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12">
                          <input type="text" id="contact_address_edit" />
                          <label className="label" htmlFor="contact_address_edit">Street Address (optional)</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="input-field col s12">
                          <input type="text" id="contact_city_edit" />
                          <label className="label" htmlFor="contact_city_edit">City (optional)</label>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s6 l5">
                          <div className="input-field">
                            <select id="contact_state_edit">
                              <option>State</option>
                              <option>State</option>
                              <option>State</option>
                            </select>
                            <label className="label" htmlFor="contact_state_edit">State (optional)</label>
                          </div>
                        </div>
                        <div className="col s6 l7">
                          <div className="input-field">
                            <input type="tel" id="contact_zip_edit" />
                            <label className="label" htmlFor="contact_zip_edit">Zip (optional)</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l5">
                {/* <!-- form-panel --> */}
                <div className="card-block">
                  <h3>User’s Location</h3>
                  {/* <!-- card --> */}
                  <div className="card-main card card-instructor">
                    <div className="card-content">
                      <div className="text-block">
                        <p>Select the location/branch where this instructor works. Depending on your settings, you may have more than one location. If this instructor works at multiple locations, select all that apply.</p>
                        <p>Note: Unless you speciﬁcally grant additional access, this instructor will only be able to access his or her own students.</p>
                      </div>
                      <div className="box-scrollable">
                        <div className="height-275 jcf-scrollable">
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
            </div>
            <div className="btn-holder align-right-sm">
              <a href="#" className="btn">Save</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailAccountPage.propTypes = {

};

export default DetailAccountPage;
