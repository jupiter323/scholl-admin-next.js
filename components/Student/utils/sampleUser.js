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
  emailAddress: 'test@email.com',
  location: {
    locations: [],
  },
  instructor: {
    instructors: [],
  },
  classes: [],
  courseContext: {
    courseStartDate: '02/02/2019',
    courseEndDate: '07/10/2019',
    targetTestDate: '12/12/2019',
    targetScore: '1234',
    highSchool: 'Everglades High',
    graduationYear: '2018',
  },
  accountSettings: {
    loginBeforeActivation: false,
    unstructuredCourseMode: false,
    videoSolutionsRequired: false,
    preventLogin: false,
    inactive: false,
    excludeFromStatistics: false,
  },
};

export default updatedUser;
