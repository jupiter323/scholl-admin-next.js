export default [
  {
    value: 'sessions',
    label: 'Number Of Sessions',
  },
  {
    value: 'estimatedTotalCourseWork',
    label: 'Estimated Total Course Work',
  },
  {
    value: 'lessons',
    label: 'Number Of Lessons',
  },
];

export const sessionSort = ({ sessions: sessionCountA }, { sessions: sessionCountB }) => {
  if (sessionCountA > sessionCountB) { return -1; }
  return 0;
}

export const lessonSort = ({ lessons: lessonCountA }, { lessons: lessonCountB }) => {
  if (lessonCountA > lessonCountB) { return -1; }
  return 0;
}

export const estimatedTotalCourseWorkSort = ({ estimatedTotalCourseWork: courseworkA }, { estimatedTotalCourseWork: courseworkB }) => {
  if (courseworkA > courseworkB) { return -1; }
  return 0;
}
