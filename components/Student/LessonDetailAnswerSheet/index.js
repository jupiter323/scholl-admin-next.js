import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../Portal';

import PracticeQuestions from './components/PracticeQuestions';
import ChallengeQuestions from './components/ChallengeQuestions';
import QuestionModal from './components/QuestionModal';

import sampleQuestions from './utils/sampleQuestions';

class LessonDetailAnswerSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestion: {},
      questionModalOpen: false,
      questions: sampleQuestions,
      answerSheetComplete: this.props.lesson.completionDate && true,
    };
  }

  onToggleQuestionModal = (selectedQuestion = {}) => this.setState(({ questionModalOpen }) => ({ questionModalOpen: !questionModalOpen, selectedQuestion }))

  render() {
    const { questionModalOpen, selectedQuestion, questions, answerSheetComplete } = this.state;
    const { open, onCloseDetailModal, user,
      lesson: { lessonName, unit, passage, completionDate, completionTime, assignTime, assignDate, dueDate, dueTime, lessonType } } = this.props;
    const { studentInformation: { firstName, lastName } } = user
    return (
      <React.Fragment>
        <QuestionModal
          open={questionModalOpen}
          question={selectedQuestion}
          onCloseModal={this.onToggleQuestionModal}
        />
        <Portal selector="#modal">
          {open && (
            <div className="overlay">
            <div className="wrapper modal" style={{ zIndex: '1003', display: 'block', position: 'absolute', top: '0', backroundColor: "rgba(0, 0, 0, 0.7)" }}>
              <div className="header-row card-panel light-blue lighten-1 white-text">
              <div className="position-top right-align">
                  <div className="icons-row">
                    <div className="dropdown-block col">
                      <i className="material-icons dots-icon">more_vert</i>
                    </div>
                    <a
                      href="#"
                      className="icon-close"
                      onClick={onCloseDetailModal}
                      style={{color: 'white' }}
                    ></a>
                  </div>
                </div>
                <div className="card-panel-row row">
                  <div className="icon-col col s1">
                    <i className="icon-books"></i>
                  </div>
                <div className="col s2">
                    <span style={{fontSize: '17px'}}>{`p.${passage} (${lessonType})`} </span>
                </div>
                  <div className="col s7">
                    <div className="card-panel-text center-align">
                      <div className="text-small">{unit}</div>
                      <div className="text-large">{lessonName}</div>
                    </div>
                  </div>
                  <div className="col s2" style={{marginTop: '-47px'}}>
                    <div className="card-panel-text center-align">
                    <div><span className="name" style={{fontSize: '17px'}}>{firstName} {lastName}</span></div>
                    <Choose>
                      <When condition={completionDate}>
                        <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-50px', fontSize: '17px'}}>
                          {`Completed ${completionDate} at ${completionTime}`}
                        </time></div>
                      </When>
                      <Otherwise>
                      <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-50px', fontSize: '17px'}}>
                          {`Assigned ${assignDate} at ${assignTime}`}
                        </time></div>
                        <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-28px', fontSize: '17px'}}>
                          {dueDate && (`Due ${dueDate} at ${dueTime}`)}
                        </time></div>
                      </Otherwise>
                    </Choose>
                  </div>
                  </div>
                </div>

              </div>
              <div className="nav-header nav-header-special white">
                <div className="nav-additional">
                  <ul className="menu-additional" style={{paddingLeft: '25%'}}>
                    <li className="col s3"><a href="#">Summary</a></li>
                    <li className="col s3"><a className="active" href="#answer">Answer Sheet</a></li>
                  </ul>
                </div>
              </div>
              <div className="content-section">
                <div className="container-sm">
                  <div className="main-row row">
                    <ChallengeQuestions
                      answerSheetComplete={answerSheetComplete}
                      onOpenQuestionModal={this.onToggleQuestionModal}
                      questions={questions.filter(question => question.questionType === 'Challenge')}
                    />
                    <PracticeQuestions
                      answerSheetComplete={answerSheetComplete}
                      onOpenQuestionModal={this.onToggleQuestionModal}
                      questions={questions.filter(question => question.questionType === 'Practice')}
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}
          <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1004;
            }
           
          `}
        </style>
        </Portal>
      </React.Fragment>
    );
  }
}

LessonDetailAnswerSheet.propTypes = {
  open: PropTypes.bool.isRequired,
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onCloseDetailModal: PropTypes.func.isRequired,
}

export default LessonDetailAnswerSheet;
