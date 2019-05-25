import React from 'react';
import PropTypes from 'prop-types';
import sampleAnswers from '../../../../utils/sampleWritingTestResults';
// need to import modal

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      bubbleStyles,
      reviewed: false,
     }
  };
  mapLetterBubbles = ({index}) => {
    const letters = ["A", "B", "C", "D"]
    const { studentChoice, answer, id } = sampleAnswers[index];
    return letters.map(letter => {
      if (letter === answer && letter === studentChoice){
        return (
          <li>
          <span className="badge-circle badge-circle-bordered" key={id} style={{color: '#fff', borderColor: '#32955c', backgroundColor: '#3eb777'}}>{letter}</span>
        </li>
        )
      }
      if (letter === answer && letter !== studentChoice){
        return (
          <li>
            <span className="badge-circle badge-circle-bordered" key={id} style={{color: '#32955c', borderColor: '#32955c', backgrounColor: '#fff'}}>{letter}</span>
          </li>
        )
      }
      if (letter !== answer && letter === studentChoice){
        return (
          <li>
            <span className="badge-circle badge-circle-bordered" key={id} style={{color: '#fff', borderColor: '#ad1e3e', backgroundColor: '#db1d41'}}>{letter}</span>
          </li>
        )
      }
      return (
          <li>
            <span className="badge-circle badge-circle-bordered" key={id}>{letter}</span>
          </li>
        )
      }
    )
  };

  mapNumberBubbles = ({ index} ) => {
    const { answer, studentChoice }= sampleAnswers[index];
          if ( answer === studentChoice) {
        return (
          <li>
            <span className="badge badge-rounded badge-rounded-bordered" style={{color: '#fff', borderColor: '#32955c', backgroundColor: '#3eb777'}}>{answer}</span>
          </li>
        )
      }
      return (
          <React.Fragment>
            <li>
              <span className="badge badge-rounded badge-rounded-bordered" style={{color: '#fff', borderColor: '#ad1e3e', backgroundColor: '#db1d41'}}>{studentChoice}</span>
            </li>
            <li>
              <span className="badge badge-rounded badge-rounded-bordered" style={{color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff'}}>{answer}</span>
            </li>
          </React.Fragment>
        )
  };

  render() {
    const { index, question } = this.props;
    return (
      <li className="answers-list-holder">
          <div className="answer-row row mb-0">
            <div className="col col-120">
              <ul className="answer-list" key={question.id} >
                <Choose>
                  <When condition={!question.numeric}>
                  {this.mapLetterBubbles({index})}
                  </When>
                  <Otherwise>
                  {this.mapNumberBubbles({index})}
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
                  <circle className="circle-static" cx={25.8} cy={24.3} r={22.8} fill='transparent' strokeWidth={3}/>
                  <circle className="circle-progress" cx={25.8} cy={24.3} r={22.8} fill='transparent' strokeWidth={3}/>
                </svg>
              </span>
            </div>
            <div className="col col-auto">
              <If condition={question.flagged}>
                  <span className="status-answer" style={{color: '#c0272d'}}>
                    <i className="icon-flag"></i><b className="status-text">Review</b>
                  </span>
              </If>
            </div>
            <div className="dropdown-block col col-35">
              {/* modal trigger */}
              <a className='modal-trigger' href="#modal_video001"><i className="material-icons dots-icon">more_vert</i></a>
            </div>
          </div>
          <If condition={question.studentNotes}>
            <div className="comment-block">
              <p>{question.studentNotes}</p>
            </div>
          </If>
        </li>
    )
  }
}

AnswerRow.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export default AnswerRow;

