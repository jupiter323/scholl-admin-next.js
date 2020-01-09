import React from "react";
import update from 'immutability-helper';
import StatusPage from "../components/Classes/StatusPage";
import ListPage from "../components/Classes/ListPage";
import Moment from 'moment';
import sampleClass from "../components/Classes/utils/sampleClass";
import createNewClassRoomApi from '../components/Classes/index/api';

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: null,
      classes: sampleClass,
    };
  }

  onHandleClassCard = (index) => {
    const { classes } = this.state;
    this.setState({ selectedClass: classes[index] });
  };

  onAddNewClass = (newClass) => {
    const {classes:prevClassState} = this.state;
    const formattedNewClass = {
      summary:{
        amount_students:10,
        start_date:"6/1/19",
        end_date:"8/5/19",
        improvement:123,
        coursework_assigned:60,
        coursework_completed:90,
        problems_flagged_review:40,
        average_score:1256,
        achieved_target_score:85,
        average_practice_tests_completed:1.8,
        instruction:14,
      },
      accountInfo:{
        lastName: 'Admin',
        firstName: 'Company',
        email: 'test2@example.com',
        gender: 'M'
      },
      contactInfo: {
        phone: '1234567890',
        streetAddress: '1234 Test Road',
        city: 'Austin',
        state: 'TX',
        zip: '78751'
      },
      classInfo:newClass.classInfo,
      location: newClass.location,
      instructor: newClass.instructor,
    };
    const updatedClasses = update(prevClassState,{$push:[formattedNewClass]});
    this.setState({ classes:updatedClasses})
    this.onCreateNewClassApi(newClass);
  }

  onCloneClass = (index) => {
    const { classes } = this.state;
    this.setState(prevState => {
      prevState.classes.push(classes[index]);
      return { classes: prevState.classes}
    })
  }

  arrayItemRemover = (array, value) => array.filter((classroom) => classroom !== value)

  onDeleteClass = (index) => {
    const { classes } = this.state;
    const newClassesArray = this.arrayItemRemover(classes, classes[index])
    this.setState({classes: newClassesArray})
  }

  onCreateNewClassApi = async(classroom) => {
    const newId = this.state.classes.length + 1;
    const {classInfo:{className},accountInfo:{start_date,end_date,isExclude},location:{locations},instructor:{instructors}} = classroom;
    const formattedLocations = locations.reduce((finalArray,currentLocation) => {
      const {
        locationId,
        locationNickname,
        locationName,
      } = currentLocation;
      const newLocation = locationId;
      finalArray.push(newLocation);
      return finalArray;
    },[]);
    const formattedClassRoom = {
      id:newId,
      name: className,
      start_date: Moment(start_date).format('YYYY-MM-DD'),
      end_date: Moment(end_date).format('YYYY-MM-DD'),
      duration: "string",
      exclude_from_statistics: isExclude,
      locations:formattedLocations,
      instructors,
      students: [],
    };
    await createNewClassRoomApi(formattedClassRoom);
  }

  onSaveClassChanges = (updatedClasRoom) => {
    const { classes: originalClasses } = this.state;
    const classToUpdate = originalClasses.filter(classroom => classroom.id === updatedClasRoom.id)[0];
    const updatedClassIndex = originalClasses.indexOf(classToUpdate);
    const classes = update(originalClasses, {
      $splice: [[updatedClassIndex, 1, updatedClasRoom]],
    });
    // saveChangesSuccess();
    this.setState({ classes });
  }

  render() {
    const { selectedClass } = this.state;
    return (
      <React.Fragment>
        <main id="main" role="main">
          <div className="main-holder grey lighten-5 switcher-section">
            {!selectedClass &&
              <ListPage
                classes={this.state.classes}
                onHandleClassCard={this.onHandleClassCard}
                onCloneClass = {this.onCloneClass}
                onDeleteClass = {this.onDeleteClass}
                onSaveNewClass = {this.onAddNewClass}
                onSaveClassChanges = {this.onSaveClassChanges}
              />
            }
            {selectedClass && <StatusPage />}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Classes;
