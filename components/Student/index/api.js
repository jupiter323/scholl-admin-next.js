/* eslint-disable camelcase */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
const API_URL = process.env.API_URL;
import { getToken } from "../../../utils/AuthService";

export const fetchStudentsApi = () =>
  fetch(`${API_URL}/api/students`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
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
          addressLine2: "",
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
        tutor: !student.hasOwnProperty("tutor") ? "" : student.tutor,
        testScores: {
          initialScore: !student.hasOwnProperty("testScores")
            ? "0"
            : student.testScores.initialScore,
          currentScore: !student.hasOwnProperty("testScores")
            ? "0"
            : student.testScores.currentScore,
        },
        // courseContext: {
        //   targetScore: !student.hasOwnProperty("courseContext")
        //     ? "0"
        //     : student.courseContext.targetScore
        // }
        courseContext: {
          courseStartDateOption: "secondOption",
          courseStartDate: "",
          courseEndDateOption: "secondOption",
          courseEndDate: "",
          targetTestDate: "12/12/2019",
          targetScore: "1400",
          highSchool: "Everglades High",
          graduationYear: "2018",
        },
        courseProgress: {
          startDate: "6/03/18",
          testDate: "10/14/18",
          progress: "77",
          improvement: "82",
          lessons: "73",
          instruction: "68",
          practiceTests: "47",
        },
        overdueWork: {
          lessons: "12",
          worksheets: "3",
          quizzes: "1",
          practiceTests: "5",
        },
        summary: {
          questionsAnswered: "791",
          videoWatched: "416",
          notesTaken: "52",
          totalTimeLoggedIn: "220",
          lastLogIn: "3:12",
          loginTimeCode: "pm",
          onTimePercentage: "77",
        },
        testScores: {
          initialScore: "1040",
          currentScore: "1300",
          compositeScore: {
            reading: "83",
            writing: "31",
            math: "105",
            composite: "218",
          },
          subjectScores: {
            reading: "58",
            writing: "44",
            math: "91",
            composite: "195",
          },
        },
        strengthsAndWeaknesses: {
          reading: {
            correctAnswers: "32",
            totalAnswers: "52",
          },
          writing: {
            correctAnswers: "35",
            totalAnswers: "52",
          },
          math: {
            correctAnswers: "37",
            totalAnswers: "52",
          },
        },
      }));
      return formattedStudents;
    });

export const searchStudentsApi = filters => {
  let queryString = `search=${filters.name}&location=${filters.location}`;
  switch (filters.sort) {
    case "lastNameDescending":
      queryString += "sort_by_field=last_name";
      break;
    case "firstNameDescending":
      queryString += "sort_by_field=first_name";
      break;
    case "lastNameAscending":
      queryString += "sort_by_field=last_name&sort_by_asc=true";
      break;
    case "firstNameAscending":
      queryString += "sort_by_field=first_name&sort_by_asc=true";
      break;
    default:
      queryString += "";
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
        return [];
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
          addressLine2: "",
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
        tutor: !student.hasOwnProperty("tutor") ? "" : student.tutor,
        testScores: {
          initialScore: !student.hasOwnProperty("testScores")
            ? "0"
            : student.testScores.initialScore,
          currentScore: !student.hasOwnProperty("testScores")
            ? "0"
            : student.testScores.currentScore,
        },
        courseContext: {
          targetScore: !student.hasOwnProperty("courseContext")
            ? "0"
            : student.courseContext.targetScore,
        },
      }));
      return formattedStudents;
    })
    .catch(err => err);
};

export const createStudentApi = student => {
  const { firstName: first_name, lastName: last_name } = student.studentInformation;
  const { email } = student.emailAddress;
  const {
    state,
    addressLine1,
    addressLine2,
    city,
    phone,
    zipCode: zip,
  } = student.contactInformation;
  const { locations } = student.location;
  const studentPayload = {
    first_name,
    last_name,
    email,
    state,
    locations,
    phone,
    address: `${addressLine1}\n${addressLine2}`,
    city,
    zip,
  };
  fetch(`${API_URL}/api/commands/create-student`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(studentPayload),
  })
    .then(res => res.json())
    .catch(err => err);
};

export const updateStudentActivationApi = body =>
  fetch(`${API_URL}/api/commands/update-student-activation`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentAddressApi = body =>
  fetch(`${API_URL}/api/commands/update-student-address`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentCityApi = body =>
  fetch(`${API_URL}/api/commands/update-student-city`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentEmailApi = body =>
  fetch(`${API_URL}/api/commands/update-student-email`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentFirstNameApi = body =>
  fetch(`${API_URL}/api/commands/update-student-first-name`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentLastNameApi = body =>
  fetch(`${API_URL}/api/commands/update-student-last-name`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentPhoneApi = body =>
  fetch(`${API_URL}/api/commands/update-student-phone`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentStateApi = body =>
  fetch(`${API_URL}/api/commands/update-student-state`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentZipApi = body =>
  fetch(`${API_URL}/api/commands/update-student-zip`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const updateStudentTestDueDate = body =>
  fetch(`${API_URL}/api/commands/update-student-test-due-date`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).catch(err => err);

export const updateStudentTestAssignmentDate = body =>
  fetch(`${API_URL}/api/commands/update-student-test-assignment-date`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).catch(err => err);

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

export const assignTestToStudentApi = test => {
  fetch(`${API_URL}/api/commands/assign-test-to-student`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(test),
  })
    .then(res => res.json())
    .catch(err => err);
};

export const fetchTestsByStudentIdApi = student_id =>
  fetch(`${API_URL}/api/students/${student_id}/tests`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const formattedStudentTests = data.tests.reduce((finalArry, currentStudentTest) => {
        const {
          test_id,
          test_name,
          test_description,
          test_form,
          student_test_id,
          student_id,
          assignment_date,
          due_date,
          status,
        } = currentStudentTest;
        const newStudentTest = {
          test_id,
          test_name,
          test_description,
          test_form,
          student_test_id,
          student_id,
          assignment_date,
          status,
          dueDate: due_date,
          completionDate: "05/12/2019",
          completionTime: "4:21 PM",
          weekNumber: "3",
          version: "1234",
          initialScore: "1050",
          targetScore: "1500",
          currentScore: "1245",
          totalGain: "132",
          subjects: [
            {
              subject: "Reading & Writing",
              targetScore: "750",
              currentScore: "454",
              totalGain: "73",
            },
            {
              subject: "Math",
              targetScore: "490",
              currentScore: "345",
              totalGain: "101",
            },
          ],
          compositeScore: {
            reading: "83",
            writing: "31",
            math: "105",
            composite: "218",
          },
          subjectScores: {
            reading: "58",
            writing: "44",
            math: "91",
            composite: "195",
          },
          totalScore: "1080",
          totalPossible: "1600",
          sectionScores: {
            readingAndWriting: "710",
            math: "650",
            totalPossible: "800",
          },
          essayScores: {
            reading: "7",
            analysis: "6",
            writing: "7",
            totalPossible: "8",
          },
          crossTestScores: "24",
          subScores: {
            commandOfEvidence: "5",
            wordsInContext: "12",
            expressionOfIdeas: "12",
            standardEnglishConventions: "14",
            heartOfAlgebra: "10",
            problemSolvingAndDataAnalysis: "10",
            passportToAdvancedMath: "13",
            totalPossible: "15",
          },
          testScoreDetails: {
            reading: {
              totalCorrect: "39",
              totalPossible: "59",
              passageType: {
                science: "11",
                informationalGraphicPassage: "12",
                historySocialScience: "13",
                USWorldLiterature: "14",
                pairedPassages: "12",
              },
              questionType: {
                citingTextualEvidence: {
                  citeTextAsEvidence: "12",
                  authorsIntentionAndMethod: "12",
                  supportOrRefute: "12",
                },
                readingClosely: {
                  detailQuestion: "12",
                  supportRefuteAClaim: "13",
                },
              },
            },
            mathCalculator: {
              sampleAnswers: [
                {
                  id: 11,
                  topic: "topic1",
                  problem: 1,
                  answer: "A",
                  studentChoice: "B",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: true,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 12,
                  topic: "topic2",
                  problem: 1,
                  answer: "B",
                  studentChoice: "B",
                  correct: true,
                  status: "E",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 13,
                  topic: "topic3",
                  problem: 1,
                  answer: "C",
                  studentChoice: "",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 14,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "A",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 21,
                  topic: "topic1",
                  problem: 1,
                  answer: "A",
                  studentChoice: "B",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: true,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 22,
                  topic: "topic2",
                  problem: 1,
                  answer: "B",
                  studentChoice: "B",
                  correct: true,
                  status: "E",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 23,
                  topic: "topic3",
                  problem: 1,
                  answer: "C",
                  studentChoice: "",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 24,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "A",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 25,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
              ],
            },
            mathNoCalc: {
              sampleAnswers: [
                {
                  id: 11,
                  topic: "topic1",
                  problem: 1,
                  answer: "B",
                  studentChoice: "A",
                  correct: false,
                  status: "E",
                  flagged: false,
                  reviewed: true,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 12,
                  topic: "topic2",
                  problem: 1,
                  answer: "A",
                  studentChoice: "",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 13,
                  topic: "topic3",
                  problem: 1,
                  answer: "C",
                  studentChoice: "",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 14,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "D",
                  correct: true,
                  status: "E",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 21,
                  topic: "topic1",
                  problem: 1,
                  answer: "A",
                  studentChoice: "B",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: true,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 22,
                  topic: "topic2",
                  problem: 1,
                  answer: "B",
                  studentChoice: "B",
                  correct: true,
                  status: "E",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 23,
                  topic: "topic3",
                  problem: 1,
                  answer: "C",
                  studentChoice: "",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 24,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "A",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 25,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
              ],
            },
            writing: {
              sampleAnswers: [
                {
                  id: 11,
                  numeric: false,
                  topic: "writing",
                  problem: 1,
                  answer: "B",
                  studentChoice: "",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 12,
                  numeric: false,
                  topic: "writing",
                  problem: 2,
                  answer: "D",
                  studentChoice: "D",
                  correct: true,
                  status: "M",
                  flagged: false,
                  reviewed: false,
                  studentNotes:
                    "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
                  tutorNotes: "work and study hard",
                },
                {
                  id: 13,
                  numeric: true,
                  topic: "writing",
                  problem: 3,
                  answer: 1492,
                  studentChoice: 1492,
                  correct: true,
                  status: "M",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 14,
                  numeric: true,
                  topic: "writing",
                  problem: 4,
                  answer: 1.25,
                  studentChoice: 5.71,
                  correct: false,
                  status: "E  ",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 21,
                  numeric: false,

                  topic: "topic1",
                  problem: 1,
                  answer: "A",
                  studentChoice: "B",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: true,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 22,
                  numeric: false,
                  topic: "topic2",
                  problem: 1,
                  answer: "B",
                  studentChoice: "B",
                  correct: true,
                  status: "E",
                  flagged: false,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 23,
                  numeric: false,
                  topic: "topic3",
                  problem: 1,
                  answer: "C",
                  studentChoice: "",
                  correct: false,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 24,
                  numeric: false,
                  topic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "A",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
                {
                  id: 25,
                  numeric: false,
                  opic: "topic4",
                  problem: 1,
                  answer: "D",
                  studentChoice: "",
                  correct: true,
                  status: "E",
                  flagged: true,
                  reviewed: false,
                  tutorNotes: "work and study hard",
                },
              ],
            },
          },
        };
        finalArry.push(newStudentTest);
        return finalArry;
      }, []);
      return { formattedStudentTests };
    })
    .catch(err => err);

export const fetchTestByTestIdApi = (student_id, test_id) => {
  fetch(`${API_URL}/students/${student_id}/tests/${test_id}`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .catch(err => err);
};

export const fetchProblemsByStudentTestIdApi = (student_test_id, student_token) =>
  fetch(`${API_URL}/api/studentTests/${student_test_id}/problems`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${student_token}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const formattedData = data;
      return { formattedData };
    })
    .catch(err => err);

export const addStudentAnswerToTestApi = answer =>
  fetch(`${API_URL}/api/commands/add-student-answer-to-test`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  })
    .then(res => res.json())
    .catch(err => err);

export const addStudentTestQuestionFlagApi = (body, studentToken) =>
  fetch(`${API_URL}/api/commands/add-student-test-question-flag`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${studentToken}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const fetchStudentTestScoreApi = student_test_id =>
  fetch(`${API_URL}/api/studentTestScore/${student_test_id}`, {
    headers: {
      Accept: "application/json",
      "Allow-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const formattedTestScores = data;
      return { formattedTestScores };
    })
    .catch(err => err);
export const updateStudentTestQuestionFlagStatusApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-test-question-flag-status`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res)
    .catch(err => err);


export const fetchLessonListApi = () =>
  fetch(`${API_URL}/api/lessons`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => {
      const lessons = data.lessons;
      return lessons;
    });

export const fetchUnitsApi = () =>
  fetch(`${API_URL}/api/units`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(res => res.json())
    .then(({ data }) => {
      const { units = [] } = data;
      const formattedUnits = units.reduce((finalArr, currentUnit) => {
        const { id, name, reference_id } = currentUnit;
        const newUnit = {
          label: name,
          value: id,
        };
        finalArr.push(newUnit);
        return finalArr;
      }, []);
      return { formattedUnits };
    })
    .catch(err => console.warn('err', err));

export const assignLessonToStudentApi = lesson => {
  fetch(`${API_URL}/api/commands/assign-lesson-to-student`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(lesson),
  })
    .then(res => res.json())
    .catch(err => err);
};


export const fetchStudentLessonListApi = (student, studentToken) =>
  fetch(`${API_URL}/api/students/${student}/student_lessons`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(res => { console.log({ res }); return res; })
    .then(({ data }) => {
      const studentLessons = data;
      return studentLessons;
    });

export const rescheduleStudentLessonsApi = (studentLessonData) =>
  fetch(`${API_URL}/api/commands/reschedule-student-lessons`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: studentLessonData,
  })
    .then((res) => res.json())
    .then((res) => res)
    .then(({ data }) => data)
    .catch((err) => err);
