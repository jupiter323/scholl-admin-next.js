import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ClassNavBar from "../components/ClassNavBar";
import TestSectionsPage from "../TestSectionsPage";
import DetailSummaryPage from "../DetailSummaryPage";
import DetailWorksheetPage from "../DetailWorksheetPage";
import SessionCalendar from '../../common/Calendar';
import sampleClass from "../utils/sampleSummaryClass";


import AssignLessonModal from "../../Dashboard/components/Modals/AssignLessonModal";

class StatusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "summary",
      assignLessonsModalOpen:false,
      openAssignWorkSheetModal:false,
      modalDate: null,
      rows: [],
    };
  }

  onSetActivePage = active => this.setState({ active });

  onToggleAssignLessonsModal = (event = null, modalDate = null) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(({ assignLessonsModalOpen }) => ({
      assignLessonsModalOpen: !assignLessonsModalOpen,
      modalDate,
      assignDropdownIsOpen: false
    }));
  };

  onAssignLessons = (lessons, date) => {
    const { rows } = this.state;
    const updatedDate = rows.filter(row => row.date === date)[0];
    const updatedDateIndex = rows.indexOf(updatedDate);
    updatedDate.lessons.push(...lessons);
    const updatedRows = update(rows, {
      $splice: [[updatedDateIndex, 1, updatedDate]]
    });
    this.setState({ rows: updatedRows });
    this.onToggleAssignLessonsModal();
  };

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
    if ( active == "calendar") {
      return <SessionCalendar
                onToggleAssignLessonsModal = {this.onToggleAssignLessonsModal}
              />;
    }
    return null;
  };

  render() {
    const { active,assignLessonsModalOpen,openAssignWorkSheetModal,modalDate } = this.state;
    return (
      <StickyContainer>
         <If condition = {!assignLessonsModalOpen && !openAssignWorkSheetModal}>
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
        </If>
        {!assignLessonsModalOpen && !openAssignWorkSheetModal && this.renderCurrentPage()}
        {assignLessonsModalOpen && 
          <AssignLessonModal
            modalDate={modalDate}
            open={assignLessonsModalOpen}
            onClose={this.onToggleAssignLessonsModal}
            onAssignLessons={this.onAssignLessons}
          />
        }
      </StickyContainer>
    );
  }
}

export default StatusPage;
