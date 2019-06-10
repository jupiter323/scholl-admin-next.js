import React from 'react';
import PropTypes from 'prop-types';
import QuestionModal from '../QuestionModal';
import BubbleGroup from '../Bubble';

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  };

  onOpenQuestionModal = () => this.setState({ open: true })
  onCloseQuestionModal = () => this.setState({ open: false });

  mapNumberBubbles = () => {
    const { question: {answer, studentChoice} } = this.props;
    if (answer === studentChoice) {
      return (
        <li key={answer}>
          <span className="badge badge-rounded badge-rounded-bordered" style={{ color: '#fff', borderColor: '#32955c', backgroundColor: '#3eb777' }}>{answer}</span>
        </li>
      )
    }
    return (
      <React.Fragment>
        <li key={studentChoice}>
          <span className="badge badge-rounded badge-rounded-bordered" style={{ color: '#fff', borderColor: '#ad1e3e', backgroundColor: '#db1d41' }}>{studentChoice}</span>
        </li>
        <li key={answer} >
          <span className="badge badge-rounded badge-rounded-bordered" style={{ color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff' }}>{answer}</span>
        </li>
      </React.Fragment>
    )
  };

 render() {
    const { question } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <QuestionModal open={open} onOpenQuestionModal={this.onOpenQuestionModal} onCloseQuestionModal={this.onCloseQuestionModal} question={question} />
        <li className="answers-list-holder" key={question.problem} style={{marginRight:"15px"}}>
          <div className="answer-row row mb-0" >
            <div className="col col-120">
              <ul className="answer-list">
                <Choose>
                  <When condition={!question.numeric}>
                    <BubbleGroup id={question.id} question={question}/>
                  </When>
                  <Otherwise>
                    {this.mapNumberBubbles()}
                  </Otherwise>
                </Choose>
              </ul>
            </div>
            <div className="col col-30">
              <span className="status-info">{question.status}</span>
            </div>
            <div className="col col-43">
              <span className="play-progress" data-video-id="video001">
                <span className="play"></span>
                <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="circle-static" cx={25.8} cy={24.3} r={22.8} fill='transparent' strokeWidth={3} />
                  <circle className="circle-progress" cx={25.8} cy={24.3} r={22.8} fill='transparent' strokeWidth={3} />
                </svg>
              </span>
            </div>
            <div className="col col-auto">
              <If condition={question.flagged}>
                <span className="status-answer" style={{ color: '#c0272d' }}>
                  <i className="icon-flag"></i><b className="status-text">Review</b>
                </span>
              </If>
            </div>
            <div className="dropdown-block col col-35">

              <a className='modal-trigger' href="#" onClick={this.onOpenQuestionModal}><i className="material-icons dots-icon">more_vert</i></a>
            </div>
          </div>
          <If condition={question.studentNotes}>
            <div className="comment-block">
              <p>{question.studentNotes}</p>
            </div>
          </If>
        </li>
      </React.Fragment>
    )
  }
}

AnswerRow.propTypes = {
  question: PropTypes.object.isRequired,
}

export default AnswerRow;


