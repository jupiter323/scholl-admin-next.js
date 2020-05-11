import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import AnswerSheetNavBar from "./components/AnswerSheetNavBar";
import ReadingPage from "./components/ReadingPage";
import WritingPage from "./components/WritingPage";
import MathNoCalcPage from "./components/MathNoCalcPage";
import MathCalculatorPage from "./components/MathCalculatorPage";
import EssayPage from "./components/EssayPage";

import { makeSelectStudentSections } from "../index/selectors";

class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: "reading",
      isOpened: false,
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  getComponentImages = () => new Promise(resolve => {
    const imgDataList = [];
    const componentRefs = [
      { id: "readingAnswerSheetImg", state: "reading" },
      { id: "writingAnswerSheetImg", state: "writing" },
      { id: "mathNoCalcAnswerSheetImg", state: "math (no calc)" },
      { id: "mathCalcAnswerSheetImg", state: "math (calculator)" },
    ];
    const getImgListPromise = componentRefs.reduce((accumulatorPromise, item) => accumulatorPromise
      .then(async () => {
        const result = await this.getData(item);
        return imgDataList.push(result);
      })
      .catch(console.error), Promise.resolve());
    getImgListPromise.then(() => {
      resolve(imgDataList);
    });
  });

  getData = item => new Promise(resolve => {
    this.setState({ activeSlide: item.state }, async () => {
      const currentImg = await this.onHandleTargetImage(item.id);
      resolve(currentImg);
    });
  });

  onHandleTargetImage = async currentRef => {
    const { getTargetImage } = this.props;
    const currentImg = await getTargetImage(document.getElementById(currentRef));
    return currentImg;
  };

  onSetActiveSlide = activeSlide => this.setState({ activeSlide });

  renderCurrentSlide = () => {
    const { activeSlide } = this.state;
    const { sections } = this.props;
    const readingProblems = sections[0];
    const writingProblems = sections[1];
    const mathCalcProblems = sections[2];
    const mathNoCalcProblems = sections[3];
    if (activeSlide === "reading") {
      return readingProblems && <ReadingPage testSection={readingProblems} />;
    }
    if (activeSlide === "writing") {
      return writingProblems && <WritingPage testSection={writingProblems} />;
    }
    if (activeSlide === "math (no calc)") {
      return mathCalcProblems && <MathNoCalcPage testSection={mathCalcProblems} />;
    }
    if (activeSlide === "math (calculator)") {
      return mathNoCalcProblems && <MathCalculatorPage testSection={mathNoCalcProblems} />;
    }
    if (activeSlide === "essay") {
      return <EssayPage />;
    }
    return null;
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <div className="card-main-full card">
        <div className="slick-tabs-gallery">
          <AnswerSheetNavBar activeSlide={activeSlide} onSetActiveSlide={this.onSetActiveSlide} />
        </div>
        <div className="card-content">
          <div className="main-slick">{this.renderCurrentSlide()}</div>
        </div>
      </div>
    );
  }
}

DetailTestAnswerSheetComplete.propTypes = {
  getTargetImage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: makeSelectStudentSections(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(DetailTestAnswerSheetComplete);
