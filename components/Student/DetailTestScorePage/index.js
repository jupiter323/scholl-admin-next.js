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
import { setActiveTestScores } from '../index/actions';
import { fetchStudentTestScoreApi } from '../index/api';

class DetailTestScorePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.onRef(this);
  };
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  delay = () => {
    const { scores, test: { student_test_id }, onGetTestScores, activeStudent: { id } } = this.props;
    return new Promise(async resolve => {
      if (!scores) {
        const postBody = { studentId: id, student_test_id };
        onGetTestScores(postBody);
      }
      resolve();
    });
  };

  // getScoresByStudentTest = async test => {
  //   const { student_test_id } = test;
  //   const { activeStudent: { id } } = this.props;
  //   const formattedTestScores = await fetchStudentTestScoreApi(id, student_test_id);
  //   return formattedTestScores.data;
  // };

  getComponentImages = () =>
    new Promise(resolve => {
      this.delay().then(() => {
        setTimeout(async () => {
          const { getTargetImage } = this.props;
          const [scoresImages] = await Promise.all([
            getTargetImage(document.getElementById('scoresRef')),
          ]);
          resolve(scoresImages);
        }, 500);
      });
    });

  loadingSpinner = () => (
    <div className="overlay-spinning">
      <h1>Fetching Scores...</h1>
      <div className="spinning" />
    </div>
  )

  render() {
    const { scores, test } = this.props;
    if (!scores) {
      return this.loadingSpinner();
    }
    if (scores.student_test_id !== test.student_test_id) {
      return this.loadingSpinner();
    }
    const { subjects, cross_test_score, sub_section_score, essay } = scores;
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

function mapDispatchToProps(dispatch) {
  return {
    onSetScores: scores => dispatch(setActiveTestScores(scores)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestScorePage);
