import React from "react";
import update from "immutability-helper";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import NavBar from "./common/NavBar";
import InCompleteTestSection from "./components/InCompleteSection";
import PreStartTestSection from "./components/StartSection";

import { addStudentAnswerToTestApi } from "../../../index/api";
import { makeSelectStudentSections } from "../../../index/selectors";
import { fetchStudentTestSections } from "../../../index/actions";

class EnterAnswerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewTest: true,
      startedTest: false,
      testSections: [],
      studentTestId: "",
      testReadingProblems: {},
      testWritingProblems: {},
      testMathCalcProblems: {},
      testMathNoCalcProblems: {},
      updatedState: {
        activeReadingSection: true,
        showInCompleteTest: false,
        activeWritingSection: false,
        activeMathNoCalcSection: false,
        activeMathWithCalcSection: false,
        activeSection: ""
      }
    };
  }

  componentDidMount = () => {
    const {
      onFetchStudentTestSections,
      sections,
      test: { student_test_id }
    } = this.props;
    if (sections.length === 0) {
      onFetchStudentTestSections(student_test_id);
    } else {
      this.onSetProblems(sections, student_test_id);
    }
  };

  componentWillReceiveProps = nextProps => {
    const { sections, student_test_id } = nextProps;
    if (sections.length !== 0) {
      this.onSetProblems(sections, student_test_id);
    }
  };

  onSetProblems = (sections, studentTestId) => {
    this.setState({
      testReadingProblems: sections[0],
      testWritingProblems: sections[1],
      testMathCalcProblems: sections[2],
      testMathNoCalcProblems: sections[3],
      testSections: sections,
      studentTestId
    });
  };

  onSetActivePage = name => {
    const currentSection = this.state.updatedState.activeSection;
    const updatedState = update(this.state.updatedState, {
      [name]: { $set: true },
      [currentSection]: { $set: false },
      activeSection: { $set: name }
    });
    this.setState({ updatedState });
    if (name === "showInCompleteTest") {
      this.setState({
        previewTest: false,
        startedTest: true
      });
    }
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer) => {
    const { studentTestId } = this.state;
    const postBody = {
      student_test_id: studentTestId,
      test_problem_id: test_problem_id,
      answer: answer
    };
    await addStudentAnswerToTestApi(postBody);
  };

  getCurrentTestProblems = () => {
    const { activeSection } = this.state.updatedState;
    const {
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems
    } = this.state;
    switch (activeSection) {
      case "activeReadingSection":
        return testReadingProblems;
      case "activeWritingSection":
        return testWritingProblems;
      case "activeMathWithCalcSection":
        return testMathCalcProblems;
      case "activeMathNoCalcSection":
        return testMathNoCalcProblems;
      default:
        return testReadingProblems;
    }
  };

  render() {
    const { startedTest, previewTest } = this.state;
    const {
      onCloaseAnswerWrapper,
      open,
      test: { test_description },
      onAddStudentAnswerToTest,
      onEditTest
    } = this.props;
    return (
      <React.Fragment>
        {open && (
          <div className="starting">
            <div className="main-holder grey lighten-5">
              <NavBar
                onCloaseAnswerWrapper={onCloaseAnswerWrapper}
                onSetActivePage={this.onSetActivePage}
                testDescription={test_description}
              />
              <PreStartTestSection
                open={previewTest}
                onSetActivePage={this.onSetActivePage}
                testSection={this.getCurrentTestProblems()}
              />
              <InCompleteTestSection
                open={startedTest}
                onAddStudentAnswerToTest={onAddStudentAnswerToTest}
                testSection={this.getCurrentTestProblems()}
                onStudentTestScore={onCloaseAnswerWrapper}
                onEditTest={onEditTest}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

EnterAnswerWrapper.propTypes = {
  onCloaseAnswerWrapper: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  test: PropTypes.object,
  onEditTest: PropTypes.func.isRequired,
  onAddStudentAnswerToTest: PropTypes.func.isRequired,
  onSetStudentTestSections: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  sections: makeSelectStudentSections()
});
function mapDispatchToProps(dispatch) {
  return {
    onFetchStudentTestSections: studentTestId => dispatch(fetchStudentTestSections(studentTestId))
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(EnterAnswerWrapper);