import React from 'react';
import Proptypes from 'prop-types';
import update from 'immutability-helper';

import StudentCard from '../components/StudentCard';
import sampleStudentList from '../utils/sampleStudentList';
import FilterSection from './Components/FilterSection';
import StudentModal from "../components/StudentModal";

class StudentListPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            students: sampleStudentList,
            studentModalOpen: false,
            newStudent: {
                active: false,
                studentInformation: {},
                contactInformation: {},
                location: {},
            },
        }
    }

   onOpenStudentModal = () => this.setState({ studentModalOpen: true });
   onCloseStudentModal = () => this.setState({ studentModalOpen: false });

   handleNewStudent = (studentInformation, contactInformation, location) => {
        const newStudent = update(this.state.newStudent, {
            studentInformation: {$set: [studentInformation]},
            contactInformation: {$set: [contactInformation]},
            location: {$set: [location]},
        });
        this.setState({ newStudent })
   }
   render() {
        const { students, studentModalOpen, newStudent: { studentInformation, contactInformation, location } } = this.state;
        return(
            <React.Fragment>
                <StudentModal open={studentModalOpen} onOpenStudentModal={this.OpenStudentModal} onClose={this.onCloseStudentModal} handleNewStudent={(newStudent) => this.handleNewStudent(newStudent, studentInformation, contactInformation, location)} />
                <FilterSection />
                <div className="content-section">
                <div className="row d-flex-content">
                {students.map((student) => (
                    <StudentCard student={student} />
                    ))}
                    </div>
                    </div>
                    <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger" onClick={this.onOpenStudentModal}><i className="material-icons">add</i>New Student</a>
            </React.Fragment>
        )
      }
    }

    StudentListPage.propTypes = {
        state: Proptypes.object.isRequired,
    }

export default StudentListPage;