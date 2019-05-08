import React, { Component } from 'react';
import AccountPage from '../components/Student/AccountPage';
import DetailSummaryPage from '../components/Student/DetailSummaryPage';
import DetailWorksheetPage from '../components/Student/DetailWorksheetPage';
import DetailLessonList from '../components/Student/DetailLessonList';
import StudentNavBar from '../components/Student/components/StudentNavBar';

import sampleUser from '../components/Student/utils/sampleUser';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'worksheets',
      accountActivated: false,
      activationDropdownOpen: false,
      licenseCode: '',
    };
  }

  onToggleActivationDropdown = () => this.setState(({ activationDropdownOpen }) => ({ activationDropdownOpen: !activationDropdownOpen }))

  onSetActivePage = (active) => this.setState({ active })

  onHandleDetailsChange = (name, event) => this.setState({ [name]: event.target.value })

  renderCurrentPage = () => {
    const { active } = this.state;
    if (active === 'summary') {
      return <DetailSummaryPage user={sampleUser} />;
    }
    if (active === 'account') {
      return <AccountPage user={sampleUser} />;
    }
    if (active === 'lessons') {
      return <DetailLessonList user={sampleUser} />;
    }
    if (active === 'worksheets') {
      return <DetailWorksheetPage user={sampleUser} />;
    }
    return null;
  }

  render() {
    const { active, accountActivated, activationDropdownOpen, licenseCode } = this.state;
    return (
      <div className="instructor-page">
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
            <div className="main-holder grey lighten-5">
              <div className="title-row card-panel">
                <div className="mobile-header">
                  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
                <nav className="breadcrumb-holder">
                  <div className="nav-wrapper ">
                    <a href="#!" className="breadcrumb">&lt;  Students</a>
                  </div>
                </nav>
                <h2 className="h1 white-text">
                  <span className="heading-holder">
                    <i className="icon-student"></i>
                    <span className="heading-block">Arnold Studently</span>
                  </span>
                </h2>
                <StudentNavBar
                  active={active}
                  onSetActivePage={this.onSetActivePage}
                />
                <div className="activate-block">
                  <Choose>
                    <When condition={accountActivated}>
                      <a
                        href="#"
                        className="waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
                      >
                        <b className="btn-text visible-lg">Account Activated</b> <i className="icon-unlock"></i>
                      </a>
                    </When>
                    <Otherwise>
                      <a
                        href="#"
                        onClick={this.onToggleActivationDropdown}
                        className="waves-effect btn btn-orange btn-account_inactive dropdown-trigger"
                        data-target="dropdown_activate"
                      >
                        <b className="btn-text visible-lg">Activate Account</b> <i className="icon-key"></i>
                      </a>
                    </Otherwise>
                  </Choose>
                  <div id="dropdown_activate" className="dropdown-content" style={activationDropdownOpen ? { display: 'block', opacity: '1' } : {}}>
                    <div className="card-panel">
                      <div className="title-block">
                        <div className="h3">Ready to begin your course?</div>
                        <div className="subtitle">Please enter a valid license code below.</div>
                      </div>
                      <div className="input-field">
                        <input
                          type="text"
                          value={licenseCode}
                          id="license-code"
                          onChange={(event) => this.onHandleDetailsChange('licenseCode', event)}
                        />
                        <label className="label" htmlFor="license_code">License Code</label>
                      </div>
                      <div className="btn-holder center-align">
                        <button className="btn btn-blue" type="submit">Activate</button>
                      </div>
                      <div className="text-block center-align">
                        <p>If you need license codes, you can get them here: <a href="#" className="waves-effect waves-light btn-small btn-blue">Purchase Licenses</a></p>
                      </div>
                      <div className="text-block">
                        <p>*Note: </p>
                        <p>We oﬀer discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {this.renderCurrentPage()}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Students;
