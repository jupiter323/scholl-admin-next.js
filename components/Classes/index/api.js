const API_URL = process.env.API_URL;

export const fetchClassesApi = () =>
  fetch(`${API_URL}/api/classes`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {})
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

export default createClassApi;
