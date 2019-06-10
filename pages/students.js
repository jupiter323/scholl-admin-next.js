import React, { Component } from 'react';
import StudentCard from '../components/Student/components/StudentCard';
import sampleStudentList from '../components/Student/utils/sampleStudentList';
import FilterSection from '../components/Student/ListPage/Components/FilterSection';
import StudentModal from '../components/Student/components/StudentModal';
import sampleLocationList from '../components/Location/utils/sampleLocationList';
import IndividualStudentPage from '../components/Student/IndividualStudentPage';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: null,
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
  onUnsetFilteredLocationState = () => this.setState({ location: '' });

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

  onHandleStudentCard = (index) => {
    const { students } = this.state;
    this.setState({ selectedStudent: students[index] });
  }

  onRedirectToStudentPage = (event) => {
    event.preventDefault();
    this.setState({selectedStudent: null})
  }

  onDeleteStudent = (index) => {
    const { students } = this.state;
    const newStudentArray = this.arrayItemRemover(students, students[index])
    this.setState({students: newStudentArray})
  }

  onCloneStudent = (index) => {
    const { students } = this.state;
    this.setState(prevState => {
      prevState.students.push(students[index]);
      return { students: prevState.students}
    })
  }

   arrayItemRemover = (array, value) => array.filter((student) => student !== value)

  render() {
    const { studentModalOpen, students, selectedStudent } = this.state;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          {!selectedStudent && (
            <React.Fragment>

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
                  {students.map((student, index) => (
                    <StudentCard
                    student={student}
                    index={index}
                    id={student.id}
                    key={student.id}
                    onHandleStudentCard={() => this.onHandleStudentCard(index)}
                    onDeleteStudent={() => this.onDeleteStudent(index)}
                    onCloneStudent={() => this.onCloneStudent(index, student.id)}
                    />
                  ))}
                </div>
              </div>
              <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger" onClick={this.onOpenStudentModal}><i className="material-icons">add</i>New Student</a>
              <StudentModal open={studentModalOpen} onOpenStudentModal={this.OpenStudentModal} onClose={this.onCloseStudentModal} />
            </React.Fragment>
          )}
          {selectedStudent && (
            <IndividualStudentPage student={selectedStudent} onRedirectToStudentPage={this.onRedirectToStudentPage} />
          )}
        </div>
      </main>
    );
  }
}

export default Students;
