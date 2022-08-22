const showInputError = (formElement,inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.add('form__line_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__line-error_active');
};
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
    inputElement.classList.remove('form__line_type_error');
    errorElement.classList.remove('form__line-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}; 

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('form__button_inactive');
        buttonElement.classList.remove('form__button_active');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('form__button_inactive');
        buttonElement.classList.add('form__button_active');
        buttonElement.disabled = false;
    }
}; 

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__line'));
    const buttonElement = formElement.querySelector('.form__button');
    
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
           checkInputValidity(formElement, inputElement); 
           toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.page'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__position'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });
    });
};
enableValidation();


