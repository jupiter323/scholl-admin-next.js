export const getProblemCompletionStatusColor = (solvedProblems, totalProblems) => {
  if (solvedProblems / totalProblems <= .25) {
    return { backgroundColor: '#ed1c25' };
  } else if (solvedProblems / totalProblems <= .5) {
    return { backgroundColor: '#a005a5' };
  }
  return { backgroundColor: '#0200fd' };
}

export const getLessonActivityStatus = (assigned, dueDate) => {
  if (assigned && dueDate) {
    return 'card-main card-lesson-detail card-assigned card';
  }
  if (!assigned && !dueDate) {
    return 'card-main card-lesson-detail card-not-assigned card';
  }
  return 'card-main card-lesson-detail card';
}
