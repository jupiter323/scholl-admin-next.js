import React from 'react';
import Proptypes from 'prop-types';
import StudentCard from '../components/StudentCard';
import sampleStudentList from '../utils/sampleStudentList';
import FilterSection from './Components/FilterSection';

class StudentListPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            students: sampleStudentList,
        }
    }

   render() {
        const { students } = this.state;
        return(
            <React.Fragment>
                <FilterSection />
                <div className="content-section">
                <div className="row d-flex-content">
                {students.map((student) => (
                    <StudentCard student={student} />
                    ))}
                    </div>
                    </div>
                    <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Student</a>
            </React.Fragment>
        )
      }
    }

    StudentListPage.propTypes = {
        state: Proptypes.object.isRequired,
    }

export default StudentListPage;