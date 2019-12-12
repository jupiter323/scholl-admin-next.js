const API_URL = process.env.API_URL;

export const fetchInstructorsApi = () =>
  fetch(`${API_URL}/api/commands/instructors`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(({ data }) => {})
    .catch(err => err);

export const createNewInstructorApi = insturctor =>
  fetch(`${API_URL}/api/commands/create-instructor`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(insturctor)
  })
    .then(res => res.json())
    .catch(err => err);

export default [createNewInstructorApi, fetchInstructorsApi];
