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
