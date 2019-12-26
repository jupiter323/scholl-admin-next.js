import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import InstructorDetailsModal from '../InstructorDetailsModal';

import Modal from '../../../../Modal';

const data = (value, total) => ({
  datasets: [{
    data: [ value, total-value ],
    backgroundColor: [
      '#62b771',
      '#eaeaea',
    ],
  }],
})

class InstructorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorDetailsModalOpen: false,
      deleteModalOpen: false,
    };
  }

  onOpenInstructorDetailsModal = () => {
    this.props.onCloseDropdown();
    this.setState({ instructorDetailsModalOpen: true });
  };

  onCloseInstructorDetailsModal = () => this.setState({ instructorDetailsModalOpen: false });

  onCloneInstructor = () => this.props.onCloneInstructor(this.props.instructor)

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
    const { deleteModalOpen, instructorDetailsModalOpen } = this.state;
    const {
      dropdownIsOpen, dropdownIndex, index, instructor, onSaveInstructorChanges } = this.props;
    const {
      accountInfo: { lastName, firstName, email } = {},
      basicInfo: { activeStudents, pastStudents, unactivatedStudents, averageImprovement, averageInitialScore, averageFinalScore,studentsAchievingTargetScore } = {},
    } = instructor;
    return (
      <React.Fragment>
        <InstructorDetailsModal
          instructor={instructor}
          open={instructorDetailsModalOpen}
          onClose={this.onCloseInstructorDetailsModal}
          onSaveInstructorChanges={onSaveInstructorChanges}
          onOpenDeleteModal={this.onOpenDeleteModal}
          deleteModalOpen={deleteModalOpen}
        />
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
                            <a
                              href="#"
                              onClick={this.onOpenInstructorDetailsModal}
                              className="modal-trigger link-block"
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={this.onCloneInstructor}
                            >
                              Clone
                            </a>
                          </li>
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
                      <Doughnut
                          data={() => data(activeStudents, activeStudents-10)}
                          height={110}
                          width={110}
                          options={{
                            circumference: 1.45 * Math.PI,
                                rotation: -3.85,
                                cutoutPercentage: 55,
                                tooltips: false,
                          }}
                        />
                      <span className="chart-value" style={{ backgroundColor: '#31837a',marginBottom: '-15px' }}>{Math.floor(studentsAchievingTargetScore / activeStudents * 100)}%</span>
                    </div>
                    <div className="chart-description" style={{ color: '#31837a',marginTop: '45px' }}>Students Who Achieved Target Score</div>
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
  onSaveInstructorChanges: PropTypes.func.isRequired,
  onDeleteInstructor: PropTypes.func.isRequired,
  onCloneInstructor: PropTypes.func.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  dropdownIndex: PropTypes.number,
};

export default InstructorCard;
