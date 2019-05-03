import React, { Component } from 'react';
import DetailPage from '../components/Worksheet/DetailPage';

// eslint-disable-next-line react/prefer-stateless-function
class Worksheets extends Component {
  render() {
    return (
      <React.Fragment>
        <body className="instructor-page">
          <div className="wrapper">
            <aside id="slide-out" className="sidenav">
              <div className="sidenav-holder">
                <h1 className="white-text"><img src="images/instructor-logo.png" alt="" /></h1>
                <ul>
                  <li><a href="#"><i className="icon-speed"></i> Dashboard</a></li>
                  <li><a href="#"><i className="icon-student"></i> Students</a></li>
                  <li><a href="#"><i className="icon-instructors"></i> Instructors</a></li>
                  <li><a href="#"><i className="icon-members"></i> Classes</a></li>
                  <li><a href="#"><i className="icon-location"></i> Locations</a></li>
                  <li className="active"><a href="#"><i className="icon-sheets-w"></i> Worksheets</a></li>
                  <li><a href="#"><i className="icon-module"></i> Course Templates</a></li>
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
              <form action="#">
                <fieldset>
                  <div className="main-holder grey lighten-5 switcher-section">
                    <div className="title-row card-panel">
                      <div className="mobile-header">
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                      </div>
                      <nav className="breadcrumb-holder">
                        <div className="nav-wrapper ">
                          <a href="#!" className="breadcrumb">&lt; Custom Worksheet Library</a>
                        </div>
                      </nav>
                      <h2 className="h1 white-text">
                        <span className="heading-holder">
                          <i className="icon-sheets-w"></i>
                          <span className="heading-block">Some Custom Worksheet</span>
                        </span>
                      </h2>
                    </div>
                    <DetailPage />
                  </div>
                </fieldset>
              </form>
            </main>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default Worksheets;
