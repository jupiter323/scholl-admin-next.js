const API_URL = process.env.API_URL;

export const fetchInstructorsApi = () =>
  fetch(`${API_URL}/api/instructors`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const { students = [] } = data;
      const formattedInstructors = students.reduce(
        (finalArry, currentInstructor) => {
          const {
            id,
            first_name,
            last_name,
            email,
            sex,
            type,
            password,
            created_at,
            updated_at,
            user_address,
          } = currentInstructor;
          const newInstructor = {
            id,
            accountInfo: {
              lastName: last_name,
              firstName: first_name,
              email,
              gender: sex,
            },
            contactInfo: {
              phone: "1234567890",
              streetAddress: "1234 Test Road",
              city: "Austin",
              state: "TX",
              zip: "78751",
            },
            basicInfo: {
              activeStudents: 15,
              pastStudents: 24,
              unactivatedStudents: 29,
              averageImprovement: 185,
              averageInitialScore: 1037,
              averageFinalScore: 1218,
              studentsAchievingTargetScore: 12,
            },
          };
          finalArry.push(newInstructor);
          return finalArry;
        },
        []
      );
      return { formattedInstructors };
    })
    .catch(err => err);

export const createNewInstructorApi = insturctor =>
  fetch(`${API_URL}/api/commands/create-instructor`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(insturctor),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorFirstNameApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-first-name`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorLastNameApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-last-name`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorEmailApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-email`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorStateApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-state`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorCityApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-city`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorZipApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-zip`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateInstructorAddressApi = body =>
  fetch(`${API_URL}/api/commands/update-instructors-address`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const addInstructorToLocationApi = body =>
  fetch(`${API_URL}/api/commands/add-instructor-to-location`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export default [
  createNewInstructorApi,
  fetchInstructorsApi,
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,
];
