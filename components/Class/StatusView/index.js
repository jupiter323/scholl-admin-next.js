import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ClassNavBar from "../components/ClassNavBar";
import TestSectionsPage from "../TestSectionsPage";
import DetailSummaryPage from "../DetailSummaryPage";
import DetailWorksheetPage from "../DetailWorksheetPage";

import sampleClass from "../utils/sampleClass";

class StatusView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "summary"
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
    return null;
  };

  render() {
    const { active } = this.state;
    return (
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <div
              className="title-row card-panel"
              style={{ ...style, zIndex: 1999 }}
            >
              <div className="mobile-header">
                <a href="#" data-target="slide-out" className="sidenav-trigger">
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
        {this.renderCurrentPage()}
        <div className="add-btn-block dropdown-small">
          <a
            href="#"
            className="dropdown-trigger waves-effect waves-teal btn add-btn"
            data-target="dropdown_assign_selected"
          >
            <i className="material-icons">add</i> Assign Test Section
          </a>
          <ul
            id="dropdown_assign_selected"
            className="dropdown-content dropdown-small"
          >
            <li>
              <a href="#">From Saved</a>
            </li>
            <li>
              <a href="#">Create New</a>
            </li>
          </ul>
        </div>
      </StickyContainer>
    );
  }
}

export default StatusView;
