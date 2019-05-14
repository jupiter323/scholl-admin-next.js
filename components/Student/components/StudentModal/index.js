import React from 'react';
import PropTypes from 'prop-types';
// import update from 'immutability-helper';
import Portal from '../../../Portal';
import ClickOffComponentWrapper from '../../../ClickOffComponentWrapper';
// import Dropdown from '../../../FormComponents/Dropdown';

class StudentModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            newStudent: [],
        };
    }

    onCloseModal = () => this.setState({ newStudent: [] }, this.props.onClose )
    onSaveStudent = () => {
      const { handleNewStudent } = this.props;
      const { newStudent } = this.state;
      handleNewStudent(newStudent);
      this.onCloseModal();
    }
    render() {
        const { open } = this.props;
        // const { newStudent } = this.state;
        return(
            <Portal selector="#modal">
              {open && (
                <div className="overlay">
                  <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
                    <div id="modal_user_edit" className="modal modal-custom modal-custom-large modal-gray">
                    <form action="#" className="custom-form">
                        <fieldset>
                            <div className="card-modal card-main card grey lighten-3">
                            <div className="owner-box card-panel card-panel-title" style={{backgroundColor: "#31837a", color: "#fff"}}>
                                <div className="card-panel-row row">
                                <div className="col s9">
                                    <div className="user-block">
                                    <div className="user-circle" style={{backgroundColor: "#0085ce", color: "#fff"}}>
                                        <img src="images/img-owner01.jpg" alt=""/>
                                    </div>
                                    <div className="user-text" style={{color: "#fff"}}>
                                        <h4 className="h3">Ownerly, Jennifer</h4>
                                        <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                                    </div>
                                    </div>
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

              {/* form panel */}
                  <div className="card-block">
                    <h3>Account Info</h3>
                    <div className="card-main card">
                      <div className="card-content">
                        <div className="row mb-0">
                          <div className="input-field col s12">
                            <input type="text" id="first_name_edit" value=""/>
                            <label className="label" htmlFor="first_name_edit">First Name*</label>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="input-field col s12">
                            <input type="text" id="last_name_edit" value=""/>
                            <label className="label" htmlFor="last_name_edit">Last Name*</label>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="input-field col s12">
                            <input type="text" id="account_email_edit" value=""/>
                            <label className="label" htmlFor="account_email_edit">Email Address*</label>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="">
                            <div className="input-field col s12 l7">
                              <select id="gender_edit">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                              <label className="label" htmlFor="gender_edit">Gender*</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                            {/* form panel */}

                  <div className="card-block">
                    <h3>Contact Info</h3>
                    <div className="card-main card">
                      <div className="card-content">
                        <div className="row mb-0">
                          <div className="input-field col s12">
                            <input type="tel" id="contact_phone_edit"/>
                            <label className="label" htmlFor="contact_phone_edit">Phone (optional)</label>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="input-field col s12">
                            <input type="text" id="contact_address_edit"/>
                            <label className="label" htmlFor="contact_address_edit">Street Address (optional)</label>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="input-field col s12">
                            <input type="text" id="contact_city_edit"/>
                            <label className="label" htmlFor="contact_city_edit">City (optional)</label>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="col s12 m6 l5">
                            <div className="input-field">
                              <select id="contact_state_edit">
                                <option>State</option>
                                <option>State</option>
                                <option>State</option>
                              </select>
                              <label className="label" htmlFor="contact_state_edit">State (optional)</label>
                            </div>
                          </div>
                          <div className="col s12 m6 l7">
                            <div className="input-field">
                              <input type="tel" id="contact_zip_edit"/>
                              <label className="label" htmlFor="contact_zip_edit">Zip (optional)</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l6">
                {/* form panel */}

                  <div className="card-block">
                    <h3>Location(s)</h3>
              {/* card */}
              <div className="card-main card-location card card-large">
                      <div className="card-panel card-panel-location" style={{backgroundColor: "#62b771;", color: "#fff"}}>
                        <div className="card-panel-row row">
                          <div className="col s9">
                            <h3 className="h4 truncate">Tutor Doctor</h3>
                            <h4 className="sub-title">Tutor Doctor - Austin, TX</h4>
                          </div>
                          <div className="col s3">
                            <div className="row icons-row">
                              <div className="col">
                                <span className="block-icon">
                                  <i className="icon-location"></i>
                                  <span className="text-icon">Location</span>
                                </span>
                              </div>
                              <div className="dropdown-block col">
                                {/* dropdown trigger */}
                                <a className='dropdown-trigger btn' href='#' data-target='dropdown105'><i className="material-icons dots-icon">more_vert</i></a>
                                {/* dropdown structure */}
                                <ul id='dropdown105' className='dropdown-content dropdown-wide'>
                                  <li>
                                {/* modal trigger */}
                                <a href="#modal_location_edit" className="modal-trigger link-block">Edit</a>
                                  </li>
                                  <li><a href="#!">Clone</a></li>
                                  <li><a href="#!">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* card */}

                    <div className="card-main card-location card card-large">
                      <div className="card-panel card-panel-location" style={{backgroundColor: "#62b771", color: "#fff"}}>
                        <div className="card-panel-row row">
                          <div className="col s9">
                            <h3 className="h4 truncate">Tutor Doctor</h3>
                            <h4 className="sub-title">Tutor Doctor - Dallas, TX</h4>
                          </div>
                          <div className="col s3">
                            <div className="row icons-row">
                              <div className="col">
                                <span className="block-icon">
                                  <i className="icon-location"></i>
                                  <span className="text-icon">Location</span>
                                </span>
                              </div>
                              <div className="dropdown-block col">
                                {/* dropdown trigger */}
                                <a className='dropdown-trigger btn' href='#' data-target='dropdown106'><i className="material-icons dots-icon">more_vert</i></a>
                                {/* dropdown content */}
                                <ul id='dropdown106' className='dropdown-content dropdown-wide'>
                                  <li>
                                {/* modal trigger */}
                                <a href="#modal_location_edit" className="modal-trigger link-block">Edit</a>
                                  </li>
                                  <li><a href="#!">Clone</a></li>
                                  <li><a href="#!">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* card add block */}
                  <div className="add-box">
                      <div className="add-box-holder">
                        <a className="btn-floating waves-effect waves-light green lighten-1"><i className="material-icons">add</i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#!" className="waves-effect waves-teal btn-flat pink-text text-darken-1">Delete</a>
              <a href="#!" className="modal-close waves-effect waves-teal btn-flat grey-text text-darken-1" onClick={this.onCloseModal}>Cancel</a>
              <a href="#" className="btn" onClick={this.onSaveStudent}>Save</a>
            </div>
          </div>


            </div>
            </fieldset>
            </form>
            </div>
        </ClickOffComponentWrapper>
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
              z-index: 999;
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
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
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

StudentModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleNewStudent: PropTypes.func.isRequired,
};

export default StudentModal;

