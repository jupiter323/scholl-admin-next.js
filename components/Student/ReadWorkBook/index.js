import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import update from 'immutability-helper';
import { setActiveShowPage, updateReadingProblemStatus, updateStudentUnits } from "../../index/actions";
import { makeSelectActiveSelectedLesson, makeSelectStudentUnits } from "../../index/selectors";

class ReadWorkBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // use initials to check against
      initials: [],
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <div
          className='card-modal card-main card switcher-section grey lighten-5 modal'
          style={{
            zIndex: "1003",
            display: "block",
            position: "absolute",
            top: "0",
            minHeight: "100%",
            minWidth: "100%",
          }}
        >
          <div className='header-row card-panel light-blue lighten-1 white-text'>
            <div className='card-panel-row row'>
              <div className='col s10'>
                <div className='header-holder'>
                  <div className='header-col'>
                    <div className='icon-col'>
                      <i className='icon-assign-section-reverse'></i>
                    </div>
                  </div>
                  <div className='header-col'>
                    <div className='card-panel-text'>
                      <h1 className='text-large'>{this.props.lesson.name}</h1>
                      <div className='text-small'>
                        p.{this.props.lesson.starting_page}
                        {this.props.lesson.ending_page > this.props.lesson.starting_page
                          ? `-${this.props.lesson.ending_page}`
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col s2 right-align'>
                <a className='close modal-close' onClick={this.onSetActivePage}>
                  <i className='icon-close-thin'></i>
                </a>
              </div>
            </div>
            <div className='header-row-block card-panel-row row'>
              <div className='col s3'>&nbsp;</div>
              <div className='col s9 right-align'>
                <div>
                  <span className='name'>DownloadPDF</span>
                </div>
              </div>
            </div>
          </div>
          <div className='content-section'>
            <div className='content-section-holder'>
              <div className='card-block' style={{ maxWidth: 450, margin: "0 auto" }}>
                <h3>
                  Read page(s) {this.props.lesson.starting_page}
                  {this.props.lesson.ending_page > this.props.lesson.starting_page
                    ? `-${this.props.lesson.ending_page}`
                    : ""}
                </h3>
                <div className='card'>
                  <div className='card-content'>
                    <h3>
                      I have read page(s) {this.props.lesson.starting_page}
                      {this.props.lesson.ending_page > this.props.lesson.starting_page
                        ? `-${this.props.lesson.ending_page}`
                        : ""}{" "}
                      in my course workbook and completed each of the excercise contained in those
                      pages, Futher,I understand that if i have not actually completed these
                      pages,it will be obviouse to my instructor who probably won't be happy.
                    </h3>
                    <div className='answers-list'>
                      <h2 style={{ float: "left", marginRight: 20 }}>Student's Initials:</h2>
                      <input type='text' className='answer-input' />
                    </div>
                    <div className='btn-holder right-align' style={{ marginTop: 20 }}>
                      <button
                        className='btn btn-large waves-light bg-blue'
                      >
                        Submit
                      </button>
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
  lesson: PropTypes.object,
  units: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  lesson: makeSelectActiveSelectedLesson(),
  units: makeSelectStudentUnits(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetActivePage: (activepage) => dispatch(setActiveShowPage(activepage)),
    onUpdateReadingProblemStatus: (body) => dispatch(updateReadingProblemStatus(body)),
    onUpdateStudentUnits: (updatedUnits) => dispatch(updateStudentUnits(updatedUnits)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ReadWorkBook);
