const initialState = {
  owner: null,
  locationContactInfo: {
    locationName: '',
    locationNickname: '',
    locationEmail: '',
    locationPhoneNumber: '',
    website: '',
    locationStreetAddress: '',
    locationCity: '',
    locationState: '',
    locationZip: '',
  },
  locationEmailSettings: {
    automatedEmailOrigin: '',
    automatedEmailSalutation: '',
  },
  locationBranding: {
    locationUrl: '',
    headerColor1: '',
    headerColor2: '',
    headerLogoBackgroundColor: '',
    headerLogoBackgroundAlpha: '',
    horizontalLogoVariation: '',
    squareLogoVariation: '',
    backgroundImage: '',
    backgroundBlur: '',
    backgroundOverlayAlpha: '',
    studentWelcomeVideo: '',
    instructorWelcomeVideo: '',
  },
};

export default initialState;
