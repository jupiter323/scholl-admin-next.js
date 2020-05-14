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
        id: student.id,
        active: false,
        studentInformation: {
          firstName: student.first_name,
          lastName: student.last_name,
        },
        contactInformation: {
          phone: student.user_address && student.user_address.phone ? student.user_address.phone : "",
          addressLine1: student.user_address && student.user_address.address ? student.user_address.address : "",
          addressLine2: "",
          city: student.user_address && student.user_address.city ? student.user_address.city : "",
          state: student.user_address && student.user_address.state ? student.user_address.state : "",
          zipCode: student.user_address && student.user_address.zip ? student.user_address.zip : "",
        },
        emailAddress: {
          email: student.email ? student.email : "",
        },
        location: {
          locations: student.user_locations ? student.user_locations : [],
        },
        stats: student.stats ? student.stats : "",
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
      Authorization: `Bearer ${getToken()}`,
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

export const createStudentApi = student =>
  fetch(`${API_URL}/api/commands/create-student`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(student),
  })
    .then(res => res.json())
    .catch(err => err);
export const updateStudentActivationApi = body =>
  fetch(`${API_URL}/api/commands/update-student-activation`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res.status)
    .catch(err => err);

export const updateStudentAddressApi = body =>
  fetch(`${API_URL}/api/commands/update-student-address`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  }).catch(err => err);

export const updateStudentTestAssignmentDate = body =>
  fetch(`${API_URL}/api/commands/update-student-test-assignment-date`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  }).catch(err => err);

export const deleteStudentApi = id =>
  fetch(`${API_URL}/api/commands/delete-student`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(test),
  })
    .then(res => res.json())
    .catch(err => err);
};

export const fetchTestsByStudentIdApi = student_id =>
  fetch(`${API_URL}/api/students/${student_id}/student_tests`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => ({ data }))
    .catch(err => err);

export const fetchTestByTestIdApi = (student_id, test_id) => {
  fetch(`${API_URL}/students/${student_id}/student_tests/${test_id}`, {
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

export const fetchStudentTestSectionsApi = (student_id, student_test_id, student_token) =>
  fetch(`${API_URL}/api/students/${student_id}/student_tests/${student_test_id}/sections`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => data.sections)
    .catch(err => err);
export const fetchStudentTestSectionProblemsApi = (student_id, student_test_id, section, student_token) =>
  fetch(`${API_URL}/api/students/${student_id}/student_tests/${student_test_id}/sections/${section}/problems`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => data)
    .catch(err => err);

export const addStudentAnswerToTestApi = answer =>
  fetch(`${API_URL}/api/commands/add-student-answer-to-test`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
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
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .catch(err => err);

export const fetchStudentTestScoreApi = (student_id, student_test_id) =>
  fetch(`${API_URL}/api/students/${student_id}/student_tests/${student_test_id}/score`, {
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
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    })
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

export const filterLessonListApi = (filters) => {
  const { unitFilter, nameFilter } = filters;
  const unitString = unitFilter.length ? `unit_id=${unitFilter}&` : '';
  const searchString = nameFilter.length ? `search=${nameFilter.toLowerCase().replace(/\s/g, '+')}&` : '';
  const filterQuery = `${searchString}${unitString}`;
  return fetch(`${API_URL}/api/lessons?${filterQuery}`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      const lessons = data.lessons;
      return lessons;
    })
    .catch(err => err);
};
export const fetchSubjectsApi = () =>
  fetch(`${API_URL}/api/subjects`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then(({ data }) => data.subjects)
    .catch((err) => console.warn("err", err));

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
    .then(res => res)
    .then(({ data }) => {
      const studentLessons = data;
      return studentLessons;
    });

export const resetStudentLessonsApi = (lessons) => {
  fetch(`${API_URL}/api/commands/reset-student-lessons`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(lessons),
  })
    .then((res) => res.json())
    .catch((err) => err);
};
export const unAssignLessonFromStudentApi = lessons => {
  fetch(`${API_URL}/api/commands/unassign-lesson-from-student`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(lessons),
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export const rescheduleStudentLessonsApi = (lesson) =>
  fetch(`${API_URL}/api/commands/reschedule-student-lessons`, {
    method: "PATCH",
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

export const fetchStudentLessonApi = (student_id, lesson_id) =>
  fetch(`${API_URL}/api/students/${student_id}/student_lessons/${lesson_id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .then(({ data }) => data);

export const fetchStudentLessonSectionApi = (student_id, lesson_id, section_id) =>
  fetch(`${API_URL}/api/students/${student_id}/student_lessons/${lesson_id}/section/${section_id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .then(({ data }) => data);

export const addStudentLessonProblemFlagApi = (body) =>
  fetch(`${API_URL}/api/commands/flag-student-lesson-problem`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => err);

export const addVideoWatchedTime = (body) =>
  fetch(`${API_URL}/api/commands/watch-student-lesson-problem-video`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => err);

export const fetchAllTestsApi = () =>
  fetch(`${API_URL}/api/tests`, {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then(res => res.json())
    .then(({ data }) => ({ data }))
    .catch(err => err);
export const addStudentLessonProblemAnswerApi = (body) =>
  fetch(`${API_URL}/api/commands/add-student-lesson-problem-answer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  }).then((res) => res.status);

export const updateStudentTestStatusApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-test-status`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res)
    .catch(err => err);


export const excuseStudentLessonLatenessApi = (body) =>
  fetch(`${API_URL}/api/commands/excuse-student-lesson-lateness`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => err);

export const updateStudentTestSectionStatusApi = (body) =>
  fetch(`${API_URL}/api/commands/update-student-test-section-status`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res)
    .catch(err => err);

export const deleteStudentTestApi = (body) =>
  fetch(`${API_URL}/api/commands/delete-student-test`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res)
    .catch((err) => err);
