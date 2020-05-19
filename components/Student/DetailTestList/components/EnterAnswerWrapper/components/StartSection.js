import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";

class StartReadingTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleProblems: [],
    };
  }

  componentWillReceiveProps = nextProps => {
    const { testSection } = nextProps;

    if (!testSection) return;
    const updatedProblems = update(this.state.sampleProblems, {
      $set: testSection.problems.problems,
    });
    this.setState({
      sampleProblems: updatedProblems,
    });
  };

  mapProblems = () => {
    const { sampleProblems } = this.state;
    return sampleProblems.map((problem, index) => (
      <li className="answers-list-holder" key={index}>
        <ul className="answer-list">
          <li>
            <span className="badge-circle badge-circle-bordered">A</span>
          </li>
          <li>
            <span
              className="badge-circle badge-circle-bordered"
              style={{
                color: "#fff",
                borderColor: "#19b4e9",
                backgroundColor: "#19b4e9",
              }}
            >
              B
            </span>
          </li>
          <li>
            <span className="badge-circle badge-circle-bordered">C</span>
          </li>
          <li>
            <span className="badge-circle badge-circle-bordered">D</span>
          </li>
        </ul>
      </li>
    ));
  };

  render() {
    const { open, onSetActivePage, testSection } = this.props;
    return (
      <React.Fragment>
        {open && testSection.problems && (
          <div className="tabs-content">
            <div id="tab_reading" className="tab-content">
              <div className="content-section content-section-simulated">
                <div className="content-section-holder">
                  <div className="card-full-height card-student card-main-full card">
                    <div className="card-content">
                      <div className="custom-form blured-effect">
                        <div className="jcf-scrollable no-border height-window">
                          <ol className="answers-list answers-list-columns">
                            {this.mapProblems()}
                          </ol>
                        </div>
                      </div>
                      <div className="starting-block">
                        <div className="holder">
                          <span className="title">
                            This section has {testSection ? testSection.problems.problems.length : "0"} questions and is {testSection ? testSection.problems.time_limit : "0"} minutes
                            total
                          </span>
                          <a
                            onClick={() =>
                              onSetActivePage("showInCompleteTest")
                            }
                            className="btn btn-xlarge waves-effect waves-light bg-blue"
                          >
                            Begin Section
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

StartReadingTest.propTypes = {
  open: PropTypes.bool.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
  testSection: PropTypes.object.isRequired,
};

export default StartReadingTest;
