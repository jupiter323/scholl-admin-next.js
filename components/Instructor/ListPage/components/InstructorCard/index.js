import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Modal';

class InstructorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorDetailsModalOpen: false,
      deleteModalOpen: false,
    };
  }

  onOpenDeleteModal = () => this.setState({ deleteModalOpen: true });
  onCloseDeleteModal = () => this.setState({ deleteModalOpen: false });

  onConfirmDeleteInstructor = () => {
    const { onDeleteInstructor, instructor, onCloseDropdown } = this.props;
    onDeleteInstructor(instructor);
    onCloseDropdown();
    this.onCloseDeleteModal();
  }

  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  render() {
    const { deleteModalOpen } = this.state;
    const {
      dropdownIsOpen, dropdownIndex, index,
      instructor: {
        accountInfo: { lastName, firstName, email },
        instructorBasicInfo: { activeStudents, pastStudents, unactivatedStudents, averageImprovement, averageInitialScore, averageFinalScore },
      } } = this.props;
    return (
      <React.Fragment>
        <Modal
          open={deleteModalOpen}
          onConfirm={this.onConfirmDeleteInstructor}
          onClose={this.onCloseDeleteModal}
          header="Are You Sure?"
          body="Deleting this instructor will be permanent"
        />
        <div className="card-main-col col s12 m8 l7 xl5">
          <div className="card-main card-location card card-large">
            <div className="owner-box card-panel" style={{ backgroundColor: '#31837a', color: '#fff' }}>
              <div className="card-panel-row row">
                <div className="col s9">
                  <div className="user-block">
                    <div className="user-circle" style={{ backgroundColor: '#18b5e9', color: '#fff' }}>
                      <span className="initials">NT</span>
                    </div>
                    <div className="user-text" style={{ color: '#fff' }}>
                      <h4 className="h3">{lastName}, {firstName}</h4>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                </div>
                <div className="col s3 right-align">
                  <div className="row icons-row">
                    <div className="col right-align">
                      <span className="block-icon">
                        <i className="icon-user"></i>
                        <span className="text-icon">Instructor</span>
                      </span>
                    </div>
                    <div className="dropdown-block col">
                      <a
                        href="#"
                        onClick={this.handleDropdownClick}
                        className="dropdown-trigger btn"
                        data-target="dropdown05"
                      >
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen && dropdownIndex === index}>
                        <ul
                          id="dropdown05"
                          className="dropdown-content dropdown-wide"
                          style={{ display: 'block', width: '103.991px', left: '116.974px', top: '7.99716px', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                        >
                          <li>
                            {/* <!-- Modal Trigger --> */}
                            <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
                          </li>
                          <li><a href="#!">Clone</a></li>
                          <li><a href="#!">Impersonate</a></li>
                          <li>
                            <a
                              href="#"
                              onClick={this.onOpenDeleteModal}
                            >
                              Delete
                            </a>
                          </li>
                        </ul>
                      </If>
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
                          <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#31837a' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                        </svg>
                      </span>
                      <span className="chart-value" style={{ backgroundColor: '#31837a' }}><span data-count-up data-start-val="0" data-end-val="71" data-duration="1"></span>%</span>
                    </div>
                    <div className="chart-description" style={{ color: '#31837a' }}>Students Who Achieved Target Score</div>
                  </div>
                </div>
                <div className="col s12 m7">
                  <ul className="points-list">
                    <li className="style-red-darken">
                      <span className="badge-circle">{activeStudents}</span>
                      <span className="point-text">active students</span>
                    </li>
                    <li className="style-pink-darken">
                      <span className="badge-circle">{pastStudents}</span>
                      <span className="point-text">past students</span>
                    </li>
                    <li>
                      <span className="badge-circle">{unactivatedStudents}</span>
                      <span className="point-text">unactivated students</span>
                    </li>
                    <li className="style-blue-light">
                      <span className="badge-circle">+{averageImprovement}</span>
                      <span className="point-text">average improvement</span>
                    </li>
                    <li className="style-blue">
                      <span className="badge-circle">{averageInitialScore}</span>
                      <span className="point-text">average initial score</span>
                    </li>
                    <li className="style-blue-dark">
                      <span className="badge-circle">{averageFinalScore}</span>
                      <span className="point-text">average final score</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <div className="meta-info">
                  <p className="truncate">First Location,  Second Location, Possible Additional Truncated More Locatioa...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

InstructorCard.propTypes = {
  instructor: PropTypes.object.isRequired,
  onDeleteInstructor: PropTypes.func.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  dropdownIndex: PropTypes.number.isRequired,
};

export default InstructorCard;
