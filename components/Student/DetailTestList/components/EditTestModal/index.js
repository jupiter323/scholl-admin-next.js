/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import TestVersionPage from '../TestVersionPage';



class EditTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage:'testversion',
    };
  }

  renderCurrentPage = () => {
    const { activePage } = this.state;
    const { test,user,onDeleteTest,onSaveTestChanges } = this.props;
    if (activePage === "testversion") {
      return  <TestVersionPage 
                  test = {test}
                  user = {user}
                  onDeleteTest = {onDeleteTest}
                  onSaveTestChanges = {onSaveTestChanges}
              />;
    }
    return null;
  };

  render() {
    const { test, user } = this.props;
    const { title, version: testVersion } = test;
    const { studentInformation: { firstName, lastName } } = user;
    return (
        <div className="wrapper">
        <div className="card-modal card-main card switcher-section grey lighten-5 modal" style={{ zIndex: '1003', display: 'block', position: 'absolute', top: '0', minHeight:'100%',minWidth: '100%' }}>
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="icon-col col s1">
                <i className="icon-letter-a"></i>
              </div>
              <div className="col s9">
                <div className="card-panel-text center-align">
                  <div className="text-xlarge">{title}</div>
                  <div className="text-small">Version: SAT Practice Test #{testVersion}</div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row">&nbsp;</div>
              </div>
            </div>
            <div className="header-row-block card-panel-row row">
              <div className="col s3">&nbsp;</div>
              <div className="col s9 right-align">
                <div><span className="name">{firstName} {lastName}</span></div>
              </div>
            </div>
          </div>
          <div className="nav-header white">
            <div className="nav-additional">
              <ul className="menu-additional">
                <li className="col s3"><a className="active" href="#">Scores</a></li>
                <li className="col s3"><a href="#">Answer Sheet</a></li>
                <li className="col s3"><a href="#">Strengths &amp; Weaknesses</a></li>
                <li className="col s3"><a href="#">Test Version</a></li>
                <li className="menu-special col s3"><a href="#">Download Score Report <i className="icon-download-file"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="content-section">
            <div className="content-section-holder">
              {this.renderCurrentPage()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditTestModal.propTypes = {
  test: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onDeleteTest: PropTypes.func.isRequired,
  onSaveTestChanges: PropTypes.func.isRequired,
}

export default EditTestModal;
