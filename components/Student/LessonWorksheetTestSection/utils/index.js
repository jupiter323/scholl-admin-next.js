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

export const getAnswerColor = (answer) => {
  if (answer.correctAnswer) {
    return (
      {
      color: '#3eb777', borderColor: '#32955c',
      }
    );
  }
  return null;
}

export const difficultyMap = {
  'Easy': 'E',
  'Medium': 'M',
  'Difficult': 'D',
};

export const getCompleteAnswerColor = (answerType, answer, studentAnswer) => {
  if (answerType === 'letter') {
    if (answer.answerLetter !== studentAnswer && answer.correctAnswer) {
      return (
        {
          color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff',
        }
      )
    }
    else if (answer.answerLetter === studentAnswer && answer.correctAnswer ) {
      return (
        {
          color: '#fff', borderColor: '#32955c', backgroundColor: '#3eb777',
        }
      );
    }
    else if (!answer.correctAnswer && answer.answerLetter === studentAnswer) {
      return (
        {
          color: '#fff', borderColor: '#ad1e3e', backgroundColor: '#db1d41',
        }
      )
    }
    return null;
  }
  if (answer.answerValue !== studentAnswer && answer.correctAnswer) {
    return (
      {
        color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff',
      }
    )
  }
  else if (answer.answerValue === studentAnswer && answer.correctAnswer ) {
    return (
      {
        color: '#fff', borderColor: '#32955c', backgroundColor: '#3eb777',
      }
    );
  }
  else if (!answer.correctAnswer && answer.answerValue === studentAnswer) {
    return (
      {
        color: '#fff', borderColor: '#ad1e3e', backgroundColor: '#db1d41',
      }
    )
  }
  return null;
}

export const statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple',
};

export const chartColorMap = {
  Assigned: '#333',
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078',
}

export const data = (percentage, status, colorOverride = null) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [
      colorOverride || chartColorMap[status],
      '#eaeaea',
    ],
  }],
});

export const formatTimeEstimate = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  const hourString = hours !== 0 ? `${hours}:` : '';
  const minuteString = minutes !== 0 ? `${minutes}` : '';
  return `${hourString}${minuteString}`
}

