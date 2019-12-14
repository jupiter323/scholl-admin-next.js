import React from "react";
import StatusPage from "../components/Classes/StatusPage";
import ListPage from "../components/Classes/ListPage";
import sampleClass from "../components/Classes/utils/sampleClass";

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedClass: null,
      classes: sampleClass
    };
  }

  onHandleClassCard = (index) => {
    const { classes } = this.state;
    this.setState({ selectedClass: classes[index] });
  };

  onAddNewClass = (newClass) => {

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
