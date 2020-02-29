import React from "react";
import PropTypes from "prop-types";
import StrengthsWeaknessesNavBar from "./components/StrengthsWeaknessesNavBar";
import ReadingPage from "./components/ReadingPage";
import WritingPage from "./components/WritingPage";
import MathPage from "./components/MathPage";
import SubjectsCard from "./components/SubjectsCard";

class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: "reading",
      testScoreDetails: {
        reading: {
          totalCorrect: "39",
          totalPossible: "59",
          passageType: {
            science: "11",
            informationalGraphicPassage: "12",
            historySocialScience: "13",
            USWorldLiterature: "14",
            pairedPassages: "12"
          },
          questionType: {
            citingTextualEvidence: {
              citeTextAsEvidence: "12",
              authorsIntentionAndMethod: "12",
              supportOrRefute: "12"
            },
            readingClosely: {
              detailQuestion: "12",
              supportRefuteAClaim: "13"
            }
          }
        },
        mathData: {
          sampleAnswers: [
            {
              id: 11,
              topic: "topic1",
              problem: 1,
              answer: "B",
              studentChoice: "A",
              correct: false,
              status: "E",
              flagged: false,
              reviewed: true,
              tutorNotes: "work and study hard"
            },
            {
              id: 12,
              topic: "topic2",
              problem: 1,
              answer: "A",
              studentChoice: "",
              correct: true,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 13,
              topic: "topic3",
              problem: 1,
              answer: "C",
              studentChoice: "",
              correct: false,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 14,
              topic: "topic4",
              problem: 1,
              answer: "D",
              studentChoice: "D",
              correct: true,
              status: "E",
              flagged: false,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 21,
              topic: "topic1",
              problem: 1,
              answer: "A",
              studentChoice: "B",
              correct: false,
              status: "E",
              flagged: true,
              reviewed: true,
              tutorNotes: "work and study hard"
            },
            {
              id: 22,
              topic: "topic2",
              problem: 1,
              answer: "B",
              studentChoice: "B",
              correct: true,
              status: "E",
              flagged: false,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 23,
              topic: "topic3",
              problem: 1,
              answer: "C",
              studentChoice: "",
              correct: false,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 24,
              topic: "topic4",
              problem: 1,
              answer: "D",
              studentChoice: "A",
              correct: true,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 25,
              topic: "topic4",
              problem: 1,
              answer: "D",
              studentChoice: "",
              correct: true,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            }
          ]
        },
        writing: {
          sampleAnswers: [
            {
              id: 11,
              numeric: false,
              topic: "writing",
              problem: 1,
              answer: "B",
              studentChoice: "",
              correct: false,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 12,
              numeric: false,
              topic: "writing",
              problem: 2,
              answer: "D",
              studentChoice: "D",
              correct: true,
              status: "M",
              flagged: false,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 13,
              numeric: true,
              topic: "writing",
              problem: 3,
              answer: 1492,
              studentChoice: 1492,
              correct: true,
              status: "M",
              flagged: false,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 14,
              numeric: true,
              topic: "writing",
              problem: 4,
              answer: 1.25,
              studentChoice: 5.71,
              correct: false,
              status: "E  ",
              flagged: false,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 21,
              numeric: false,

              topic: "topic1",
              problem: 1,
              answer: "A",
              studentChoice: "B",
              correct: false,
              status: "E",
              flagged: true,
              reviewed: true,
              tutorNotes: "work and study hard"
            },
            {
              id: 22,
              numeric: false,
              topic: "topic2",
              problem: 1,
              answer: "B",
              studentChoice: "B",
              correct: true,
              status: "E",
              flagged: false,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 23,
              numeric: false,
              topic: "topic3",
              problem: 1,
              answer: "C",
              studentChoice: "",
              correct: false,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 24,
              numeric: false,
              topic: "topic4",
              problem: 1,
              answer: "D",
              studentChoice: "A",
              correct: true,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            },
            {
              id: 25,
              numeric: false,
              opic: "topic4",
              problem: 1,
              answer: "D",
              studentChoice: "",
              correct: true,
              status: "E",
              flagged: true,
              reviewed: false,
              tutorNotes: "work and study hard"
            }
          ]
        }
      }
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  getComponentImages = () => {
    return new Promise(async resolve => {
      const circleImageList = [];
      let barImageList = [];
      const circleRefs = [
        { id: "analysisReadingCicleImg" },
        { id: "analysisWritingCircleImg" },
        { id: "analysisMathCircleImg" }
      ];
      const barRefs = [
        { id: "readingAnalysisBarImg", state: "reading" },
        { id: "writingAnalysisBarImg", state: "writing" },
        { id: "mathAnalysisBarImg", state: "math" }
      ];
      barImageList = await Promise.all(
        barRefs.map(async barRef => await this.getData(barRef))
      );
      circleRefs.map(async (circleRef, index) => {
        const [currentImg] = await Promise.all([
          this.onHandleTargetImage(circleRef.id)
        ]);
        circleImageList.push(currentImg);
      });

      const imgList = { circleImageList, barImageList };
      resolve(imgList);
    });
  };
  getData = item => {
    return new Promise(async resolve => {
      setTimeout(() => {
        this.setState({ activeSlide: item.state }, async () => {
          const [currentImg] = await Promise.all([
            this.onHandleTargetImage(item.id)
          ]);
          resolve(currentImg);
        });
      }, 1000);
    });
  };

  onHandleTargetImage = async currentRef => {
    return new Promise(async resolve => {
      const { getTargetImage } = this.props;
      const [currentImg] = await Promise.all([
        getTargetImage(document.getElementById(currentRef))
      ]);
      resolve(currentImg);
    });
  };

  onSetActiveSlide = activeSlide => this.setState({ activeSlide });

  renderCurrentSlide = () => {
    const {
      testScoreDetails: {
        reading,
        mathData,
        writing: { sampleAnswers }
      },
      activeSlide
    } = this.state;
    if (activeSlide === "reading") {
      return <ReadingPage reading={reading} />;
    }
    if (activeSlide === "writing") {
      return <WritingPage reading={reading} />;
    }
    if (activeSlide === "math") {
      return <MathPage reading={reading} />;
    }
    return null;
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <React.Fragment>
        <SubjectsCard />
        <div className="card-block">
          <h2>Details</h2>
          <div className="card-main-full card">
            <div className="slick-tabs-gallery">
              <StrengthsWeaknessesNavBar
                activeSlide={activeSlide}
                onSetActiveSlide={this.onSetActiveSlide}
              />
            </div>
            <div className="card-content">
              <div className="main-slick">{this.renderCurrentSlide()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailTestAnswerSheetComplete.propTypes = {
  getTargetImage: PropTypes.func.isRequired
};

export default DetailTestAnswerSheetComplete;
