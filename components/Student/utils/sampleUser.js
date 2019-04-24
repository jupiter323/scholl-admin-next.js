const updatedUser = {
  id: '1232',
  studentInformation: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    gender: 'Male',
  },
  contactInformation: {
    phone: '7865645859',
    addressLine1: '1234 Test Lane',
    addressLine2: '',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757',
  },
  emailAddress: {
    email: 'test@email.com',
  },
  location: {
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
  instructor: {
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
  course: {
    classes: [],
  },
  courseContext: {
    courseStartDateOption: 'secondOption',
    courseStartDate: '',
    courseEndDateOption: 'secondOption',
    courseEndDate: '',
    targetTestDate: '12/12/2019',
    targetScore: '1234',
    highSchool: 'Everglades High',
    graduationYear: '2018',
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    defaultSessionDuration: '',
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false,
  },
  accountStatus: {
    licenseCode: '792AF70E-DC1C-1448-FCCB5DA2C5890364',
    status: 'Activated',
    activationDate: '6/16/2017',
    expirationDate: '6/16/2017',
  },
  accountType: {
    licenseType: 'classMember',
  },
};

export default updatedUser;