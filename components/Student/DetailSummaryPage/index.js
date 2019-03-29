import React from 'react';
import CourseProgress from './components/CourseProgress';
import OverdueWork from './components/OverdueWork';
import SummaryCards from './components/SummaryCards';
import TestScores from './components/TestScores';
import StrengthsAndWeaknesses from './components/StrengthsAndWeaknesses';

// eslint-disable-next-line react/prefer-stateless-function
class DetailSummaryPage extends React.Component {
  render() {
    return (
      <div className="content-section">
        <div className="container">
          <div className="cards-section">
            <div className="row d-flex justify-content-center mb-0">
              <CourseProgress />
              <OverdueWork />
            </div>
            <div className="row d-flex justify-content-center mb-0">
              <SummaryCards />
              <TestScores />
            </div>
          </div>
          <StrengthsAndWeaknesses />
        </div>
      </div>
    );
  }
}

export default DetailSummaryPage;
