import React from 'react';
import PropTypes from 'prop-types';
import AccountPage from '../AccountPage';
import DetailSummaryPage from '../DetailSummaryPage';
import DetailWorksheetPage from '../DetailWorksheetPage';
import DetailLessonList from '../DetailLessonList';
import StudentNavBar from '../components/StudentNavBar';

class IndividualStudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'worksheets',
      accountActivated: false,
      activationDropdownOpen: false,
      licenseCode: '',
    };
  }
  onToggleActivationDropdown = () => this.setState(({ activationDropdownOpen }) => ({ activationDropdownOpen: !activationDropdownOpen }))

  onSetActivePage = (activePage) => this.setState({ activePage })

  onHandleDetailsChange = (name, event) => this.setState({ [name]: event.target.value })

  renderCurrentPage = () => {
    const { activePage } = this.state;
    const { student } = this.props
    if (activePage === 'summary') {
      return <DetailSummaryPage user={student} />;
    }
    if (activePage === 'account') {
      return <AccountPage user={student} />;
    }
    if (activePage === 'lessons') {
      return <DetailLessonList user={student} />;
    }
    if (activePage === 'worksheets') {
      return <DetailWorksheetPage user={student} />;
    }
    return null;
  }
  render() {
    const { onRedirectToStudentPage, student: {studentInformation: {firstName, lastName}}} = this.props
    const { activePage, accountActivated, activationDropdownOpen, licenseCode } = this.state;
    return (
      <React.Fragment>

          <div className="title-row card-panel">
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>

          <nav className="breadcrumb-holder">
            <div className="nav-wrapper ">
              <a
               href="#!"
               className="breadcrumb"
               onClick={onRedirectToStudentPage}
               >
              &lt;  Students
              </a>
            </div>
          </nav>
          <h2 className="h1 white-text">
            <span className="heading-holder">
              <i className="icon-student"></i>
              <span className="heading-block">{firstName} {lastName}</span>
            </span>
          </h2>
            <StudentNavBar
              activePage={activePage}
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
             </React.Fragment>

    );
  }

}

IndividualStudentPage.propTypes = {
  student: PropTypes.object.isRequired,
  onRedirectToStudentPage: PropTypes.func.isRequired,
}
export default IndividualStudentPage;