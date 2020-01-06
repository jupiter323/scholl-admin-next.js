import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import EditModal from './components/EditModal';
const data = (current = 0, target = 0, initial = 0) => ({
  datasets: [{
    data: [current-initial, (target-initial) - (current-initial) ],
    backgroundColor: [
      '#0085ce',
      '#eaeaea',
    ],
  }],
})

class StudentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editModalOpen: false,
            cloneModalOpen: false,
            showOwnerModalOpen: false,
            deleteModalOpen: false,
            activateAccountModalOpen: false,
            assignInstructorModalOpen: false,
        }
    }

    handleDropdownClick = (event) => {
      const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
      event.preventDefault();
      if (dropdownIsOpen) {
        return onCloseDropdown();
      }
      return onSetDropdown(index);
    }

    onOpenEditModal = () => {
      this.props.onCloseDropdown();
      this.setState({editModalOpen: true});
    }
    onCloseEditModal = () => this.setState({editModalOpen: false})

    render() {
    const { onHandleStudentCard,onSaveStudentChanges, onDeleteStudent, onCloneStudent, index, dropdownIndex,student, student: {id, active, tutor, testScores: { initialScore, currentScore }, courseContext: {targetScore}, studentInformation: { firstName, lastName },
        emailAddress: { email }, stats},dropdownIsOpen }= this.props;
    const { editModalOpen } = this.state;
    return (
      <React.Fragment>
        <EditModal
          open={editModalOpen}
          onSaveStudentChanges={onSaveStudentChanges}
          onCloseEditModal={this.onCloseEditModal}
          student={student}
          handleDetailsChange={this.handleDetailsChange}
        />

        <div className="card-main-col col s12 m8 l7 xl5" id={id}>
          <div
            className={
              active
                ? "card-main card-location card card-large"
                : "card-main card-location card-disabled card-large card"
            }
          >
            <div
              className="owner-box card-panel card-panel-panel card-panel-large"
              style={{
                backgroundColor: active ? "#0085ce" : "#9b9b9b",
                color: "#fff",
              }}
            >
              <div className="card-panel-row row">
                <div className="col s9">
                  <div className="user-block">
                    <div
                      className="user-circle"
                      style={{
                        backgroundColor: active ? "#14b14b" : "#808080",
                        color: "#fff",
                        height: "45px",
                      }}
                    >
                      <img src="#" alt="" />
                    </div>
                    <div className="user-text" style={{ color: "#fff" }}>
                      <h4 className="h3">
                        <a
                          href="#"
                          value={student}
                          onClick={() => onHandleStudentCard({ index })}
                        >
                          {lastName}, {firstName}
                        </a>
                      </h4>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                </div>
                <div className="col s2 right-align">
                  <span className="block-icon">
                    <i className="icon-user"></i>
                    <span className="text-icon">Student</span>
                  </span>
                </div>
                <div className="col s1 right-align">
                  <div className="row icons-row">
                    <div className="dropdown-block col">
                      <a
                        href="#"
                        className="dropdown-trigger btn"
                        data-target="dropdown01"
                        onClick={this.handleDropdownClick}
                      >
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen && dropdownIndex === index}>
                        <ul
                          id="dropdown01"
                          className="dropdown-content dropdown-wide"
                          style={{
                            display: "block",
                            opacity: "1",
                            transform: "scaleX(1) scaleY(1)",
                          }}
                        >
                          <li>
                            <a
                              href="#"
                              className="modal-trigger link-block"
                              onClick={this.onOpenEditModal}
                            >
                              Edit
                            </a>
                          </li>
                          <li>
                            <a href="#!" onClick={() => onCloneStudent(index)}>
                              Clone
                            </a>
                          </li>
                          <li>
                            <a href="#!">Show Owner</a>
                          </li>
                          <li>
                            <a href="#!" onClick={() => onDeleteStudent(index)}>
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

            {/* card content */}
            <div className="card-content" ref={this.studentCard}>
              <div className="row d-flex align-items-center mb-0">
                <div className="col s12 m6">
                  <div className="chart-container chart-container-large">
                    <div className="chart-holder">
                      <If condition={active}>
                        <Doughnut
                          data={() =>
                            data(currentScore, targetScore, initialScore)
                          }
                          height={210}
                          options={{
                            circumference: 1.45 * Math.PI,
                            rotation: -3.85,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                        />
                      </If>
                      <span
                        className="chart-value"
                        style={{ backgroundColor: "#0085ce", bottom: "7px" }}
                      >
                        <span
                          data-count-up
                          data-start-val={initialScore}
                          data-end-val={currentScore}
                          data-duration="1"
                        >
                          {currentScore}
                        </span>
                      </span>
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">
                        <span className="amount" style={{ color: "#0085ce" }}>
                          {initialScore}
                        </span>
                        <span className="amount-text">&nbsp; initial</span>
                      </div>
                      <div className="chart-col chart-end">
                        <span className="amount">{targetScore}</span>
                        <span className="amount-text">&nbsp; target</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <ul className="points-list-bordered">
                    <li className="style-green">
                      <span className="badge-circle">
                        {stats.complete}
                      </span>
                      <span className="point-text">complete</span>
                    </li>
                    <li className="style-red">
                      <span className="badge-circle">
                        {stats.overdue}
                      </span>
                      <span className="point-text">overdue</span>
                    </li>
                    <li className="style-orange">
                      <span className="badge-circle">
                        {stats.practice_tests}
                      </span>
                      <span className="point-text">practice tests</span>
                    </li>
                    <li className="style-blue-lighter">
                      <span className="badge-circle">
                        <span>{stats.sessions_complete}</span>{" "}
                        <span className="of">
                          of {stats.total_sessions}
                        </span>
                      </span>
                      <span className="point-text">sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-inner-row">
                <div className="row-holder">
                  <ul className="category-list">
                    <li className="category-box">
                      <span className="category-badge badge-purple"></span>
                      <span className="category-text">{tutor}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );}};

  StudentCard.propTypes = {
    student: PropTypes.object.isRequired,
    onHandleStudentCard: PropTypes.func.isRequired,
    dropdownIsOpen: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onDeleteStudent: PropTypes.func.isRequired,
    onCloneStudent: PropTypes.func.isRequired,
    onSetDropdown: PropTypes.func.isRequired,
    onCloseDropdown: PropTypes.func.isRequired,
    dropdownIndex: PropTypes.number,
    onSaveStudentChanges:PropTypes.func.isRequired,
  };

export default StudentCard;