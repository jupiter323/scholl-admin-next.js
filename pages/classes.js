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
