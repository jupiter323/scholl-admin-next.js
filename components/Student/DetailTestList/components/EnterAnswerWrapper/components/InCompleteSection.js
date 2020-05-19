import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
import ProblemRow from "./ProblemRow";

class InCompleteReadingTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
    };
  }
  componentWillReceiveProps = nextProps => {
    const { testSection } = nextProps;
    if (!testSection || !testSection.hasOwnProperty('problems')) return;
    const updatedProblems = update(this.state.problems, {
      $set: testSection.problems.problems,
    });
    this.setState({
      problems: updatedProblems,
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

  render() {
    const {
      open,
      testSection: { problems },
      handleTestScore,
    } = this.props;
    return (
      <div>
        {open && (
          <React.Fragment>
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
                        onClick={() => handleTestScore(this.props.testSection)}
                      >
                        Score Test
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

InCompleteReadingTest.propTypes = {
  open: PropTypes.bool.isRequired,
  onAddStudentAnswerToTest: PropTypes.func.isRequired,
  testSection: PropTypes.object.isRequired,
  onStudentTestScore: PropTypes.func.isRequired,
  handleTestScore: PropTypes.func.isRequired,
};

export default InCompleteReadingTest;
