import React from 'react';
import PropTypes from 'prop-types';
import updatedUser from '../../utils/sampleUser';

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
    } = updatedUser;
return (
    <div className="card-main-col col s12 m8 l7 xl5">

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
      {/* <div className="dropdown-block col">
        <a className="dropdown-trigger-btn" href="#" data-target="dropdown01"><i className="material-icons dots-icon"></i></a>
        <ul id='dropdown01' className="dropdown-content dropdown-wide">
        <li></li>
        </ul>
      </div> */}
    </div>
  </div>
  </div>
    )}};

  StudentCard.propTypes = {
    student: PropTypes.object.isRequired,
  };

export default StudentCard;