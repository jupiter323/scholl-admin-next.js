import React, { Component } from 'react';
import StudentCard from '../components/Student/components/StudentCard';
import sampleStudentList from '../components/Student/utils/sampleStudentList';
import FilterSection from '../components/Student/ListPage/Components/FilterSection';
import StudentModal from '../components/Student/components/StudentModal';
import sampleLocationList from '../components/Location/utils/sampleLocationList';
import IndividualStudentPage from '../components/Student/IndividualStudentPage';
import sampleUser from '../components/Student/utils/sampleUser'
class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: {},
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


// needs to be a function to set state for selected student
// that can be cleared/reset when exiting out of individual page
  // onHandleStudentCard = (event) => {
  //   event.preventDefault();
  //   console.log('clicked')
  //   this.setState({selectedStudent: event.target.value});
  //   console.log(this.state.selectedStudent)
  // }
  // onHandleStudentCard = (event) => {
  //   console.log("clicked")
  //   this.setState({selectedStudent: event.target.student})
  // }
// that set state function should also have this call back....


   render() {
    const { studentModalOpen, students } = this.state;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <div className="title-row card-panel">
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            <h2 className="h1 white-text">
            <span className="heading-holder">
              <i className="icon-student"></i>
              <span className="heading-block">Students</span>
            </span>
          </h2>
          </div>
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
                  <IndividualStudentPage student={sampleUser}/>
                <div className="row d-flex-content">
                {students.map((student, index) => (
                    <StudentCard student={student} index={index} id={student.id} key={student.id} onHandleStudentCard={this.onHandleStudentCard}/>
                    ))}
                    </div>
                    </div>
                    <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger" onClick={this.onOpenStudentModal}><i className="material-icons">add</i>New Student</a>

        </div>
      </main>
    );
  }
}

export default Students;
