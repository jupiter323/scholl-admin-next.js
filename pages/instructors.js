import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import InstructorNavBar from "../components/Instructor/components/InstructorNavBar";
import DetailManagementPage from "../components/Instructor/DetailManagementPage";
import DetailAccountPage from "../components/Instructor/DetailAccountPage";
import DetailSummaryPage from "../components/Instructor/DetailSummaryPage";

import sampleUser from "../components/Instructor/utils/sampleUser";

class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "account"
    };
  }

  onSetActivePage = active => this.setState({ active });

  renderCurrentPage = () => {
    const { active } = this.state;
    if (active === "summary") {
      return <DetailSummaryPage user={sampleUser} />;
    }
    if (active === "account") {
      return <DetailAccountPage user={sampleUser} />;
    }
    if (active === "managementSettings") {
      return <DetailManagementPage user={sampleUser} />;
    }
    return null;
  };

  render() {
    const { active } = this.state;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-3">
          <StickyContainer id="stickycontainer">
            <InstructorNavBar
              active={active}
              onSetActivePage={this.onSetActivePage}
            />
            {this.renderCurrentPage()}
          </StickyContainer>
        </div>
      </main>
    );
  }
}

export default Instructors;
