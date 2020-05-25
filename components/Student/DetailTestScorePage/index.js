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
    console.log('log: props', this.props);
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
    if (!this.props.scores) return <div>Loading...</div>;
    const { scores: { subjects, cross_test_score, sub_section_score, essay } } = this.props;
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
