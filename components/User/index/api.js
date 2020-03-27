const API_URL = process.env.API_URL;


export const _checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const oAuthTokenApi = (data) =>
  fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(_checkStatus)
    .then(response => response.json())
    .then(data => data)
    .catch(err => err);

export default [
  oAuthTokenApi,
];
