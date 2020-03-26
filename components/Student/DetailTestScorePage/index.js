import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import TotalScoreCard from "./components/TotalScoreCard";
import SectionScoreCard from "./components/SectionScoreCard";
import TestScoreCard from "./components/TestScoreCard";
import EssayScoresCard from "./components/EssayScoresCard";
import CrossTestScoresCard from "./components/CrossTestScoresCard";
import SubScoresCard from "./components/SubscoresCard";
import { makeSelectActiveTestScores } from "../index/selectors";
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
      getTargetImage(document.getElementById("scoresRef")),
    ]);
    return scoresImages;
  };


  render() {
    const {
      test: {
        subjectScores,
        totalScore,
        totalPossible,
        essayScores },
      scores: {
        section_scores,
        cross_section_scores,
        sub_section_scores,
      },
    } = this.props;
    return (
      <div className="container" id="scoresRef">
        <div className="cards-section">
          <div className="d-flex-content same-height justify-center row mb-0">
            <TotalScoreCard
              totalScore={totalScore}
              totalPossible={totalPossible}
            />
            <SectionScoreCard sectionScores={section_scores} />
          </div>
          <div className="d-flex-content same-height justify-center row mb-0">
            <TestScoreCard subjectScores={subjectScores} />
            <EssayScoresCard essayScores={essayScores} />
          </div>
          <div className="d-flex-content justify-center row mb-0">
            <CrossTestScoresCard crossTestScores={cross_section_scores} />
            <SubScoresCard subScores={sub_section_scores} />
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
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(DetailTestScorePage);
