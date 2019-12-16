import React, { Component } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StickyContainer, Sticky } from 'react-sticky';
import {fetchStudents} from '../components/Student/index/actions';
import {makeSelectStudents} from '../components/Student/index/selectors';
import StudentCard from '../components/Student/components/StudentCard';
import sampleStudentList from '../components/Student/utils/sampleStudentList';
import FilterSection from '../components/Student/ListPage/Components/FilterSection';
import StudentModal from '../components/Student/components/StudentModal';
import IndividualStudentPage from '../components/Student/IndividualStudentPage';
import LocationModal from '../components/Location/components/LocationModal';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: null,
      students: sampleStudentList,
      studentModalOpen: false,
      locationModalOpen: false,
      sort: "",
      filterName: "",
      newStudent: {
        active: false,
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: '',
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: '',
        },
        emailAddress: {
          email: '',
        },
        location: {
          locations: [],
        },
     },
    }
  }

  componentDidMount = () => {
    const {onFetchStudents} = this.props;
    onFetchStudents();
  }

  onOpenStudentModal = () => this.setState({ studentModalOpen: true });
  onCloseStudentModal = () => this.setState({ studentModalOpen: false });
  onOpenLocationModal = () => this.setState({locationModalOpen: true});
  onCloseLocationModal = () => this.setState({locationModalOpen: false})


  onSetSort = (sort) => this.setState({ sort });
  onSetFilteredState = (filterName) => this.setState({ filterName });
  onUnsetFilteredState = () => this.setState({ filterName: '' });

  onSetFilteredLocationState = (location) => this.setState({ location });
  onUnsetFilteredLocationState = () => this.setState({ location: '' });

 // TODO add a toas or some notification that a student has been saved
  onSaveNewStudent = async () => {
    const {newStudent: previousStudentState} = this.state;
    // Replace code below with action dispatch
    // await addNewStudentApi(previousStudentState)
    const newStudent = update(previousStudentState, {
      $set:
       { active: false,
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: '',
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: '',
        },
        emailAddress: {
          email: '',
        },
        location: {
          locations: [],
        },
    }}
    );
    this.setState({newStudent})
    // eslint-disable-next-line no-console
    console.warn('do something with the new student info')
    this.onCloseStudentModal();
  }

  onDeleteNewStudent = () => {
    const {newStudent: previousStudentState} = this.state;
    const newStudent = update(previousStudentState, {
      $set:
       { active: false,
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: '',
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: '',
        },
        emailAddress: {
          email: '',
        },
        location: {
          locations: [],
        },
    }}
    );
    this.setState({newStudent})
  }

  onRemoveLocation = (index) => {
    const {newStudent: previousStudentState} = this.state;
    const {location: { locations } } = this.state.newStudent;
    const newLocationsArray = this.arrayItemRemover(locations, locations[index]);
    const newStudent = update(previousStudentState, {
      location: { $set: {locations: newLocationsArray}},
    })
    this.setState({newStudent})
  }

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

  handleChange = (event, name, section) => {
    const { newStudent: previousStudentState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedStudent = update(previousStudentState, {
      [section]: { $merge: { [name]: value }},
    })
    this.setState({newStudent: updatedStudent})
}


  arrayItemRemover = (array, value) => array.filter((student) => student !== value)

  render() {
    const { studentModalOpen, students, selectedStudent } = this.state;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
        <StickyContainer>
          {!selectedStudent && (
            <React.Fragment>
              <Sticky>
                {({style}) => (

                  <div className="title-row card-panel" style={{...style, zIndex: 1999}}>
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
               )}
             </Sticky>
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
              <StudentModal
                open={studentModalOpen}
                onClose={this.onCloseStudentModal}
                handleChange={this.handleChange}
                state={this.state.newStudent}
                onSave={this.onSaveNewStudent}
                onOpenLocationModal={this.onOpenLocationModal}
                onRemoveLocation={this.onRemoveLocation}
                onDeleteNewStudent={this.onDeleteNewStudent}
                />
                <LocationModal
                open={this.state.locationModalOpen}
                onClose={this.onCloseLocationModal}
                handleLocationsChange={(selectedLocations) => this.handleChange(selectedLocations, 'locations', 'location')}
                />
                </React.Fragment>
          )}
          {selectedStudent && (
            <IndividualStudentPage student={selectedStudent} onRedirectToStudentPage={this.onRedirectToStudentPage} />
          )}
          </StickyContainer>
        </div>
      </main>
    );
  }
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  onFetchStudents: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
});


const mapDispatchToProps = (dispatch) => ({
  onFetchStudents: () => dispatch(fetchStudents()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Students);
