const API_URL = process.env.API_URL;

export const fetchClassesApi = () =>
  fetch(`${API_URL}/api/classes`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const classes = data.classes.map(item => ({
        id: item.id,
        summary: {
          amount_students: item.students.length,
          start_date: item.start_date,
          end_date: item.end_date,
          improvement: 123,
          coursework_assigned: 60,
          coursework_completed: 90,
          problems_flagged_review: 40,
          average_score: 1256,
          achieved_target_score: 85,
          average_practice_tests_completed: 1.8,
          instruction: 14,
        },
        accountInfo: {
          start_date: item.start_date,
          end_date: item.end_date,
          active: false,
          isExclude: item.exclude_from_statistics,
        },
        classInfo: {
          className: item.name,
        },
        location: {
          locations: item.locations,
        },
        instructor: {
          instructors: item.instructors,
        },
        student: {
          students: item.students,
        },
      }));
      return classes;
    })
    .catch(err => err);

export const createClassApi = (classroom) =>
  fetch(`${API_URL}/api/commands/create-classroom`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classroom),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateClassStartDateApi = body =>
  fetch(`${API_URL}/api/commands/update-class-start-date`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateClassEndDateApi = body =>
  fetch(`${API_URL}/api/commands/update-class-end-date`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateClassExcludeFromStatisticsApi = body =>
  fetch(`${API_URL}/api/commands/update-class-exclude-from-statistics`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);


export default createClassApi;
