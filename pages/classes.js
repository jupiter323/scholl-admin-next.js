import React, { Component } from "react";
import StatusPage from "../components/Class/StatusPage";
import ListPage from '../components/Class/ListPage';


class Classes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <main id="main" role="main">
          <div className="main-holder grey lighten-5 switcher-section">
            {/* <StatusPage /> */}
            <ListPage/>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Classes;
