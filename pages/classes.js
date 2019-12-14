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
    const updatedClasses = update(prevClassState,{$push:[newClass]});
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
    const formattedClassRoom = {
      id:newId,
      name: className,
      start_date: Moment(start_date).format('YYYY-MM-DD'),
      end_date: Moment(end_date).format('YYYY-MM-DD'),
      duration: "string",
      exclude_from_statistics: isExclude,
      locations,
      instructors,
      students: "",
    };
    await createNewClassRoomApi(formattedClassRoom);
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
