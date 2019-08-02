import React from 'react';
import PropTypes from 'prop-types';
import DetailTestScorePage from '../DetailTestScorePage';
import TestScoreNavBar from '../DetailTestScorePage/components/TestScoreNavBar';
import DetailTestAnswerSheetComplete from '../DetailTestAnswerSheetComplete';

class TestSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'scores',
    }
  }

  onSetActivePage = (active) => this.setState({ active });

  renderCurrentPage = () => {
    const { active } = this.state;
    const { test } = this.props;
    if (active === 'scores') {
      return <DetailTestScorePage test={test} />;
    }
    if (active === 'answerSheet') {
      return <DetailTestAnswerSheetComplete testScoreDetails={test.testScoreDetails}/>;
    }
    return null;
  }

  render(){
    const { active } = this.state;
    return(
      <React.Fragment>
       <TestScoreNavBar active={active} onSetActivePage={this.onSetActivePage}/>
      <div className="content-section">
        <div className="content-section-holder">
          {this.renderCurrentPage()}
        </div>
      </div>
      </React.Fragment>
    )
  }
}

TestSections.propTypes = {
  test: PropTypes.object.isRequired,
}

export default TestSections