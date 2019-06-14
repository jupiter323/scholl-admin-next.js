import React from 'react';
import PropTypes from 'prop-types';

import ClassAverages from './components/ClassAverages';
import ScoreImprovement from './components/ScoreImprovement';
import StudentsWhoHave from './components/StudentsWhoHave';
import StrengthsAndWeaknesses from './components/StrengthsAndWeaknesses';

// eslint-disable-next-line react/prefer-stateless-function
class DetailSummaryPage extends React.Component {
  render() {
    const { currentClass: { classAverages, scoreImprovement, studentsWhoHave, strengthsAndWeaknesses } } = this.props;
    return (
      <div className="content-section">
        <div className="content-section-holder">
          <div className="container">
            <div className="cards-section">
              <div className="dashboard-section">
                <ClassAverages state={classAverages} />
                <ScoreImprovement state={scoreImprovement} />
                <StudentsWhoHave state={studentsWhoHave} />
                <StrengthsAndWeaknesses state={strengthsAndWeaknesses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailSummaryPage.propTypes = {
  currentClass: PropTypes.object.isRequired,
};

export default DetailSummaryPage;
