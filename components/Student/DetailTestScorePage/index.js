import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TotalScoreCard from './components/TotalScoreCard';
import SectionScoreCard from './components/SectionScoreCard';
import TestScoreCard from './components/TestScoreCard';
import EssayScoresCard from './components/EssayScoresCard';
import CrossTestScoresCard from './components/CrossTestScoresCard';
import SubScoresCard from './components/SubscoresCard';
import { makeSelectActiveTestScores, makeSelectActiveStudent } from '../index/selectors';

class DetailTestScorePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  getComponentImages = async () => {
    const { getTargetImage } = this.props;
    const [scoresImages] = await Promise.all([
      getTargetImage(document.getElementById('scoresRef')),
    ]);
    return scoresImages;
  };

  render() {
    const {scores, test} = this.props
    console.log('log: scores', scores);
    console.log('log: test', test);
    if (!scores) return (<div>Loading...</div>);
    if (scores.student_test_id !== test.student_test_id) return (<div>Loading...</div>);
    const { subjects, cross_test_score, sub_section_score, essay } = scores;
    console.log('log: subjects', subjects);
    return (
      <div className="container" id="scoresRef">
        <div className="cards-section">
          <div className="d-flex-content same-height justify-center row mb-0">
            <TotalScoreCard subjectScores={subjects} />
            {/* <SectionScoreCard sectionScores={sub_section_score} /> */}
          </div>
          <div className="d-flex-content same-height justify-center row mb-0">
            <TestScoreCard subjectScores={subjects} />
            <EssayScoresCard essayScores={essay} />
          </div>
          <div className="d-flex-content justify-center row mb-0">
            <CrossTestScoresCard crossTestScores={cross_test_score} />
            <SubScoresCard subScores={sub_section_score} />
          </div>
        </div>
      </div>
    );
  }
}

DetailTestScorePage.propTypes = {
  getTargetImage: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  scores: makeSelectActiveTestScores(),
  activeStudent: makeSelectActiveStudent(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(DetailTestScorePage);
