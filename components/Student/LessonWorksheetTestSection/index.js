/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../Portal';

import PracticeQuestions from './components/PracticeQuestions';
import ChallengeQuestions from './components/ChallengeQuestions';
import QuestionModal from './components/QuestionModal';

import sampleQuestions from './utils/sampleQuestions';

class LessonWorksheetTestSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestion: {},
      questionModalOpen: false,
      answerSheetComplete: false,
      questions: sampleQuestions,
      status: 'notStarted',
      dropdownIsOpen: false,
      questionDropdownOpen: false,
      questionDropdownIndex: null,
      // can be started, complete, or instructor editing
    };
  }

  onToggleQuestionModal = (selectedQuestion = {}) => this.setState(({ questionModalOpen }) => ({ questionModalOpen: !questionModalOpen, selectedQuestion }))

  onOpenDropdown = () => this.setState({ dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  handleDropdownClick = (event) => {
    const { dropdownIsOpen } = this.state;
    event.preventDefault();
    if (dropdownIsOpen) {
      return this.onCloseDropdown();
    }
    return this.onOpenDropdown();
  }

  handleQuestionDropdownClick = (event, question) => {
    const { questionDropdownOpen, questionDropdownIndex } = this.state;
    event.preventDefault();
    if (questionDropdownOpen && question.id === questionDropdownIndex) {
      this.setState({ questionDropdownOpen: false, questionDropdownIndex: null });
    } else if (questionDropdownOpen && question !== questionDropdownIndex) {
      this.setState({ questionDropdownIndex: question.id });
    } else if (questionDropdownOpen && question.id === questionDropdownIndex) {
      this.setState({ questionDropdownOpen: false, questionDropdownIndex: null });
    } else {
      this.setState({ questionDropdownOpen: true, questionDropdownIndex: question.id });
    }
  }

  render() {
    const { questionModalOpen, selectedQuestion, questions, answerSheetComplete, dropdownIsOpen, questionDropdownOpen, questionDropdownIndex } = this.state;
    const { onClose, worksheet, user = {} } = this.props;
    const { studentInformation: { firstName, lastName } } = user;
    return (
      <React.Fragment>
        <QuestionModal
          open={questionModalOpen}
          question={selectedQuestion}
          onCloseModal={this.onToggleQuestionModal}
        />
        <Portal selector="#modal">
          <div className="wrapper modal" style={{ zIndex: '1003', display: 'block', position: 'absolute', top: '0', width: '100%' }}>
            <div className="header-box card-panel light-blue lighten-1 white-text" style={{ zIndex: '9' }}>
              <div className="header-flex-row row mb-0">
                <div className="col s12 m7 xl8">
                  <div className="header-holder">
                    <div className="header-col">
                      <div className="icon-col">
                        <i className="icon-books-l"></i>
                        <span className="text-icon">Lesson</span>
                      </div>
                    </div>
                    <div className="header-col">
                      <div className="card-panel-text">
                        <div className="text-small">{worksheet.unit}</div>
                        <h1 className="text-large">{worksheet.worksheetName}</h1>
                        <div className="text-small">p.{worksheet.passage}  ({worksheet.type})</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s9 m4 xl3 position-mobile-left">
                  <div className="card-panel-text">
                    <h2 className="text-large">{firstName} {lastName}</h2>
                    <dl className="text-small dl-horizontal">
                      <dt>Assigned:</dt>
                      <dd><time dateTime="2019-01-06T08:00">{worksheet.assignDate} at {worksheet.assignTime}</time></dd>
                    </dl>
                    <dl className="text-small dl-horizontal">
                      <dt>Due:</dt>
                      <dd><time dateTime="2019-01-06T16:00">{worksheet.dueDate} at {worksheet.dueTime}</time></dd>
                    </dl>
                    <dl className="text-small dl-horizontal">
                      <dt>Completed:</dt>
                      <dd><time dateTime="2019-09-01T06:59">1/9/19 at 6:59 PM</time></dd>
                    </dl>
                  </div>
                </div>
                <div className="col s2 m1 right-align position-mobile-right">
                  <div className="dropdown-block">
                    <a
                      href='#'
                      data-target='dropdown_top'
                      className='dropdown-trigger btn'
                      onClick={this.handleDropdownClick}
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    <If condition={dropdownIsOpen}>
                      <ul id='dropdown_top' className='dropdown-content dropdown-exwide' style={{ display: 'block', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                        <li><a href="#" className="modal-trigger">Change Date</a></li>
                        <li><a href="#" className="modal-trigger">Change Due Date</a></li>
                        <li><a href="#" className="modal-trigger">Remove Due Date</a></li>
                        <li><a href="#">Excuse Latness</a></li>
                        <li><a href="#">Reset</a></li>
                        <li><a href="#" className="link-delete">Delete</a></li>
                      </ul>
                    </If>
                  </div>
                  <div className="close-block" onClick={onClose}>
                    <a href="#" className="modal-close close"><i className="icon-close-thin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section content-section-85">
              <div className="container-sm">
                <div className="main-row row">
                  <ChallengeQuestions
                    answerSheetComplete={answerSheetComplete}
                    questionDropdownIndex={questionDropdownIndex}
                    questionDropdownOpen={questionDropdownOpen}
                    onOpenQuestionModal={this.onToggleQuestionModal}
                    handleQuestionDropdownClick={this.handleQuestionDropdownClick}
                    questions={questions.filter(question => question.questionType === 'Challenge')}
                  />
                  <PracticeQuestions
                    answerSheetComplete={answerSheetComplete}
                    questionDropdownIndex={questionDropdownIndex}
                    questionDropdownOpen={questionDropdownOpen}
                    onOpenQuestionModal={this.onToggleQuestionModal}
                    handleQuestionDropdownClick={this.handleQuestionDropdownClick}
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

LessonWorksheetTestSection.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default LessonWorksheetTestSection;
