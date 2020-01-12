const updatedUser = {
  id: '1232',
  userInfo: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    email: 'christian-chavarro@email.com',
  },
  contactInfo: {
    phone: '123-456-7890',
    streetAddress: '1234 Test Lane',
    city: 'Austin',
    state: 'TX',
    zip: '78751',
  },
  locationsToManage: {
    locations: [
      {
        locationNickname: 'Disneyworld  Tutoring',
        locationName: 'House Of Mouse',
      },
      {
        locationNickname: 'TutorZone Austin',
        locationName: 'We Teach Real Good',
      },
      {
        locationNickname: 'TutorZone Miami',
        locationName: 'We Teach Even Better',
      },
    ],
  },
  userLocation: {
    locations: [
      {
        locationNickname: 'Disneyworld  Tutoring',
        locationName: 'House Of Mouse',
      },
      {
        locationNickname: 'TutorZone Austin',
        locationName: 'We Teach Real Good',
      },
      {
        locationNickname: 'TutorZone Miami',
        locationName: 'We Teach Even Better',
      },
    ],
  },
  instructorsToManage: {
    instructors: [
      {
        firstName: 'John',
        lastName: 'Jackson',
        email: 'john-jackson@email.com',
      },
      {
        firstName: 'Jennifer',
        lastName: 'Ownerson',
        email: 'jennifern@ownerson.com',
      },
    ],
  },
  fullAccess: false,
  averageImprovement: {
    totalPoints: '290',
    readingAndWriting: '47',
    math: '146',
  },
  pipeline: {
    unactivated: '31',
    current: '9',
    complete: '12',
    waitingForFinalScore: '27',
  },
  targetScores: {
    percentageHitTargetScore: '81',
  },
  studentImprovement: {
    noGain: '32',
    from0To50: '19',
    from50To99: '60',
    from100To149: '77',
    from150To199: '62',
    from200Plus: '91',
  },
  averagePerCourse: {
    hoursOfInstruction: '31.9',
    lessons: '74.2',
    worksheets: '6.5',
    practiceTests: '1.7',
  },
};

export default updatedUser;
