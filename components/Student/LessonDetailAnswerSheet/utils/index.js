export const getAnswerChoiceColors = (answerLetter, correctAnswer, studentAnswer) => {
  if (correctAnswer) {
    return (
      { backgroundColor: '#32955e' }
    );
  } else if (answerLetter === studentAnswer && studentAnswer !== correctAnswer) {
    return (
      { backgroundColor: '#db1d41' }
    )
  }
  return null;
};

export const getAnswerPercentageBreakdownColors = (colorType, answerLetter, answerPercentage, correctAnswer, studentAnswer) => {
  if (correctAnswer) {
    if (colorType === 'full') {
      return { backgroundColor: '#32955c', color: '#fff' }
    }
    return (
      { width: `${answerPercentage}%`, backgroundColor: '#d3efde' }
    )
  } else if (answerLetter === studentAnswer && studentAnswer !== correctAnswer) {
    if (colorType === 'full') {
      return (
        { backgroundColor: '#db1d41', color: '#fff' }
      )
    }
    return (
      { width: `${answerPercentage}%`, backgroundColor: '#db1d41' }
    )
  }
  if (colorType === 'full') {
    return (
      { backgroundColor: '#e5e5e5' }
    );
  }
  return (
    { width: `${answerPercentage}%`, backgroundColor: '#e5e5e5' }
  );
};
