import React from 'react';
import PropTypes from 'prop-types';
// import updatedUser from '../../utils/sampleUser';

class StudentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
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


render() {
    // const { studentEditModalOpen, cloneModalOpen, showOwnerModalOpen, deleteModalOpen, addStudentModalOpen, newStudentInfo } = this.state;
    const { active, studentInformation: { firstName, lastName },
        emailAddress: { email },

    } = this.props.student;
return (
    <div className="card-main-col col s12 m8 l7 xl5">
      <div className="card-main card-location card card-large">
    <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: active ? '#0085ce' : '#9b9b9b', color: '#fff' }}>
      <div className="card-panel-row row">
      <div className="col s9">
        <div className="user-block">
          <div className="user-circle" style={{ backgroundColor: active ? '#14b14b' : '#808080', color: '#fff', height: '45px' }}>
             <img src="#" alt="" />
          </div>
          <div className="user-text" style={{ color: '#fff' }}>
            <h4 className="h3">{lastName}, {firstName}</h4>
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
  <div className="card-content">
      <div className="row d-flex align-items-center mb-0">
        <div className="col s12 m6">
          <div className="chart-container chart-container-large">
            <div className="chart-holder">
              <span className="svg-curved-bar" data-values='{"from": 1040, "to": 1510, "current": 1270}' data-duration="1">
                <svg  width="146px" height="146px" viewBox="0 0 146 146">
                  <path fill="none" style={{ strokeWidth: "30", stroke: "#eaeaea", d:"M 19.154659885067794 94.556422428299 A 58 58 0 1 1 126.84534011493221 94.556422428299"}}></path>
                  <path data-dinamic fill="none" style={{strokeWidth: "30", stroke: "#0085ce", d:"M 19.154659885067794 94.556422428299 A 58 58 0 0 1 19.154659885067794 94.556422428299"}}></path></svg>
                <span className="js-diff-holder"><span className="js-diff"><span className="txt"></span></span></span>
              </span>
              <span className="chart-value" style={{backgroundColor: "#0085ce"}}><span data-count-up data-start-val="1040" data-end-val="1270" data-duration="1">1040</span></span>
            </div>
            <div className="chart-row">
              <div className="chart-col chart-start">
                <span className="amount">1040</span>
                <span className="amount-text">initial</span>
              </div>
              <div className="chart-col chart-end">
                <span className="amount">1510</span>
                <span className="amount-text">target</span>
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
    )}};

  StudentCard.propTypes = {
    student: PropTypes.object.isRequired,
  };

export default StudentCard;