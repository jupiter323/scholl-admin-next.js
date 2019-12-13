import React from "react";
import PropTypes from "prop-types";
import Portal from "../../Portal";

class ClassModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { open } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <div
              id="modal_add_new_class"
              className="modal modal-custom modal-460"
            >
              <form action="#" className="custom-form">
                <fieldset>
                  <div className="card-modal card-main card">
                    <div
                      className="card-panel card-panel-title"
                      style={{ backgroundColor: "#408e49", color: "#fff" }}
                    >
                      <div className="card-panel-row row">
                        <div className="col">
                          <h2>
                            <span className="heading-holder">
                              <i className="icon-members" />
                              <span className="heading-block"> New Class</span>
                            </span>
                          </h2>
                        </div>
                        <div className="col right-align">
                          <a href="#!" className="panel-link close modal-close">
                            <i className="icon-close-thin" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        {/* form panel */}
                        <div className="card-block">
                          <h3>Class Information</h3>
                          <div className="card-main card">
                            <div className="card-content">
                              <div className="row mb-0">
                                <div className="input-field col s12">
                                  <input
                                    type="text"
                                    id="class_name"
                                    defaultValue="March 2018 Class"
                                  />
                                  <label className="label" htmlFor="class_name">
                                    Class Name
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-block">
                          <h3>Account Settings</h3>
                          <div className="card-main card">
                            <div className="card-content">
                              <div className="row">
                                <div className="col s6">
                                  <div className="datepicker-field input-field">
                                    <i className="icon-calendar" />
                                    <input
                                      type="text"
                                      className="datepicker"
                                      id="course_start_date"
                                    />
                                    <label
                                      className="label"
                                      htmlFor="course_start_date"
                                    >
                                      Course Start Date
                                    </label>
                                  </div>
                                </div>
                                <div className="col s6">
                                  <div className="datepicker-field input-field">
                                    <i className="icon-calendar" />
                                    <input
                                      type="text"
                                      className="datepicker"
                                      defaultValue="6/1/18"
                                      id="course_end_date"
                                    />
                                    <label
                                      className="label"
                                      htmlFor="course_end_date"
                                    >
                                      Course End Date
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col s12">
                                  <div className="check-holder">
                                    <p>
                                      <label>
                                        <input
                                          type="checkbox"
                                          className="filled-in"
                                        />
                                        <span>Inactive</span>
                                      </label>
                                    </p>
                                    <span className="card-note">
                                      Select this option when you no longer want
                                      this student to appear on your list of
                                      current students. All student data is
                                      retained and, by default, included in
                                      instructor and global statistics.
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col s12">
                                  <div className="input-field">
                                    <select id="default_session_duration">
                                      <option>Use organization default</option>
                                      <option>Use organization default</option>
                                      <option>Use organization default</option>
                                    </select>
                                    <label
                                      className="label"
                                      htmlFor="default_session_duration"
                                    >
                                      Default Session Duration
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <p>
                                <label className="label-wrap">
                                  <input
                                    type="checkbox"
                                    className="filled-in"
                                  />
                                  <span>
                                    Exclude Class from Performance Statistics
                                  </span>
                                </label>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* form panel */}
                        <div className="card-block">
                          <h3>Class Location</h3>
                          {/* card */}
                          <div className="card-main card card-instructor">
                            <div className="card-content">
                              <div className="text-block">
                                <p>
                                  Select the location/branch where this class
                                  will be located.
                                </p>
                              </div>
                              <div className="box-scrollable">
                                <div className="height-360 jcf-scrollable">
                                  <div className="card-location-holder">
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#62b771",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <h3 className="h4 truncate">
                                            Location Nickname
                                          </h3>
                                          <h4 className="sub-title">
                                            Location Name
                                          </h4>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-location" />
                                            <span className="text-icon">
                                              Location
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer right-align">
                                <a
                                  href="#modal_Location1"
                                  className="modal-trigger link-block"
                                >
                                  Add Location
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* fprm panel */}
                        <div className="card-block">
                          <h3>Instructor(s)</h3>
                          {/* card */}
                          <div className="card-main card card-instructor">
                            <div className="card-content">
                              <div className="text-block">
                                <p>
                                  Add one or more instructors to the list below.
                                  Each instructor can manage the coursework.
                                </p>
                              </div>
                              <div className="box-scrollable">
                                <div className="height-360 jcf-scrollable">
                                  <div className="card-location-holder">
                                    <div
                                      className="owner-box card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#31837a",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <div className="user-block">
                                            <div
                                              className="user-circle"
                                              style={{
                                                backgroundColor: "#0085ce",
                                                color: "#fff"
                                              }}
                                            >
                                              <img
                                                src="./static/images/img-owner01.jpg"
                                                alt="image description"
                                              />
                                            </div>
                                            <div
                                              className="user-text"
                                              style={{ color: "#fff" }}
                                            >
                                              <h4 className="h3">
                                                Smith, John
                                              </h4>
                                              <a href="mailto:jen.ownerly@gmail.com">
                                                jen.ownerly@gmail.com
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-user" />
                                            <span className="text-icon">
                                              Instructor
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owner-box card-panel  card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#31837a",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <div className="user-block">
                                            <div
                                              className="user-circle"
                                              style={{
                                                backgroundColor: "#0085ce",
                                                color: "#fff"
                                              }}
                                            >
                                              <img
                                                src="./static/images/img-owner01.jpg"
                                                alt="image description"
                                              />
                                            </div>
                                            <div
                                              className="user-text"
                                              style={{ color: "#fff" }}
                                            >
                                              <h4 className="h3">
                                                Smith, John
                                              </h4>
                                              <a href="mailto:jen.ownerly@gmail.com">
                                                jen.ownerly@gmail.com
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-user" />
                                            <span className="text-icon">
                                              Instructor
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owner-box card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#31837a",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <div className="user-block">
                                            <div
                                              className="user-circle"
                                              style={{
                                                backgroundColor: "#0085ce",
                                                color: "#fff"
                                              }}
                                            >
                                              <img
                                                src="./static/images/img-owner01.jpg"
                                                alt="image description"
                                              />
                                            </div>
                                            <div
                                              className="user-text"
                                              style={{ color: "#fff" }}
                                            >
                                              <h4 className="h3">
                                                Smith, John
                                              </h4>
                                              <a href="mailto:jen.ownerly@gmail.com">
                                                jen.ownerly@gmail.com
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-user" />
                                            <span className="text-icon">
                                              Instructor
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owner-box card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#31837a",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <div className="user-block">
                                            <div
                                              className="user-circle"
                                              style={{
                                                backgroundColor: "#0085ce",
                                                color: "#fff"
                                              }}
                                            >
                                              <img
                                                src="./static/images/img-owner01.jpg"
                                                alt="image description"
                                              />
                                            </div>
                                            <div
                                              className="user-text"
                                              style={{ color: "#fff" }}
                                            >
                                              <h4 className="h3">
                                                Smith, John
                                              </h4>
                                              <a href="mailto:jen.ownerly@gmail.com">
                                                jen.ownerly@gmail.com
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-user" />
                                            <span className="text-icon">
                                              Instructor
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owner-box card-panel  card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#31837a",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <div className="user-block">
                                            <div
                                              className="user-circle"
                                              style={{
                                                backgroundColor: "#0085ce",
                                                color: "#fff"
                                              }}
                                            >
                                              <img
                                                src="./static/images/img-owner01.jpg"
                                                alt="image description"
                                              />
                                            </div>
                                            <div
                                              className="user-text"
                                              style={{ color: "#fff" }}
                                            >
                                              <h4 className="h3">
                                                Smith, John
                                              </h4>
                                              <a href="mailto:jen.ownerly@gmail.com">
                                                jen.ownerly@gmail.com
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-user" />
                                            <span className="text-icon">
                                              Instructor
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="owner-box card-panel card-panel-panel card-panel-large"
                                      style={{
                                        backgroundColor: "#31837a",
                                        color: "#fff"
                                      }}
                                    >
                                      <a
                                        href="#"
                                        className="close-link icon-close-thin"
                                      />
                                      <div className="card-panel-row row">
                                        <div className="col s10">
                                          <div className="user-block">
                                            <div
                                              className="user-circle"
                                              style={{
                                                backgroundColor: "#0085ce",
                                                color: "#fff"
                                              }}
                                            >
                                              <img
                                                src="./static/images/img-owner01.jpg"
                                                alt="image description"
                                              />
                                            </div>
                                            <div
                                              className="user-text"
                                              style={{ color: "#fff" }}
                                            >
                                              <h4 className="h3">
                                                Smith, John
                                              </h4>
                                              <a href="mailto:jen.ownerly@gmail.com">
                                                jen.ownerly@gmail.com
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col s2 right-align">
                                          <span className="block-icon">
                                            <i className="icon-user" />
                                            <span className="text-icon">
                                              Instructor
                                            </span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer right-align">
                                <a
                                  href="#modal_Instructor1"
                                  className="modal-trigger link-block"
                                >
                                  Add Instructor
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a
                          href="#!"
                          className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                        >
                          Cancel
                        </a>
                        <a href="#" className="btn">
                          Create Class
                        </a>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        )}
        <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1999;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            #modal_Location1 {
              border-radius: 6px;
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 10%;
              right: 10%;
              left: 10%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                0 9px 46px 8px rgba(0, 0, 0, 0.12),
                0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
          `}
        </style>
      </Portal>
    );
  }
}

ClassModal.propTypes = {
  open: PropTypes.bool.isRequired
};

export default ClassModal;
