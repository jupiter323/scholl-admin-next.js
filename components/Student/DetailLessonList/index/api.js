const API_URL = process.env.API_URL;
export const fetchLessonListApi = () =>
  fetch(`${API_URL}/api/lessons`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const lessons = data.lessons;
      return lessons;
    });
