import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
import ProblemRow from "./ProblemRow";
import NavBar from "./NavBar";

class StudentAnswersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      updatedState: {
        showReadingSection: true,
        showInCompleteReading: false,
        showWritingSection: false,
        showMathNoCalcSection: false,
        showMathWithCalcSection: false,
        activeSection: "showReadingSection"
      }
    };
  }

  componentDidMount() {
    const { testSection } = this.props;
    const updatedProblems = update(this.state.problems, {
      $set: testSection.problems
    });
    this.setState({
      problems: updatedProblems
    });
  }
  componentWillReceiveProps = nextProps => {
    const { testSection } = nextProps;
    const updatedProblems = update(this.state.problems, {
      $set: testSection.problems
    });
    this.setState({
      problems: updatedProblems
    });
  };

  mapProblems = () =>
    this.state.problems.map((problem, index) => (
      <ProblemRow
        problem={problem}
        index={index}
        key={problem.test_problem_id}
        onAddStudentAnswerToTest={this.props.onAddStudentAnswerToTest}
      />
    ));

  onSetActivePage = name => {
    const currentSection = this.state.updatedState.activeSection;
    const updatedState = update(this.state.updatedState, {
      [name]: { $set: true },
      [currentSection]: { $set: false },
      activeSection: { $set: name }
    });
    this.setState({ updatedState });
  };

  render() {
    const {
      open,
      testSection: { problems },
      onActiveCompletedTestCard,
    } = this.props;
    return (
      <div>
        {open && (
          <React.Fragment>
            {/* <div className="starting">
              <main id="main" role="main">
                <div className="main-holder grey lighten-5">
                  <NavBar
                    onClose={onCloseStudentAnswerModal}
                    onSetActivePage={this.onSetActivePage}
                  /> */}
                  <div className="full-height-section">
                    <div className="content-section content-section-simulated">
                      <div className="content-section-holder">
                        <div className="card-full-height card-student card-main-full card">
                          <div className="card-content">
                            <div className="custom-form">
                              <div className="jcf-scrollable no-border height-window">
                                <ol
                                  className="answers-list answers-list-columns"
                                  style={{ marginBottom: "20px" }}
                                >
                                  {problems && this.mapProblems()}
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="btn-holder right-align">
                            <a
                              href="#"
                              className="btn btn-xlarge waves-effect waves-light bg-blue"
                              onClick={onActiveCompletedTestCard}
                            >
                              I’m Done
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </div>
              </main>
            </div> */}
          </React.Fragment>
        )}
      </div>
    );
  }
}

StudentAnswersModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddStudentAnswerToTest: PropTypes.func.isRequired,
  testSection: PropTypes.object.isRequired,
  onActiveCompletedTestCard:PropTypes.func.isRequired,
};

export default StudentAnswersModal;
