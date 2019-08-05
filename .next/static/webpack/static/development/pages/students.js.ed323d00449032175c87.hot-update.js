webpackHotUpdate("static/development/pages/students.js",{

/***/ "./components/Student/utils/sampleStudentList.js":
/*!*******************************************************!*\
  !*** ./components/Student/utils/sampleStudentList.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LessonWorksheetTestSection/utils/sampleQuestions */ "./components/Student/LessonWorksheetTestSection/utils/sampleQuestions.js");

var sampleStudentList = [{
  id: '1232',
  active: false,
  studentInformation: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    gender: 'Male'
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "Jason Bourne",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1400',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '1040',
    currentScore: '1300',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    }
  },
  totalScore: '1300',
  totalPossible: '1600',
  sectionScores: {
    readingAndWriting: '710',
    math: '650',
    totalPossible: '800'
  },
  essayScores: {
    reading: '7',
    analysis: '6',
    writing: '7',
    totalPossible: '8'
  },
  crossTestScores: '24',
  subScores: {
    commandOfEvidence: '5',
    wordsInContext: '12',
    expressionOfIdeas: '12',
    standardEnglishConventions: '14',
    heartOfAlgebra: '10',
    problemSolvingAndDataAnalysis: '10',
    passportToAdvancedMath: '13',
    totalPossible: '15'
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }]
}, {
  id: '1233',
  active: true,
  studentInformation: {
    firstName: 'JJ',
    lastName: 'Abrams',
    gender: 'Male'
  },
  contactInformation: {
    phone: '8888888888',
    addressLine1: '123 Sesame Street',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "James Bond",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1250',
    highSchool: 'Everglades High',
    graduationYear: '2019'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '65',
    improvement: '84',
    lessons: '66',
    instruction: '66',
    practiceTests: '45'
  },
  overdueWork: {
    lessons: '10',
    worksheets: '4',
    quizzes: '2',
    practiceTests: '6'
  },
  summary: {
    questionsAnswered: '750',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '950',
    currentScore: '1080',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    },
    totalScore: '1080',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }]
}, {
  id: '1234',
  active: false,
  studentInformation: {
    firstName: 'Caroline',
    lastName: 'Ingalls',
    gender: 'female'
  },
  contactInformation: {
    phone: '4448885598',
    addressLine1: '123 Baker Street',
    addressLine2: '',
    city: 'Paris',
    state: 'ID',
    zipCode: '88775'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "Jason Bourne",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1500',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '900',
    currentScore: '1080',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    },
    totalScore: '1080',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Complete',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false,
    flags: [{
      title: 'one',
      status: 'reviewed'
    }, {
      title: 'two',
      status: 'reviewed'
    }, {
      title: 'three',
      status: 'toReview'
    }],
    totalVideoMinutesWatched: '132',
    totalVideoMinutesAllMissedProblems: '312',
    questions: _LessonWorksheetTestSection_utils_sampleQuestions__WEBPACK_IMPORTED_MODULE_0__["default"],
    assignDate: '1/19/19',
    assignTime: '3:01 PM',
    completionLevel: 'Not Started',
    unit: 'Reading Unit #4',
    type: 'challenge + practice',
    completedProblems: 10,
    status: 'Assigned',
    problems: 17
  }]
}, {
  id: '1236',
  active: true,
  studentInformation: {
    firstName: 'Bob',
    lastName: 'Ross',
    gender: 'Male'
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757'
  },
  emailAddress: {
    email: 'test@email.com'
  },
  location: {
    locations: [{
      locationNickname: 'Disneyworld  Tutoring',
      locationName: 'House Of Mouse'
    }, {
      locationNickname: 'TutorZone Austin',
      locationName: 'We Teach Real Good'
    }, {
      locationNickname: 'TutorZone Miami',
      locationName: 'We Teach Even Better'
    }]
  },
  instructor: {
    instructors: [{
      firstName: 'John',
      lastName: 'Jackson',
      email: 'john-jackson@email.com'
    }, {
      firstName: 'Jennifer',
      lastName: 'Ownerson',
      email: 'jennifern@ownerson.com'
    }]
  },
  tutor: "James Bond",
  course: {
    classes: []
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1450',
    highSchool: 'Everglades High',
    graduationYear: '2018'
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017'
  },
  accountType: {
    licenseType: 'classMember'
  },
  courseProgress: {
    startDate: '6/03/18',
    testDate: '10/14/18',
    progress: '77',
    improvement: '82',
    lessons: '73',
    instruction: '68',
    practiceTests: '47'
  },
  overdueWork: {
    lessons: '12',
    worksheets: '3',
    quizzes: '1',
    practiceTests: '5'
  },
  summary: {
    questionsAnswered: '791',
    videoWatched: '416',
    notesTaken: '52',
    totalTimeLoggedIn: '220',
    lastLogIn: '3:12',
    loginTimeCode: 'pm',
    onTimePercentage: '77'
  },
  testScores: {
    initialScore: '1040',
    currentScore: '1270',
    compositeScore: {
      reading: '83',
      writing: '31',
      math: '105',
      composite: '218'
    },
    subjectScores: {
      reading: '58',
      writing: '44',
      math: '91',
      composite: '195'
    },
    totalScore: '1270',
    totalPossible: '1600',
    sectionScores: {
      readingAndWriting: '710',
      math: '650',
      totalPossible: '800'
    },
    essayScores: {
      reading: '7',
      analysis: '6',
      writing: '7',
      totalPossible: '8'
    },
    crossTestScores: '24',
    subScores: {
      commandOfEvidence: '5',
      wordsInContext: '12',
      expressionOfIdeas: '12',
      standardEnglishConventions: '14',
      heartOfAlgebra: '10',
      problemSolvingAndDataAnalysis: '10',
      passportToAdvancedMath: '13',
      totalPossible: '15'
    }
  },
  testScoreDetails: {
    reading: {
      totalCorrect: '39',
      totalPossible: '59',
      passageType: {
        science: '11',
        informationalGraphicPassage: '12',
        historySocialScience: '13',
        USWorldLiterature: '14',
        pairedPassages: '12'
      },
      questionType: {
        citingTextualEvidence: {
          citeTextAsEvidence: '12',
          authorsIntentionAndMethod: '12',
          supportOrRefute: '12'
        },
        readingClosely: {
          detailQuestion: '12',
          supportRefuteAClaim: '13'
        }
      }
    },
    mathCalculator: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    mathNoCalc: {
      sampleAnswers: [{
        id: 11,
        topic: 'topic1',
        problem: 1,
        answer: "B",
        studentChoice: "A",
        correct: false,
        status: 'E',
        flagged: false,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        topic: 'topic2',
        problem: 1,
        answer: "A",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    },
    writing: {
      sampleAnswers: [{
        id: 11,
        numeric: false,
        topic: 'writing',
        problem: 1,
        answer: "B",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 12,
        numeric: false,
        topic: 'writing',
        problem: 2,
        answer: "D",
        studentChoice: "D",
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        studentNotes: "Lorem ipsum dolor sit amet sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?",
        tutorNotes: "work and study hard"
      }, {
        id: 13,
        numeric: true,
        topic: 'writing',
        problem: 3,
        answer: 1492,
        studentChoice: 1492,
        correct: true,
        status: 'M',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 14,
        numeric: true,
        topic: 'writing',
        problem: 4,
        answer: 1.25,
        studentChoice: 5.71,
        correct: false,
        status: 'E  ',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 21,
        numeric: false,
        topic: 'topic1',
        problem: 1,
        answer: "A",
        studentChoice: "B",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: true,
        tutorNotes: "work and study hard"
      }, {
        id: 22,
        numeric: false,
        topic: 'topic2',
        problem: 1,
        answer: "B",
        studentChoice: "B",
        correct: true,
        status: 'E',
        flagged: false,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 23,
        numeric: false,
        topic: 'topic3',
        problem: 1,
        answer: "C",
        studentChoice: "",
        correct: false,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 24,
        numeric: false,
        topic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "A",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }, {
        id: 25,
        numeric: false,
        opic: 'topic4',
        problem: 1,
        answer: "D",
        studentChoice: "",
        correct: true,
        status: 'E',
        flagged: true,
        reviewed: false,
        tutorNotes: "work and study hard"
      }]
    }
  },
  strengthsAndWeaknesses: {
    reading: {
      correctAnswers: '32',
      totalAnswers: '52'
    },
    writing: {
      correctAnswers: '35',
      totalAnswers: '52'
    },
    math: {
      correctAnswers: '37',
      totalAnswers: '52'
    }
  },
  lessons: [{
    subject: 'Reading',
    unitNumber: '2',
    lessonName: 'Reading Something 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '20',
    solvedProblems: '',
    passage: '128',
    dueDate: '4/2/2019',
    dueTime: '4:20 PM',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Math',
    unitNumber: '4',
    lessonName: 'Pythagorean Theorem',
    assigned: true,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '16',
    solvedProblems: '3',
    passage: '132',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '12/01/18',
    completionTime: '2:21 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '3',
    lessonName: 'More Reading Stuff',
    assigned: true,
    alerts: [{}, {}, {}, {}, {}],
    lessonType: 'Read from the Book',
    totalProblems: '20',
    solvedProblems: '10',
    passage: '141',
    dueDate: '4/2/2019',
    dueTime: '4:00 PM',
    completed: true,
    availableDate: '',
    completionDate: '04/15/19',
    completionTime: '7:34 PM',
    completedLate: true,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '6',
    lessonName: 'Reading Someing 7',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '17',
    solvedProblems: '',
    passage: '127',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '11/30/2018',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '4',
    lessonName: 'Reading Someing 4',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '19',
    solvedProblems: '',
    passage: '120',
    dueDate: '12/4/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: true
  }, {
    subject: 'Reading',
    unitNumber: '9',
    lessonName: 'Reading Someing 9',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '22',
    solvedProblems: '',
    passage: '141',
    dueDate: '12/23/2018',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Reading',
    unitNumber: '1',
    lessonName: 'Reading Someing 1',
    assigned: false,
    alerts: [],
    lessonType: 'Challenge + Practice',
    totalProblems: '29',
    solvedProblems: '',
    passage: '136',
    dueDate: '',
    dueTime: '',
    completed: false,
    availableDate: '',
    completionDate: '',
    completionTime: '',
    completedLate: false,
    overdue: false
  }, {
    subject: 'Writing',
    unitNumber: '5',
    lessonName: 'Writing Lesson 5',
    assigned: true,
    alerts: [{}, {}],
    lessonType: 'Drill',
    totalProblems: '14',
    solvedProblems: '14',
    passage: '117',
    dueDate: '11/23/18',
    dueTime: '',
    completed: true,
    availableDate: '',
    completionDate: '11/23/18',
    completionTime: '4:21 PM',
    completedLate: false,
    overdue: false
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (sampleStudentList);

/***/ }),

/***/ "./pages/students.js":
/*!***************************!*\
  !*** ./pages/students.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Student_components_StudentCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Student/components/StudentCard */ "./components/Student/components/StudentCard/index.js");
/* harmony import */ var _components_Student_utils_sampleStudentList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Student/utils/sampleStudentList */ "./components/Student/utils/sampleStudentList.js");
/* harmony import */ var _components_Student_ListPage_Components_FilterSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Student/ListPage/Components/FilterSection */ "./components/Student/ListPage/Components/FilterSection/index.js");
/* harmony import */ var _components_Student_components_StudentModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Student/components/StudentModal */ "./components/Student/components/StudentModal/index.js");
/* harmony import */ var _components_Student_IndividualStudentPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Student/IndividualStudentPage */ "./components/Student/IndividualStudentPage/index.js");
/* harmony import */ var _components_Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Location/components/LocationModal */ "./components/Location/components/LocationModal/index.js");
















var Students =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Students, _Component);

  function Students(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Students);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Students).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenStudentModal", function () {
      return _this.setState({
        studentModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseStudentModal", function () {
      return _this.setState({
        studentModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenLocationModal", function () {
      return _this.setState({
        locationModalOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseLocationModal", function () {
      return _this.setState({
        locationModalOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSort", function (sort) {
      return _this.setState({
        sort: sort
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredState", function (filterName) {
      return _this.setState({
        filterName: filterName
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredState", function () {
      return _this.setState({
        filterName: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetFilteredLocationState", function (location) {
      return _this.setState({
        location: location
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnsetFilteredLocationState", function () {
      return _this.setState({
        location: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSaveNewStudent", function () {
      // eslint-disable-next-line no-console
      console.warn('do something with the new student info');

      _this.onCloseStudentModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteNewStudent", function () {
      var previousStudentState = _this.state.newStudent;
      var newStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(previousStudentState, {
        $set: {
          active: false,
          studentInformation: {
            firstName: '',
            lastName: '',
            gender: ''
          },
          contactInformation: {
            phone: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: ''
          },
          emailAddress: {
            email: ''
          },
          location: {
            locations: []
          }
        }
      });

      _this.setState({
        newStudent: newStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onRemoveLocation", function (index) {
      var previousStudentState = _this.state.newStudent;
      var locations = _this.state.newStudent.location.locations;

      var newLocationsArray = _this.arrayItemRemover(locations, locations[index]);

      var newStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(previousStudentState, {
        location: {
          $set: {
            locations: newLocationsArray
          }
        }
      });

      _this.setState({
        newStudent: newStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFilterByName", function () {
      var _this$state = _this.state,
          students = _this$state.students,
          filterName = _this$state.filterName;
      return students.reduce(function (finalArr, currentStudent) {
        var lastName = currentStudent.lastName,
            firstName = currentStudent.firstName;
        var studentString = "".concat(firstName.toLowerCase()).concat(lastName.toLowerCase());

        if (studentString.indexOf(filterName) !== -1 && finalArr.indexOf(currentStudent) === -1) {
          finalArr.push(currentStudent);
        }

        return finalArr;
      }, []);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onHandleStudentCard", function (index) {
      var students = _this.state.students;

      _this.setState({
        selectedStudent: students[index]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onRedirectToStudentPage", function (event) {
      event.preventDefault();

      _this.setState({
        selectedStudent: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteStudent", function (index) {
      var students = _this.state.students;

      var newStudentArray = _this.arrayItemRemover(students, students[index]);

      _this.setState({
        students: newStudentArray
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloneStudent", function (index) {
      var students = _this.state.students;

      _this.setState(function (prevState) {
        prevState.students.push(students[index]);
        return {
          students: prevState.students
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event, name, section) {
      var previousStudentState = _this.state.newStudent;
      var value = event.target ? event.target.value : event;
      var updatedStudent = immutability_helper__WEBPACK_IMPORTED_MODULE_8___default()(previousStudentState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, section, {
        $merge: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value)
      }));

      _this.setState({
        newStudent: updatedStudent
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "arrayItemRemover", function (array, value) {
      return array.filter(function (student) {
        return student !== value;
      });
    });

    _this.state = {
      selectedStudent: null,
      students: _components_Student_utils_sampleStudentList__WEBPACK_IMPORTED_MODULE_10__["default"],
      studentModalOpen: false,
      locationModalOpen: false,
      sort: "",
      filterName: "",
      newStudent: {
        active: false,
        studentInformation: {
          firstName: '',
          lastName: '',
          gender: ''
        },
        contactInformation: {
          phone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zipCode: ''
        },
        emailAddress: {
          email: ''
        },
        location: {
          locations: []
        }
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Students, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          studentModalOpen = _this$state2.studentModalOpen,
          students = _this$state2.students,
          selectedStudent = _this$state2.selectedStudent;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        id: "main",
        role: "main"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "main-holder grey lighten-5"
      }, !selectedStudent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title-row card-panel"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mobile-header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        "data-target": "slide-out",
        className: "sidenav-trigger"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "menu"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "h1 white-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-holder"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-student"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "heading-block"
      }, "Students")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_ListPage_Components_FilterSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onSetSort: this.onSetSort,
        onSetFilteredState: this.onSetFilteredState,
        onUnsetFilteredState: this.onUnsetFilteredState,
        onSetFilteredLocationState: this.onSetFilteredLocationState,
        onUnsetFilteredLocationState: this.onUnsetFilteredLocationState,
        handleFilterClick: this.handleFilterClick,
        onFilterByName: this.onFilterByName
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content-section"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex-content"
      }, students.map(function (student, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_components_StudentCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          student: student,
          index: index,
          id: student.id,
          key: student.id,
          onHandleStudentCard: function onHandleStudentCard() {
            return _this2.onHandleStudentCard(index);
          },
          onDeleteStudent: function onDeleteStudent() {
            return _this2.onDeleteStudent(index);
          },
          onCloneStudent: function onCloneStudent() {
            return _this2.onCloneStudent(index, student.id);
          }
        });
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        className: "waves-effect waves-teal btn add-btn modal-trigger",
        onClick: this.onOpenStudentModal
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "material-icons"
      }, "add"), "New Student"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_components_StudentModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        open: studentModalOpen,
        onClose: this.onCloseStudentModal,
        handleChange: this.handleChange,
        state: this.state.newStudent,
        onSave: this.onSaveNewStudent,
        onOpenLocationModal: this.onOpenLocationModal,
        onRemoveLocation: this.onRemoveLocation,
        onDeleteNewStudent: this.onDeleteNewStudent
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Location_components_LocationModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        open: this.state.locationModalOpen,
        onClose: this.onCloseLocationModal,
        handleLocationsChange: function handleLocationsChange(selectedLocations) {
          return _this2.handleChange(selectedLocations, 'locations', 'location');
        }
      })), selectedStudent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Student_IndividualStudentPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
        student: selectedStudent,
        onRedirectToStudentPage: this.onRedirectToStudentPage
      })));
    }
  }]);

  return Students;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ })

})
//# sourceMappingURL=students.js.ed323d00449032175c87.hot-update.js.map