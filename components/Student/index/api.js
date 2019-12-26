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
          id: student.id,
          active: false,
          studentInformation: {
            firstName: student.first_name,
            lastName: student.last_name,
            gender: student.gender,
          },
          contactInformation: {
            phone: student.phone,
            addressLine1: student.address,
            addressLine2: '',
            city: student.city,
            state: student.state,
            zipCode: student.zipCode,
          },
          emailAddress: {
            email: student.email,
          },
          location: {
            locations: student.locations,
          },
        }));
      return formattedStudents;
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
