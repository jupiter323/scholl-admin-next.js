import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
import NavBar from "./common/NavBar";
import InCompleteTestSection from "./components/InCompleteSection";
import PreStartTestSection from "./components/StartSection";

import {
  addStudentAnswerToTestApi,
  fetchProblemsByStudentTestIdApi
} from "../../../index/api";

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

  componentDidMount = async () => {
    const { test: { student_test_id }} = this.props;
    const { formattedData } = await fetchProblemsByStudentTestIdApi(student_test_id);
    this.setState({
      testReadingProblems: formattedData.test.sections[0],
      testWritingProblems: formattedData.test.sections[1],
      testMathCalcProblems: formattedData.test.sections[2],
      testMathNoCalcProblems: formattedData.test.sections[3],
      testSections: formattedData.test.sections,
      studentTestId: formattedData.student_test_id
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
    const {
      startedTest,
      previewTest
    } = this.state;
    const {
      onCloaseAnswerWrapper,
      open,
      test: { test_description },
      onAddStudentAnswerToTest
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
  onAddStudentAnswerToTest:PropTypes.func.isRequired,
};

export default EnterAnswerWrapper;
