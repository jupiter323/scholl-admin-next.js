import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addFreeResponseAnswerToTest } from '../../../../../index/actions';

class FreeResponseInput extends React.Component {
  handleInputChange = (e) => {
    const answer = e.target.value;
    const { onAddFreeResponseAnswerToTest, problem, testSection: { student_test_id } } = this.props;
    console.log('log: problem', problem);
    console.log('log: answer', answer);
    const postBody = { student_test_id, test_problem_id: problem.id, answer };
    onAddFreeResponseAnswerToTest(postBody, problem.test_section_id);
  };
  render() {
    return (
      <input
        type="text"
        name="answer"
        onChange={this.handleInputChange}
      />
    );
  }
}

FreeResponseInput.propTypes = {
  problem: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    onAddFreeResponseAnswerToTest: (postBody, sectionId) => dispatch(addFreeResponseAnswerToTest(postBody, sectionId)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(FreeResponseInput);
