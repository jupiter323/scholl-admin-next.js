import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { StickyContainer, Sticky } from "react-sticky";
import ClassNavBar from "../components/ClassNavBar";
import TestSectionsPage from "../TestSectionsPage";
import DetailSummaryPage from "../DetailSummaryPage";
import DetailWorksheetPage from "../DetailWorksheetPage";
import SessionCalendar from "../Calendar";
import sampleClass from "../utils/sampleSummaryClass";

import { makeSelectAssignLessonsModalOpen, makeSelectAssignWorkSheetsModalOpen } from "../index/selectors";

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "summary",
    };
  }

  onSetActivePage = active => this.setState({ active });

  renderCurrentPage = () => {
    const { active } = this.state;
    if (active === "summary") {
      return <DetailSummaryPage currentClass={sampleClass} />;
    }
    if (active === "testSections") {
      return <TestSectionsPage />;
    }
    if (active === "worksheets") {
      return <DetailWorksheetPage />;
    }
    if (active == "calendar") {
      return <SessionCalendar />;
    }
    return null;
  };

  render() {
    const { active } = this.state;
    const { assignLessonsModalOpen, assignWorkSheetsModalOpen } = this.props;
    return (
      <StickyContainer>
        <Choose>
          <When condition={!assignLessonsModalOpen && !assignWorkSheetsModalOpen}>
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
                      <a href="#!" className="breadcrumb">
                        &lt; Classes
                      </a>
                    </div>
                  </nav>
                  <h2 className="h1 white-text">
                    <span className="heading-holder">
                      <i className="icon-members"></i>
                      <span className="heading-block">Some Class in June</span>
                    </span>
                  </h2>
                  <ClassNavBar
                    onSetActivePage={this.onSetActivePage}
                    active={active}
                  />
                </div>
              )}
            </Sticky>
          </When>
        </Choose>
        {this.renderCurrentPage()}
      </StickyContainer>
    );
  }
}

StatusPage.propTypes = {
  assignLessonsModalOpen: PropTypes.bool,
  assignWorkSheetsModalOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  assignLessonsModalOpen: makeSelectAssignLessonsModalOpen(),
  assignWorkSheetsModalOpen: makeSelectAssignWorkSheetsModalOpen(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(StatusPage);
