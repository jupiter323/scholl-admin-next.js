import React from 'react';
// import PropTypes from 'prop-types';
import Portal from '../../Portal';

import PracticeQuestions from './components/PracticeQuestions';
import ChallengeQuestions from './components/ChallengeQuestions';
import QuestionModal from './components/QuestionModal';

import sampleQuestions from './utils/sampleQuestions';

class LessonDetailAnswerSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionModalOpen: false,
      selectedQuestion: {},
      questions: sampleQuestions,
    };
  }

  onToggleQuestionModal = (selectedQuestion = null) => this.setState(({ questionModalOpen }) => ({ questionModalOpen: !questionModalOpen, selectedQuestion }))

  render() {
    const { questionModalOpen, selectedQuestion, questions } = this.state;
    return (
      <React.Fragment>
        <QuestionModal
          open={questionModalOpen}
          question={selectedQuestion}
          onCloseModal={this.onToggleQuestionModal}
        />
        <Portal selector="#modal">
          <div className="wrapper modal" style={{ zIndex: '1003', display: 'block', position: 'absolute', top: '0' }}>
            <div className="header-row card-panel light-blue lighten-1 white-text">
              <div className="card-panel-row row">
                <div className="icon-col col s1">
                  <i className="icon-books"></i>
                </div>
                <div className="col s9">
                  <div className="card-panel-text center-align">
                    <div className="text-small">Reading Unit #2</div>
                    <div className="text-large">Read Something</div>
                  </div>
                </div>
                <div className="col s1 right-align">
                  <div className="row icons-row">&nbsp;</div>
                </div>
              </div>
              <div className="header-row-block card-panel-row row">
                <div className="col s3">
                  <span className="meta-num">p.128</span>
                </div>
                <div className="col s9 right-align">
                  <div><span className="name">Arnold Studently</span></div>
                  <div><time className="date" dateTime="2018-11-18T20:43" style={{ color: '#006837' }}>Completed 11/18/18 at 8:43 PM (late)</time></div>
                </div>
              </div>
            </div>
            <div className="nav-header nav-header-special white">
              <div className="nav-additional">
                <ul className="menu-additional">
                  <li className="col s3"><a href="#">Summary</a></li>
                  <li className="col s3"><a className="active" href="#answer">Answer Sheet</a></li>
                </ul>
              </div>
            </div>
            <div className="content-section">
              <div className="container-sm">
                <div className="main-row row">
                  <ChallengeQuestions
                    onOpenQuestionModal={this.onToggleQuestionModal}
                    questions={questions.filter(question => question.questionType === 'Challenge')}
                  />
                  <PracticeQuestions
                    onOpenQuestionModal={this.onToggleQuestionModal}
                    questions={questions.filter(question => question.questionType === 'Practice')}
                  />
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </React.Fragment>
    );
  }
}

export default LessonDetailAnswerSheet;
