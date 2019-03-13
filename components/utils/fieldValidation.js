import { toast } from 'react-toastify';
/* eslint-disable array-callback-return */

// HOW THESE FUNCTIONS WORK
// Each nested validation function takes these three props - component state, a validation state setter, and a set validation function
// Component state is self-explanatory - it's a copy of the entire component state
// The validation state setter refers to a function in the component that sets updated validation state and dispatches the set validation function as a callback
// nestedEditFieldValidation takes updatedInstance as an additional prop - this is the state instance the user has been updating in edit mode

// We set an initial validation boolean that will be switched to false if an invalid field is found
// We also create a shallow copy of the component's validation map
// With the nested functions, we map through the validation state and each object contained within for that component's nested state: for example, ownerContactInfo, locationContactInfo, and locationBranding
// Both functions check if the component state has valid input, referred to by field, and whether that key/field is required - the edit variation checks the user-updated state
// If an invalid input is found, that boolean in the validation map is set to false, along with validForm
// The validation state setter is dispatched with the updated validation map
// The set validation function is passed down from the container level and provides the component with the toast displaying all invalid fields

export const nestedEditFieldValidation = (componentState, updatedInstance, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const { validation } = componentState;
  const initialValidation = { ...validation };

  Object.keys(validation).map(fieldSection => {
    if (!updatedInstance[fieldSection] && initialValidation[fieldSection]) { initialValidation[fieldSection] = false; }
    Object.keys(validation[fieldSection]).map(field => {
      if (!updatedInstance[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });
  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};

export const shallowEditFieldValidation = (componentState, updatedInstance, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const { validation } = componentState;
  const initialValidation = { ...validation };

  Object.keys(validation).map(field => {
    if (!updatedInstance[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });
  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};


export const nestedCreateFieldValidation = (componentState, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const { validation } = componentState;
  const initialValidation = { ...validation };

  Object.keys(validation).map(fieldSection => {
    if (!componentState[fieldSection] && initialValidation[fieldSection]) { initialValidation[fieldSection] = false; }
    Object.keys(validation[fieldSection]).map(field => {
      if (!componentState[fieldSection][field] && initialValidation[fieldSection][field]) {
        initialValidation[fieldSection][field] = false;
        validForm = false;
      }
    });
  });
  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};

export const shallowCreateFieldValidation = (componentState, validationStateSetter, setValidationFunc) => {
  let validForm = true;
  const { validation } = componentState;
  const initialValidation = { ...validation };

  Object.keys(validation).map(field => {
    if (!componentState[field] && initialValidation[field]) {
      initialValidation[field] = false;
      validForm = false;
    }
  });
  validationStateSetter(initialValidation, setValidationFunc(initialValidation));
  return validForm;
};

// validationState is set in state from the root create or edit when an invalid section is found
// This function maps through the validation object, checks for invalid fields, and converts them to regular english based on validationFieldMap
export const parseInvalidFieldsToString = (validationState, validationFieldMap) => {
  const invalidFields = [];
  Object.keys(validationState).map(fieldSection => {
    if (validationState[fieldSection] === false) { invalidFields.push(validationFieldMap[fieldSection]); }
    Object.keys(validationState[fieldSection]).map(field => {
      if (validationState[fieldSection][field] === false) {
        invalidFields.push(validationFieldMap[field]);
      }
    });
  });
  return invalidFields.join(', ');
};

export const shallowParseInvalidFieldsToString = (validationState, validationFieldMap) => {
  const invalidFields = [];
  Object.keys(validationState).map(field => {
    if (validationState[field] === false) {
      invalidFields.push(validationFieldMap[field]);
    }
  });
  return invalidFields.join(', ');
};


export const saveNewSuccess = (name) => toast.success(`Your ${name} has been successfully saved!`, {
  className: 'update-success',
  progressClassName: 'progress-bar-success',
});
export const saveChangesSuccess = () => toast.success("Your changes have been successfully saved!", {
  className: 'update-success',
  progressClassName: 'progress-bar-success',
});
export const saveNewError = (validationState, validationFieldMap, shallowValidation = false) =>
  toast.error(
    `Please fill out the following required fields: ${shallowValidation ? shallowParseInvalidFieldsToString(validationState, validationFieldMap) : parseInvalidFieldsToString(validationState, validationFieldMap)}`, {
      className: 'update-error',
      progressClassName: 'progress-bar-error',
    });
