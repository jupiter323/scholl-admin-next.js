import React from 'react';
import PropTypes from 'prop-types';

import CourseProgress from './components/CourseProgress';
import OverdueWork from './components/OverdueWork';
import SummaryCards from './components/SummaryCards';
import TestScores from './components/TestScores';
import StrengthsAndWeaknesses from './components/StrengthsAndWeaknesses';

// eslint-disable-next-line react/prefer-stateless-function
class DetailSummaryPage extends React.Component {
  render() {
    const { user: { active, courseProgress, overdueWork, summary, testScores, strengthsAndWeaknesses } } = this.props;
    return (
      <div className="content-section">
        <div className="container">
          <div className="cards-section">
            <div className="row d-flex justify-content-center mb-0">
              <CourseProgress active={active} state={courseProgress} />
              <OverdueWork active={active} state={overdueWork} />
            </div>
            <div className="row d-flex justify-content-center mb-0">
              <SummaryCards active={active} state={summary} />
              <TestScores active={active} state={testScores} />
            </div>
          </div>
          <StrengthsAndWeaknesses active={active} state={strengthsAndWeaknesses} />
        </div>
      </div>
    );
  }
}

DetailSummaryPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailSummaryPage;
