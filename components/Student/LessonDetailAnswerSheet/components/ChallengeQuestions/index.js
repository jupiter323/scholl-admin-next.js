import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';

const sampleQuestions = [
  {
    id: 1,
    hasVideo: false,
    questionNumber: 1,
    topic: 'Special Right Triangles',
    difficulty: 'Easy',
    studentNotes: '1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes 1 this is an example of some pretty long student notes',
    passage: `Question 1-10 are based on the following passage.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'As it is used in line 14, convention most nearly means',
    flagged: false,
    studentAnswer: 'B',
    answerType: 'letter',
    answerChoices: [
      {
        answerLetter: 'A',
        answerText: 'ceremony',
        correctAnswer: false,
        answerPercentage: '12',
      },
      {
        answerLetter: 'B',
        answerText: 'ceremony2',
        correctAnswer: false,
        answerPercentage: '18',
      },
      {
        answerLetter: 'C',
        answerText: 'generalization',
        correctAnswer: true,
        answerPercentage: '40',
      },
      {
        answerLetter: 'D',
        answerText: 'code',
        correctAnswer: false,
        answerPercentage: '30',
      },
    ],
  },
  {
    id: 2,
    hasVideo: true,
    videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
    videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
    questionNumber: 2,
    topic: 'Geometry',
    difficulty: 'Medium',
    studentNotes: '2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes 2 this is an example of some pretty long student notes',
    passage: `This is the start of another passage.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'What is the correct number choice',
    flagged: true,
    studentAnswer: '2.91',
    answerType: 'value',
    answerChoices: [
      {
        answerValue: '5.12',
        correctAnswer: true,
        answerPercentage: '67',
      },
      {
        answerValue: '2.91',
        correctAnswer: false,
        answerPercentage: '33',
      },
    ],
  },
  {
    id: 3,
    hasVideo: true,
    videoSource: 'https://www.youtube.com/watch?v=zGP6zk7jcrQ',
    videoThumbnail: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225921/Pembroke-Welsh-Corgi-MP.jpg',
    questionNumber: 3,
    topic: 'Pythagorean Theorem',
    difficulty: 'Difficult',
    studentNotes: '3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes 3 this is an example of some pretty long student notes',
    passage: `Question three!
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'Here is the third question',
    flagged: false,
    studentAnswer: 'C',
    answerType: 'letter',
    answerChoices: [
      {
        answerLetter: 'A',
        answerText: 'answera',
        correctAnswer: true,
        answerPercentage: '62',
      },
      {
        answerLetter: 'B',
        answerText: 'answerb',
        correctAnswer: false,
        answerPercentage: '8',
      },
      {
        answerLetter: 'C',
        answerText: 'answerc',
        correctAnswer: false,
        answerPercentage: '20',
      },
      {
        answerLetter: 'D',
        answerText: 'answerd',
        correctAnswer: false,
        answerPercentage: '10',
      },
    ],
  },
  {
    id: 4,
    hasVideo: false,
    questionNumber: 4,
    topic: 'Algebra',
    difficulty: 'Medium',
    studentNotes: '4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes 4 this is an example of some pretty long student notes',
    passage: `Fourth passage sample.
    Why do we use it? 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!
    Where does it come from?
    Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.
    `,
    question: 'What is the correct number choice 2',
    flagged: true,
    studentAnswer: '6.91',
    answerType: 'value',
    answerChoices: [
      {
        answerValue: '6.91',
        correctAnswer: false,
        answerPercentage: '22',
      },
      {
        answerValue: '4.53',
        correctAnswer: true,
        answerPercentage: '78',
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
