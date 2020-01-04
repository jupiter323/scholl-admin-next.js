/* eslint-disable camelcase */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
const API_URL = process.env.API_URL;

export const fetchStudentsApi = () =>
  fetch(`${API_URL}/api/students`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const students = data.students.map(student => ({
        id: student.user_address.user_id,
        active: student.active === 1,
        studentInformation: {
          firstName: student.first_name,
          lastName: student.last_name,
        },
        contactInformation: {
          phone: student.user_address.phone,
          addressLine1: student.user_address.address,
          addressLine2: '',
          city: student.user_address.city,
          state: student.user_address.state,
          zipCode: student.user_address.zip,
        },
        emailAddress: {
          email: student.email,
        },
        location: {
          locations: student.user_locations,
        },
        stats: {
          complete: student.stats.complete,
          overdue: student.stats.overdue,
          practiceTests: student.stats.practice_tests,
          sessionsComplete: student.stats.sessions_complete,
          totalSessions: student.stats.total_sessions,
        },
        testScores: {
          initialScore: '',
          currentScore: '',
        },
        courseContext: {
          targetScore: '',
        },
      }));
      return students;
    });

export const addNewStudentApi = student => {
  const {
    firstName: first_name,
    lastName: last_name,
    gender,
  } = student.studentInformation;
  const { email } = student.emailAddress;
  const { state, addressLine1, addressLine2, city, phone, zipCode: zip } = student.contactInformation;
  const { locations } = student.location;
  const studentPayload = { first_name, last_name, email, gender, state, locations, phone, address: `${addressLine1}\n${addressLine2}`, city, zip };
  fetch(`${API_URL}/api/commands/create-student`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentPayload),
  })
    .then(res => res.json())
    .catch(err => err);
};

export const updateStudentActivationApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-activation`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentAddressApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-address`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentCityApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-city`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentEmailApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-email`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentFirstNameApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-first-name`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentLastNameApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-last-name`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentPhoneApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-phone`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentStateApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-state`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentZipApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-zip`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const deleteStudentApi = id =>
  fetch(`${API_URL}/api/commands/delete-student`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ student_id: id }),
  })
    .then(res => res.json())
    .catch(err => err);


export default [
  fetchStudentsApi,
  addNewStudentApi,
  deleteStudentApi,
  updateStudentActivationApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
];

