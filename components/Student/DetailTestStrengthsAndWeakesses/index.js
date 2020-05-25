import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import StrengthsWeaknessesNavBar from './components/StrengthsWeaknessesNavBar';
import ReadingPage from './components/ReadingPage';
import WritingPage from './components/WritingPage';
import MathPage from './components/MathPage';
import SubjectsCard from './components/SubjectsCard';

import { makeSelectActiveTestScores } from '../index/selectors';
import { fetchStudentTestScoreApi } from '../index/api';

class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 'reading',
      readingScores: null,
      writingScores: null,
      mathScores: null,
    };
  }

  async componentDidMount() {
    this.props.onRef(this);
    const { activeTestScores } = this.props;
    let fetchedScores = {};
    if (!this.props.activeTestScores) {
      const { test, activeStudent } = this.props;
      const response = await fetchStudentTestScoreApi(activeStudent.id, test.student_test_id);
      if (response && !response.message) {
        fetchedScores = response.categories;
      }
    }
    const categories = activeTestScores ? activeTestScores.categories : fetchedScores;
    if (categories && categories.length !== 0) {
      categories.map(category => {
        switch (category.name) {
          case 'Writing':
            this.setState({
              writingScores: category,
            });
            break;
          case 'Math':
            this.setState({
              mathScores: category,
            });
            break;
          case 'Reading':
            this.setState({
              readingScores: category,
            });
            break;
          default:
        }
      });
    }
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  getComponentImages = () => new Promise(async resolve => {
    const circleImageList = [];
    let barImageList = [];
    const circleRefs = [
      { id: 'analysisReadingCicleImg' },
      { id: 'analysisWritingCircleImg' },
      { id: 'analysisMathCircleImg' },
    ];
    const barRefs = [
      { id: 'readingAnalysisBarImg', state: 'reading' },
      { id: 'writingAnalysisBarImg', state: 'writing' },
      { id: 'mathAnalysisBarImg', state: 'math' },
    ];
    circleRefs.map(async (circleRef, index) => {
      const [currentImg] = await Promise.all([this.onHandleTargetImage(circleRef.id)]);
      circleImageList.push(currentImg);
    });
    barImageList = await Promise.all(barRefs.map(async barRef => await this.getData(barRef)));
    const imgList = { circleImageList, barImageList };
    resolve(imgList);
  });
  getData = item => new Promise(async resolve => {
    setTimeout(() => {
      this.setState({ activeSlide: item.state }, async () => {
        const [currentImg] = await Promise.all([this.onHandleTargetImage(item.id)]);
        resolve(currentImg);
      });
    }, 1000);
  });

  onHandleTargetImage = async currentRef => new Promise(async resolve => {
    const { getTargetImage } = this.props;
    const [currentImg] = await Promise.all([getTargetImage(document.getElementById(currentRef))]);
    resolve(currentImg);
  });

  onSetActiveSlide = activeSlide => this.setState({ activeSlide });

  renderCurrentSlide = () => {
    const { activeSlide, readingScores, mathScores, writingScores } = this.state;
    if (activeSlide === 'reading') {
      return <ReadingPage scores={readingScores} />;
    }
    if (activeSlide === 'writing') {
      return <WritingPage scores={writingScores} />;
    }
    if (activeSlide === 'math') {
      return <MathPage scores={mathScores} />;
    }
    return null;
  };

  render() {
    const { activeSlide, readingScores, mathScores, writingScores } = this.state;
    return (
      <React.Fragment>
        <SubjectsCard
          readingScores={readingScores}
          writingScores={writingScores}
          mathScores={mathScores}
        />
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
              <div className="main-slick">
                {this.renderCurrentSlide()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailTestAnswerSheetComplete.propTypes = {
  getTargetImage: PropTypes.func.isRequired,
  activeTestScores: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  activeTestScores: makeSelectActiveTestScores(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(DetailTestAnswerSheetComplete);
