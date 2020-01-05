/* eslint-disable camelcase */
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
      const { instructors = [] } = data;
      const formattedInstructors = instructors.reduce((finalArry, currentInstructor) => {
        const {
          id,
          first_name,
          last_name,
          email,
        } = currentInstructor;
        const newInstructor = {
          id,
          accountInfo: {
            lastName: last_name,
            firstName: first_name,
            email,
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
      }, []);
      return formattedInstructors;
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

export const searchInstructorsApi = filters => {
  const queryString = `search=${filters.name}&location=${filters.location}`;
  return fetch(`${API_URL}/api/instructors?${queryString}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const { instructors = [] } = data;
      const formattedInstructors = instructors.reduce((finalArry, currentInstructor) => {
        const {
          id,
          first_name,
          last_name,
          email,
        } = currentInstructor;
        const newInstructor = {
          id,
          accountInfo: {
            lastName: last_name,
            firstName: first_name,
            email,
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
      }, []);
      return formattedInstructors;
    })
    .catch(err => err);
};
