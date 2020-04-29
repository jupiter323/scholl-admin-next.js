import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { setOpenActivePage, setIsVisibleTopBar } from "../index/actions";
import { makeSelectActiveLesson, makeSelectUnitFilterOptions } from "../index/selectors";
import moment from "moment";


class ReadWorkBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // use initials to check against
      initials: [],
    };
  }
    onSetActivePage = () => {
      const { onSetOpenActivePage, onSetIsVisibleTopBar } = this.props;
      onSetIsVisibleTopBar(true);
      onSetOpenActivePage("");
    }

    getUnitNameById = () => {
      const { units } = this.props;
      if (units && units.length !== 0) {
        const unitIds = units.map(unit => unit.value);
        const currentIndex = unitIds.findIndex(this.getUnitIndexMatchedUnitId);
        const currentUnit = units[currentIndex];
        return currentUnit.label;
      }
      return "Undefind UnitName";
    }

    getUnitIndexMatchedUnitId = unitId => unitId === this.props.lesson.unit_id;

    render() {
      const { user,
        lesson: { name, starting_page, ending_page, completed_at, assignTime, assignment_date, due_date, dueTime, description } } = this.props;
      const { studentInformation: { firstName, lastName } } = user;
      return (
        <div className="wrapper">
          <div
            className="card-modal card-main card switcher-section grey lighten-5 modal"
            style={{
              zIndex: "1003",
              display: "block",
              position: "absolute",
              top: "0",
              minHeight: "100%",
              minWidth: "100%",
            }}
          >
            <div className="header-box card-panel light-blue lighten-1 white-text">
              <div className="header-flex-row row mb-0" style={{ width: '100%' }}>
                <div className="col s12 m7 xl8">
                  <div className="header-holder">
                    <div className="header-col">
                      <div className="icon-col">
                        <i className="icon-books" />
                        <span className="text-icon">Lesson</span>
                      </div>
                    </div>
                    <div className="header-col">
                      <div className="card-panel-text">
                        <div className="text-small">{this.getUnitNameById()}</div>
                        <h1 className="text-large">{name}</h1>
                        <div className="text-small">p.{starting_page}{ending_page > starting_page ? `-${ending_page}` : ""}(Reading)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s9 m4 xl3 position-mobile-left">
                  <div className="card-panel-text">
                    <h2 className="text-large">{firstName} {lastName}</h2>
                    {assignment_date && <dl className="text-small dl-horizontal">
                      <dt>Assigned:</dt>
                      <dd><time dateTime="2019-01-06T08:00">{`${moment(assignment_date).format("MM/DD/YY")} at ${moment(assignTime).format('hh:mm')}`}</time></dd>
                    </dl>}
                    {due_date && <dl className="text-small dl-horizontal">
                      <dt>Due:</dt>
                      <dd><time dateTime="2019-01-06T16:00">{`${moment(due_date).format("MM/DD/YY")} at ${moment(dueTime).format('hh:mm')}`}</time></dd>
                    </dl>}
                    {completed_at &&
                                        <dl className="text-small dl-horizontal">
                                          <dt>Completed:</dt>
                                          <dd><time dateTime="2019-09-01T06:59">{`${moment(completed_at).format("MM/DD/YY")} at ${moment(completed_at).format('hh:mm')}`}</time></dd>
                                        </dl>}
                  </div>
                </div>
                <div className="col s2 m1 right-align position-mobile-right">
                  <div className="dropdown-block">
                    <a className="dropdown-trigger btn" href="#" data-target="dropdown_top"><i className="material-icons dots-icon">more_vert</i></a>
                  </div>
                  <div className="close-block">
                    <a href="#" className="modal-close close" onClick={this.onSetActivePage}><i className="icon-close-thin" /></a>
                  </div>
                </div>
              </div>
              <div className="header-row-block card-panel-row row">
                <div className="col s12 right-align">
                  <h2 className="text-large">DownloadPDF</h2>
                </div>
              </div>
            </div>
            <div className="content-section">
              <div className="content-section-holder">
                <div className="card-block" style={{ maxWidth: 450, margin: "0 auto" }}>
                  <h3>
                                    Read page(s) {starting_page}
                    {ending_page > starting_page
                      ? `-${ending_page}`
                      : ""}
                  </h3>
                  <div className="card">
                    <div className="card-content">
                      <h3>
                                            I have read page(s) {starting_page}{ending_page > starting_page ? `-${ending_page}` : ""}
                        {description}
                      </h3>
                      <div className="answers-list">
                        <h2 style={{ float: "left", marginRight: 20 }}>Student's Initials:</h2>
                        <input type="text" className="answer-input" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

ReadWorkBook.propTypes = {
  onSetActivePage: PropTypes.func.isRequired,
  onSetIsVisibleTopBar: PropTypes.func.isRequired,
  lesson: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lesson: makeSelectActiveLesson(),
  units: makeSelectUnitFilterOptions(),
});

const mapDispatchToProps = (dispatch) => ({
  onSetOpenActivePage: (activepage) => dispatch(setOpenActivePage(activepage)),
  onSetIsVisibleTopBar: (value) => dispatch(setIsVisibleTopBar(value)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ReadWorkBook);
