import React from 'react';
// import Proptypes from 'prop-types';

import StudentCard from '../components/StudentCard';
import sampleStudentList from '../utils/sampleStudentList';
import FilterSection from './Components/FilterSection';
import StudentModal from "../components/StudentModal";
import sampleLocationList from '../../Location/utils/sampleLocationList';

class StudentListPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            locations: sampleLocationList,
            students: sampleStudentList,
            studentModalOpen: false,
            sort: "",
            filterName: "",
            newStudent: {
                active: false,
                firstName: {},
                lastName: {},
                gender: {},
                phone: {},
                address: {},
                city: {},
                state: {},
                zipCode: {},
                email: {},
                location: {},
            },
        }
    }

   onOpenStudentModal = () => this.setState({ studentModalOpen: true });
   onCloseStudentModal = () => this.setState({ studentModalOpen: false });

   onSetSort = (sort) => this.setState({ sort });
   onSetFilteredState = (filterName) => this.setState({ filterName });
   onUnsetFilteredState = () => this.setState({ filterName: '' });

   onSetFilteredLocationState = (location) => this.setState({ location });
   onUnsetFilteredLocationState = () => this.setState({location: ''});

   onFilterByName = () => {
        const { students, filterName } = this.state;
        return students.reduce((finalArr, currentStudent) => {
            const { lastName, firstName } = currentStudent;
            const studentString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
            if (studentString.indexOf(filterName) !== -1 && finalArr.indexOf(currentStudent) === -1) {
                finalArr.push(currentStudent);
            }
            return finalArr;
        }, []);
    }

//    handleNewStudent = (firstName, lastName, gender, phone, address, city, state, zipCode, email, location) => {
//         const newStudent = update(this.state.newStudent, {
//             firstName: {$set: [firstName]},
//             lastName: {$set: [lastName]},
//             gender: {$set: [gender]},
//             phone: {$set: [phone]},
//             address: {$set: [address]},
//             city: {$set: [city]},
//             state: {$set: [state]},
//             zipCode: {$set: [zipCode]},
//             email: {$set: [email]},
//             location: {$set: [location]},
//         });
//         this.setState({ newStudent })

   render() {
        const { students, studentModalOpen } = this.state;
        return(
            <React.Fragment>
                <StudentModal open={studentModalOpen} onOpenStudentModal={this.OpenStudentModal} onClose={this.onCloseStudentModal} />
                <FilterSection
                    onSetSort={this.onSetSort}
                    onSetFilteredState={this.onSetFilteredState}
                    onUnsetFilteredState={this.onUnsetFilteredState}
                    onSetFilteredLocationState={this.onSetFilteredLocationState}
                    onUnsetFilteredLocationState={this.onUnsetFilteredLocationState}
                    handleFilterClick={this.handleFilterClick}
                    onFilterByName={this.onFilterByName} />
                <div className="content-section">
                <div className="row d-flex-content">
                {students.map((student) => (
                    <StudentCard student={student} key={student.id} />
                    ))}
                    </div>
                    </div>
                    <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger" onClick={this.onOpenStudentModal}><i className="material-icons">add</i>New Student</a>
            </React.Fragment>
        )
      }
}



export default StudentListPage;