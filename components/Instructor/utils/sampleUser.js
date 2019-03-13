const updatedUser = {
  id: '1232',
  studentInformation: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    gender: 'Male',
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
};

export default updatedUser;
