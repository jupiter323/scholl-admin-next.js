import React from "react";
import PropTypes from "prop-types";
import TotalScoreCard from "./components/TotalScoreCard";
import SectionScoreCard from "./components/SectionScoreCard";
import TestScoreCard from "./components/TestScoreCard";
import EssayScoresCard from "./components/EssayScoresCard";
import CrossTestScoresCard from "./components/CrossTestScoresCard";
import SubScoresCard from "./components/SubscoresCard";

const DetailTestScorePage = ({
  scoresRef,
  test: {
    subjectScores,
    totalScore,
    totalPossible,
    sectionScores,
    essayScores,
    crossTestScores,
    subScores
  }
}) => (
  <div className="container" ref = {scoresRef}>
    <div className="cards-section">
      <div className="d-flex-content same-height justify-center row mb-0">
        <TotalScoreCard
          totalScore={totalScore}
          totalPossible={totalPossible}
        />
        <SectionScoreCard
          sectionScores={sectionScores}
        />
      </div>
      <div className="d-flex-content same-height justify-center row mb-0">
        <TestScoreCard subjectScores={subjectScores} />
        <EssayScoresCard
          essayScores={essayScores}
        />
      </div>
      <div
        className="d-flex-content justify-center row mb-0"
      >
        <CrossTestScoresCard crossTestScores={crossTestScores}/>
        <SubScoresCard subScores={subScores} />
      </div>
    </div>
  </div>
);

DetailTestScorePage.propTypes = {
  test: PropTypes.object.isRequired
};

export default DetailTestScorePage;
