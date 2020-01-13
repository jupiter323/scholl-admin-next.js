import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import { Sticky } from "react-sticky";
import AccountPage from "../AccountPage";
import DetailSummaryPage from "../DetailSummaryPage";
import DetailWorksheetPage from "../DetailWorksheetPage";
import DetailLessonList from "../DetailLessonList";
import DetailTestList from "../DetailTestList";
import LessonDetailAnswerSheet from "../LessonDetailAnswerSheet";
import StudentNavBar from "../components/StudentNavBar";
import ScoredTestListPage from "../ScoredTestListPage";
import SessionCalendar from "../Calendar";

import {
  makeSelectAssignLessonsModalOpen,
  makeSelectAssignWorkSheetsModalOpen,
  makeSelectIsVisibleTopBar,
} from "../index/selectors";

import {
  setIsVisibleTopBar,
} from '../index/actions';

import sampleSelectedStudent from '../../utils/sampleSelectedStudent';

class IndividualStudentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "summary",
      activationDropdownOpen: false,
      licenseCode: "",
    };
  }

  componentDidMount(){
    const { onSetIsVisibleTopBar,isVisibleTopBar } = this.props;
    if(!isVisibleTopBar){
        onSetIsVisibleTopBar(true);
    }
  }

  onToggleActivationDropdown = () =>
    this.setState(({ activationDropdownOpen }) => ({
      activationDropdownOpen: !activationDropdownOpen,
    }));

  onSetActivePage = activePage => this.setState({ activePage });

  onHandleDetailsChange = (name, event) =>
    this.setState({ [name]: event.target.value });

  renderCurrentPage = () => {
    const { activePage } = this.state;
    //The api data is not enough for now,so we are using dummy data for selected student detail
    // const { student } = this.props;
    const student = sampleSelectedStudent;
    if (activePage === "summary") {
      return <DetailSummaryPage user={student} />;
    }
    if (activePage === "account") {
      return <AccountPage user={student} />;
    }
    if (activePage === "lessons") {
      return <DetailLessonList user={student} />;
    }
    if (activePage === "worksheets") {
      return <DetailWorksheetPage user={student} />;
    }
    if (activePage === "answer-sheet") {
      return <LessonDetailAnswerSheet />;
    }
    if (activePage === "test") {
      return <DetailTestList user={student} />;
    }
    if (activePage === "scored-tests") {
      return <ScoredTestListPage />;
    }
    if (activePage === "calendar") {
      return <SessionCalendar />;
    }
    return null;
  };
  render() {
    const {
      onRedirectToStudentPage,
      student: {
        active,
        studentInformation: { firstName, lastName },
      },
    } = this.props;
    const { activePage, activationDropdownOpen, licenseCode } = this.state;
    const { assignLessonsModalOpen, assignWorkSheetsModalOpen,isVisibleTopBar } = this.props;
    return (
      <React.Fragment>
        <Choose>
          <When
            condition={!assignLessonsModalOpen && !assignWorkSheetsModalOpen && isVisibleTopBar}
          >
            <Sticky>
              {({ style }) => (
                <div
                  className="title-row card-panel"
                  style={{ ...style, zIndex: 1999 }}
                >
                  <div className="mobile-header">
                    <a
                      href="#"
                      data-target="slide-out"
                      className="sidenav-trigger"
                    >
                      <i className="material-icons">menu</i>
                    </a>
                  </div>
                  <nav className="breadcrumb-holder">
                    <div className="nav-wrapper ">
                      <a
                        href="#!"
                        className="breadcrumb"
                        onClick={onRedirectToStudentPage}
                      >
                        &lt; Students
                      </a>
                    </div>
                  </nav>
                  <h2 className="h1 white-text">
                    <span className="heading-holder">
                      <i className="icon-student"></i>
                      <span className="heading-block">
                        {firstName} {lastName}
                      </span>
                    </span>
                  </h2>
                  <StudentNavBar
                    activePage={activePage}
                    onSetActivePage={this.onSetActivePage}
                  />
                  <div className="activate-block">
                    <Choose>
                      <When condition={active}>
                        <a
                          href="#"
                          className="waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"
                        >
                          <b className="btn-text visible-lg">
                            Account Activated
                          </b>{" "}
                          <i className="icon-unlock"></i>
                        </a>
                      </When>
                      <Otherwise>
                        <a
                          href="#"
                          onClick={this.onToggleActivationDropdown}
                          className="waves-effect btn btn-orange btn-account_inactive dropdown-trigger"
                          data-target="dropdown_activate"
                        >
                          <b className="btn-text visible-lg">
                            Activate Account
                          </b>{" "}
                          <i className="icon-key"></i>
                        </a>
                      </Otherwise>
                    </Choose>
                    <div
                      id="dropdown_activate"
                      className="dropdown-content"
                      style={
                        activationDropdownOpen
                          ? { display: "block", opacity: "1" }
                          : {}
                      }
                    >
                      <div className="card-panel">
                        <div className="title-block">
                          <div className="h3">Ready to begin your course?</div>
                          <div className="subtitle">
                            Please enter a valid license code below.
                          </div>
                        </div>
                        <div className="input-field">
                          <input
                            type="text"
                            value={licenseCode}
                            id="license-code"
                            onChange={event =>
                              this.onHandleDetailsChange("licenseCode", event)
                            }
                          />
                          <label className="label" htmlFor="license_code">
                            License Code
                          </label>
                        </div>
                        <div className="btn-holder center-align">
                          <button className="btn btn-blue" type="submit">
                            Activate
                          </button>
                        </div>
                        <div className="text-block center-align">
                          <p>
                            If you need license codes, you can get them here:{" "}
                            <a
                              href="#"
                              className="waves-effect waves-light btn-small btn-blue"
                            >
                              Purchase Licenses
                            </a>
                          </p>
                        </div>
                        <div className="text-block">
                          <p>*Note: </p>
                          <p>
                            We oﬀer discounted account licenses for students
                            enrolled in courses with 5 or more students in a
                            class or group format (as opposed to individual
                            instruction). These licenses provide the features
                            necessary to conduct a customized course for the
                            class as a whole, rather than for individual
                            students.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Sticky>
          </When>
        </Choose>
        {this.renderCurrentPage()}
      </React.Fragment>
    );
  }
}

IndividualStudentPage.propTypes = {
  student: PropTypes.object.isRequired,
  onRedirectToStudentPage: PropTypes.func.isRequired,
  isVisibleTopBar:PropTypes.bool,
  onSetIsVisibleTopBar:PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  assignLessonsModalOpen: makeSelectAssignLessonsModalOpen(),
  assignWorkSheetsModalOpen: makeSelectAssignWorkSheetsModalOpen(),
  isVisibleTopBar: makeSelectIsVisibleTopBar(),
});

function maptDispatchToProps(dispatch){
  return {
    onSetIsVisibleTopBar:(value) => dispatch(setIsVisibleTopBar(value)),
  }
}

const withConnect = connect(mapStateToProps, maptDispatchToProps);

export default compose(withConnect)(IndividualStudentPage);
