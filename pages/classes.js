import React, { Component } from "react";
import StatusView from "../components/Class/StatusView";

class Classes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <main id="main" role="main">
          <div className="main-holder grey lighten-5 switcher-section">
            <StatusView />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Classes;
