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
    locations: [],
  },
  instructor: {
    instructors: [],
  },
  classes: [],
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
};

export default updatedUser;
