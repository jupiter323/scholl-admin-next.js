import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
// import IndividualStudentPage from '../../IndividualStudentPage';
// import Dropdown from '../../../FormComponents/Dropdown';
// import updatedUser from '../../utils/sampleUser';
const data = (current, target, initial) => ({
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
        this.studentCard = React.createRef();
        this.state = {
            // active: false,
            selected: false,
            studentInfo: {},
            studentEditModalOpen: false,
            cloneModalOpen: false,
            showOwnerModalOpen: false,
            deleteModalOpen: false,
            activateAccountModalOpen: false,
            assignInstructorModalOpen: false,
            addStudentModalOpen: false,
            newStudentInfo: {},
        }
    }

// onSelectStudent = (event) => {
//   console.log("clicked")
//   this.setState({studentInfo: event.target.value})
//   console.log(this.state.studentInfo)
// }
// renderIndividualPage = () => {
//   // eslint-disable-next-line no-console
// const { student } = this.props;
// return <IndividualStudentPage student={student} />
// }

render() {
    // const { studentEditModalOpen, cloneModalOpen, showOwnerModalOpen, deleteModalOpen, addStudentModalOpen, newStudentInfo } = this.state;
    const { student, student: {id, active, testScores: { initialScore, currentScore }, courseContext: {targetScore}, studentInformation: { firstName, lastName },
        emailAddress: { email }} }= this.props;
return (
  // <div className="cardholder" role="button" id={id} tabIndex={index}>

  <div className="card-main-col col s12 m8 l7 xl5" id={id}>
      <div className={ active? "card-main card-location card card-large" : "card-main card-location card-disabled card-large card"}>

    <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: active ? '#0085ce' : '#9b9b9b', color: '#fff' }}>
      <div className="card-panel-row row">
      <div className="col s9">
        <div className="user-block">
          <div className="user-circle" style={{ backgroundColor: active ? '#14b14b' : '#808080', color: '#fff', height: '45px' }}>
             <img src="#" alt="" />
          </div>
          <div className="user-text" style={{ color: '#fff' }}>
            <h4 className="h3"><a href="#" value={student} onClick={(event) => this.onSelectStudent(event)}>{lastName}, {firstName}</a></h4>
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
          {/* <Dropdown
          options={"Edit","Clone", "Show Owner", "Delete"}
          stateKey="state"
          dropdownKey="state"
          id={`${id}-dropdown`}
          /> */}
          <div className="dropdown-block col">
            {/* <!-- Dropdown Trigger --> */}
            <a className='dropdown-trigger btn' href='#' data-target='dropdown01'><i className="material-icons dots-icon">more_vert</i></a>
            {/* <!-- Dropdown Structure --> */}
            <ul id='dropdown01' className='dropdown-content dropdown-wide'>
              <li>
                {/* <!-- Modal Trigger --> */}
                <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
              </li>
              <li><a href="#!">Clone</a></li>
              <li><a href="#!">Show Owner</a></li>
              <li><a href="#!">Delete</a></li>
            </ul>
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
              data={() => data(currentScore, targetScore, initialScore)}
              height={210}
              options={{

                circumference: 1.45 * Math.PI,
                rotation: -3.85,
                cutoutPercentage: 60,
                // tooltips: false,
              }}
              />
              </If>
              <span className="chart-value" style={{backgroundColor: "#0085ce", bottom: "7px"}}><span data-count-up data-start-val={initialScore} data-end-val={currentScore} data-duration="1">{currentScore}</span></span>
              <span className="txt" style={{top: "-56px", left: "-16px", color: 'green'}}>{(currentScore-initialScore)}</span>
            </div>
            <div className="chart-row">
              <div className="chart-col chart-start">
                <span className="amount" style={{color: '#0085ce'}}>{initialScore}</span>
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
              <span className="badge-circle">61</span>
              <span className="point-text">complete</span>
            </li>
            <li className="style-red">
              <span className="badge-circle">7</span>
              <span className="point-text">overdue</span>
            </li>
            <li className="style-orange">
              <span className="badge-circle">3</span>
              <span className="point-text">practice tests</span>
            </li>
            <li className="style-blue-lighter">
              <span className="badge-circle"><span>17</span> <span className="of">of 23</span></span>
              <span className="point-text">sessions</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-inner-row">
        <div className="row-holder">
          <ul className="category-list">
            <li className="category-box">
              <span className="category-badge badge-purple">TW</span>
              <span className="category-text">Tutor Withalongername</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  // </div>
    )}};

  StudentCard.propTypes = {
    student: PropTypes.object.isRequired,
    // index: PropTypes.number.isRequired,
    // onHandleStudentCard: PropTypes.func.isRequired,
  };

export default StudentCard;