import React, { Component } from 'react';
import DetailPage from '../components/Worksheet/DetailPage';

// eslint-disable-next-line react/prefer-stateless-function
class Worksheets extends Component {
  render() {
    return (
      <main id="main" role="main">
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
      </main>
    );
  }
}

export default Worksheets;
