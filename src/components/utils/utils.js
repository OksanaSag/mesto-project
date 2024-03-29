export const nameInput = document.querySelector('.form__line_box_name');
export const jobInput = document.querySelector('.form__line_box_description');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description'); 
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupBigPicture = document.querySelector('#bigPicture');
export const pictureCaption = popupBigPicture.querySelector('.form__caption');
export const formImage = popupBigPicture.querySelector('.form__image');
export const newPictureButton = document.querySelector('.profile__add-picture');
export const buttonSubmit = newPictureButton.querySelector('.form__button'); 
export const template = document.querySelector('#elementsList');
export const newCardButton = document.querySelector('#newCardButton');
export const profileNameChange = document.querySelector('#profileNameChange');
export const formButtonAvatar = document.querySelector('#formButtonAvatar');
    
export const validationConfig = {
    formSelector: '.form',
    formPopup: '.form__position',
    inputSelector: '.form__line',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_inactive',
    activeButtonClass: 'form__button_active',
    inputErrorClass: 'form__line_type_error',
    errorClass: 'form__line-error_active',
    formButtonAvatar: 'formButtonAvatar',
    profileNameChange: 'profileNameChange'
};
export function renderLoading(isLoading, saveButton) {
    if (isLoading) {
        saveButton.textContent = 'Сохранение...';
    } else {
        saveButton.textContent = 'Сохранить';
    }
  }
