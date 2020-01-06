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
      const formattedStudents = data.students.map(student => ({
          id: student.user_address.user_id,
          active: false,
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
          stats: student.stats,
          tutor: (!student.hasOwnProperty('tutor') ? '' : student.tutor),
          testScores: {
            initialScore: (!student.hasOwnProperty('testScores') ? '0' : student.testScores.initialScore),
            currentScore: (!student.hasOwnProperty('testScores') ? '0' : student.testScores.currentScore),
          },
          courseContext: {
            targetScore: (!student.hasOwnProperty('courseContext') ? '0' : student.courseContext.targetScore),
          },
        }));
      return formattedStudents;
    });

export const searchStudentsApi = filters => {
  let queryString = `search=${filters.name}&location=${filters.location}`;
  switch (filters.sort) {
    case 'lastNameDescending':
      queryString += 'sort_by_field=last_name'
      break;
    case 'firstNameDescending':
      queryString += 'sort_by_field=first_name'
      break;
    case 'lastNameAscending':
      queryString += 'sort_by_field=last_name&sort_by_asc=true'
      break;
    case 'firstNameAscending':
      queryString += 'sort_by_field=first_name&sort_by_asc=true'
      break;
    default:
      queryString += ''
  }
  return fetch(`${API_URL}/api/students?${queryString}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      if (data.students.length < 1) {
        return []
      }
      const formattedStudents = data.students.map(student => ({
        id: student.user_address.user_id,
        active: false,
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
        stats: student.stats,
        tutor: (!student.hasOwnProperty('tutor') ? '' : student.tutor),
        testScores: {
          initialScore: (!student.hasOwnProperty('testScores') ? '0' : student.testScores.initialScore),
          currentScore: (!student.hasOwnProperty('testScores') ? '0' : student.testScores.currentScore),
        },
        courseContext: {
          targetScore: (!student.hasOwnProperty('courseContext') ? '0' : student.courseContext.targetScore),
        },
      }));
    return formattedStudents;
    }).catch(err => err);
};

export const createStudentApi = student => {
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
    method: 'POST',
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
    fetch(`${API_URL}/api/commands/update-student-address`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then(res => res.json())
    .catch(err => err);

  export const updateStudentCityApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-city`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

  export const updateStudentEmailApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-email`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

  export const updateStudentFirstNameApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-first-name`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

  export const updateStudentLastNameApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-last-name`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

  export const updateStudentPhoneApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-phone`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

  export const updateStudentStateApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-state`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

  export const updateStudentZipApi = (body) =>
    fetch(`${API_URL}/api/commands/update-student-zip`,{
      method:'PATCH',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify(body),
    })
    .then ( res => res.json())
    .catch( err => err);

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
      searchStudentsApi,
      createStudentApi,
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

