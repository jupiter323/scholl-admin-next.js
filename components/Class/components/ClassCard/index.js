import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const data = (current, target) => ({
  datasets: [{
    data: [current, (target - current)],
    backgroundColor: [
      '#9d5eb7',
      '#eaeaea',
    ],
  }],
}
);

class ClassCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      editModalOpen: false,
    };
  }
  onSetDropdown = (event, dropdownIsOpen) => {
    event.preventDefault();
    this.setState({ dropdownIsOpen: !dropdownIsOpen });
  };

  onOpenEditModal = () => this.setState({ editModalOpen: true })
  onCloseEditModal = () => this.setState({ editModalOpen: false })


  render() {
    const { dropdownIsOpen } = this.state;
    const { onCloneClass, onDeleteClass, index, onRedirect, currentClass: { id, active, status, name, startDate, endDate, students, totalImprovement, courseworkAssigned,
      courseworkCompleted, flaggedForReview, averageScore, achievedTarget, avgPracticeTestsCompleted, completedInstruction, tutor } } = this.props;
    return (
      <div className="card-main-col col s12 m8 l7 xl5">
        <div className="card-main card-class card card-large">
          <div className="owner-box card-panel" style={active ? { backgroundColor: '#408e49', color: "#fff" } : { backgroundColor: "#afafaf", color: '#fff' }}>
            <div className="card-panel-row row">
              <div className="col s9">
                <div className="user-block">
                  <div className="user-circle" style={{ backgroundColor: '#fff', color: active ? "#408e49" : "#afafaf" }}>
                    <span className="initials">{students}</span>
                    <span className="ititials-text">students</span>
                  </div>
                  <div className="user-text" style={{ color: "#fff" }}>
                    <h4 className="h3"> <a href="#" onClick={() => onRedirect(id)}>{name}</a></h4>
                    <time dateTime="P120D">{startDate} - {endDate}</time>
                  </div>
                </div>
              </div>
              <div className="col s3 right-align">
                <div className="row icons-row">
                  <div className="col right-align">
                    <span className="block-icon">
                      <i className="icon-members"></i>
                      <span className="text-icon">Class</span>
                    </span>
                  </div>
                  <div className="dropdown-block col">
                    <a
                      className="dropdown-trigger btn"
                      href="#"
                      data-target="dropdown01"
                      onClick={(event) => this.onSetDropdown(event, dropdownIsOpen)}
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    <If condition={dropdownIsOpen}>
                      <ul id="dropdown01" className="dropdown-content dropdown-wide" style={{ display: "block", opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                        <li>
                          <a href="#modal_user_edit" className="modal-trigger link-block" onClick={this.OpenEditModal}>Edit</a>
                        </li>
                        <li><a href="#!" onClick={() => onCloneClass(index)}>Clone</a></li>
                        <li><a href="#!">Impersonate</a></li>
                        <li><a href="#!" onClick={() => onDeleteClass(index)}>Delete</a></li>
                      </ul>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="row d-flex mb-0">
              <div className="col s12 m5">
                <div className="row mb-0">
                  <div className="col s6 m12">
                    <ul className="points-list-custom">
                      <li className={status === "current" ? "style-aqua" : ""}>
                        <span className="badge-circle">+{totalImprovement}<span className="badge-text">improvement</span></span>
                      </li>
                    </ul>
                  </div>
                  <div className="col s6 m12">
                    <div className="chart-block chart-block-test">
                      <Doughnut
                        data={() => data(completedInstruction, 100)}
                        height={104}
                        width={104}
                        options={{
                          cutoutPercentage: 80,
                        }}
                      />
                      <div className="chart-text" style={{ bottom: '6px' }}>
                        <span className="title">Instruction</span>
                        <span className="value">{completedInstruction}%</span>
                        <span className="description">vs scheduled instruction</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m7">
                <ul className="points-list">
                  <li className={status === "current" ? "style-purple-darken" : ""}>
                    <span className="badge-circle" style={{ color: '#fff' }}>{courseworkAssigned}</span>
                    <span className="point-text">coursework assigned</span>
                  </li>
                  <li className={status === "current" ? "style-purple-lighten" : ""}>
                    <span className="badge-circle" style={{ color: '#fff' }}>{courseworkCompleted}</span>
                    <span className="point-text">coursework completed</span>
                  </li>
                  <li className={status === "current" ? "style-red-darken-3" : ""}>
                    <span className="badge-circle" style={{ color: '#fff' }}>{flaggedForReview}</span>
                    <span className="point-text">problems ﬂagged for review</span>
                  </li>
                  <li className={status === "current" ? "style-blue-light" : ""}>
                    <span className="badge-circle" style={{ color: '#fff' }}>{averageScore}</span>
                    <span className="point-text">average score</span>
                  </li>
                  <li className={status === "current" ? "style-blue" : ""}>
                    <span className="badge-circle" style={{ color: '#fff' }}>{achievedTarget}</span>
                    <span className="point-text">achieved target score</span>
                  </li>
                  <li className={status === "current" ? "style-orange-accent-4" : ""}>
                    <span className="badge-circle" style={{ color: '#fff' }}>{avgPracticeTestsCompleted}</span>
                    <span className="point-text">average practice tests completed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-inner-row">
              <div className="row-holder">
                <ul className="category-list">
                  <li className="category-box ">
                    <span className="category-badge badge-purple"></span>
                    <span className="category-text">{tutor}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

ClassCard.propTypes = {
  currentClass: PropTypes.object.isRequired,
  onDeleteClass: PropTypes.func.isRequired,
  onCloneClass: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onRedirect: PropTypes.func.isRequired,
};
export default ClassCard;
