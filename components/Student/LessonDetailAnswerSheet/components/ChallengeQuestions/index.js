import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';

const sampleQuestions = [
  {
    id: 1,
    hasVideo: false,
    difficulty: 'Easy',
    passage: `Question 1-10 are based on the following passage.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'As it is used in line 14, convention most nearly means',
    answerType: 'letter',
    answerChoices: [
      {
        answerLetter: 'A',
        answerText: 'ceremony',
        correctAnswer: false,
      },
      {
        answerLetter: 'B',
        answerText: 'ceremony2',
        correctAnswer: false,
      },
      {
        answerLetter: 'C',
        answerText: 'generalization',
        correctAnswer: true,
      },
      {
        answerLetter: 'D',
        answerText: 'code',
        correctAnswer: false,
      },
    ],
  },
  {
    id: 2,
    hasVideo: true,
    difficulty: 'Medium',
    passage: `This is the start of another passage.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'What is the correct number choice',
    answerType: 'value',
    answerChoices: [
      {
        answerValue: '5.12',
        correctAnswer: true,
      },
      {
        answerValue: '2.91',
        correctAnswer: false,
      },
    ],
  },
  {
    id: 3,
    hasVideo: true,
    difficulty: 'Difficult',
    passage: `Question three!
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'Here is the third question',
    answerType: 'letter',
    answerChoices: [
      {
        answerLetter: 'A',
        answerText: 'answera',
        correctAnswer: true,
      },
      {
        answerLetter: 'B',
        answerText: 'answerb',
        correctAnswer: false,
      },
      {
        answerLetter: 'C',
        answerText: 'answerc',
        correctAnswer: false,
      },
      {
        answerLetter: 'D',
        answerText: 'answerd',
        correctAnswer: false,
      },
    ],
  },
  {
    id: 4,
    hasVideo: false,
    difficulty: 'Medium',
    passage: `Fourth passage sample.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'What is the correct number choice 2',
    answerType: 'value',
    answerChoices: [
      {
        answerValue: '6.91',
        correctAnswer: false,
      },
      {
        answerValue: '4.53',
        correctAnswer: true,
      },
    ],
  },
];

class ChallengeQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: sampleQuestions,
    };
  }

  mapQuestions = () => this.state.questions.map(question => (
    <Question
      key={question.id}
      question={question}
      onOpenQuestionModal={this.props.onOpenQuestionModal}
    />
  ))

  render() {
    return (
      <div className="col s12 l6">
        <div className="card-block">
          <h2>Challenge</h2>
          <div className="card-answer card">
            <div className="card-content">
              <ol className="answers-list">
                {this.mapQuestions()}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChallengeQuestions.propTypes = {
  onOpenQuestionModal: PropTypes.func.isRequired,
};

export default ChallengeQuestions;
