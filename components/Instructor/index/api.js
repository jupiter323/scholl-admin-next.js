const API_URL = process.env.API_URL;

export const createNewInstructorApi = insturctor =>
  fetch(`${API_URL}/api​/commands​/create-instructor`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(insturctor)
  })
    .then(res => res.json())
    .catch(err => err);
