const API_URL = process.env.API_URL;

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
