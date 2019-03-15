import React, { Component } from 'react';

import InstructorNavBar from '../components/Instructor/components/InstructorNavBar';
import DetailManagementPage from '../components/Instructor/DetailManagementPage';
import DetailAccountPage from '../components/Instructor/DetailAccountPage';
import DetailSummaryPage from '../components/Instructor/DetailSummaryPage';

import sampleUser from '../components/Instructor/utils/sampleUser';

class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'account',
    };
  }

  onSetActivePage = (active) => this.setState({ active })

  renderCurrentPage = () => {
    const { active } = this.state;
    if (active === 'summary') {
      return <DetailSummaryPage user={sampleUser} />;
    }
    if (active === 'account') {
      return <DetailAccountPage user={sampleUser} />;
    }
    if (active === 'managementSettings') {
      return <DetailManagementPage user={sampleUser} />;
    }
    return null;
  }

  render() {
    const { active } = this.state;
    return (
      <body className="instructor-page">
        <div className="wrapper">
          <aside id="slide-out" className="sidenav">
            <div className="sidenav-holder">
              <h1 className="white-text"><img src="images/instructor-logo.png" alt="" /></h1>
              <ul>
                <li className="active"><a href="#"><i className="icon-speed"></i> Dashboard</a></li>
                <li><a href="#"><i className="icon-student"></i> Students</a></li>
                <li><a href="#"><i className="icon-instructors"></i> Instructors</a></li>
                <li><a href="#"><i className="icon-location"></i> Locations</a></li>
                <li><a href="#"><i className="icon-help"></i> Help</a></li>
              </ul>
              <a href="#" className="log-block white-text">
                <div className="text">
                  <div className="block">Log Out</div>
                  <div className="block">Joe Smith</div>
                </div>
                <div className="img-block"><img src="images/img-user.jpg" className="circle" alt="" /></div>
              </a>
            </div>
          </aside>
          <main id="main" role="main">
            <div className="main-holder grey lighten-3">
              <InstructorNavBar
                active={active}
                onSetActivePage={this.onSetActivePage}
              />
              {this.renderCurrentPage()}
            </div>
          </main>
        </div>
      </body>
    );
  }
}

export default Instructors;
