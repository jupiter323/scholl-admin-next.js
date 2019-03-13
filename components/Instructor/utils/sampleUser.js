const updatedUser = {
  id: '1232',
  userInfo: {
    firstName: 'Christian',
    lastName: 'Chavarro',
    email: 'christian-chavarro@email.com',
    gender: 'Male',
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
};

export default updatedUser;
