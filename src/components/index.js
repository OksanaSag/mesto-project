    import '../pages/index.css';
    import {initialCards} from './cards.js';
    import {enableValidation} from './validate.js';
    import {openPopup, closePopup} from './modal.js';
    import {createCard, insertToContainer} from './card.js';
    
    const profileEditPopup = document.querySelector('.profile__edit-button');
    const newPictureButton = document.querySelector('.profile__add-picture');
    const profileCloseButton = document.querySelector('#formClose');
    const newPictureCloseButton = document.querySelector('#formClosePicture');
    const formEditProfile = document.querySelector('#profileName');
    const newPictureForm = document.querySelector('#profilePicture');
    const bigPictureClose = document.querySelector('#formCloseBigPicture');
    profileEditPopup.formOpen = document.querySelector('#formOpen'); 
    newPictureButton.formOpen = document.querySelector('#formOpenPicture'); 
    profileCloseButton.formClose = document.querySelector('#formOpen'); 
    newPictureCloseButton.formClose = document.querySelector('#formOpenPicture'); 
    formEditProfile.formClose = document.querySelector('#formOpen'); 
    newPictureForm.formClose = document.querySelector('#formOpenPicture'); 
    bigPictureClose.formClose = document.querySelector('#bigPicture'); 
    const namePicture = document.getElementById('title-input');
    const linkPicture = document.getElementById('url-input');
    const nameInput = document.querySelector('.form__line_box_name');
    const jobInput = document.querySelector('.form__line_box_description');
    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description');  
    export const template = document.querySelector('#elementsList');
    export const popupBigPicture = document.querySelector('#bigPicture');
    export const pictureCaption = popupBigPicture.querySelector('.form__caption');
    export const formImage = popupBigPicture.querySelector('.form__image');
    const enable = {
        formSelector: '.form',
        formPopup: '.form__position',
        inputSelector: '.form__line',
        submitButtonSelector: '.form__button',
        inactiveButtonClass: 'form__button_inactive',
        activeButtonClass: 'form__button_active',
        inputErrorClass: 'form__line_type_error',
        errorClass: 'form__line-error_active'
      }; 

    function addPicture(evt) {
        evt.preventDefault();
        const element  = {name:namePicture.value, link:linkPicture.value };
        insertToContainer(createCard(element),true);
        namePicture.value = '';
        linkPicture.value = '';
        closePopup(evt);
        enableValidation(enable);
    }
    
    function editProfile(evt) {
        evt.preventDefault(); 
        profileName.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        closePopup(evt);
    }
    initialCards.forEach((function (element) {
        insertToContainer(createCard(element));
    }))

    profileEditPopup.addEventListener('click', openPopup);
    newPictureButton.addEventListener('click', openPopup);
    profileCloseButton.addEventListener('click', closePopup);
    newPictureCloseButton.addEventListener('click', closePopup);
    bigPictureClose.addEventListener('click', closePopup);
    formEditProfile.addEventListener('submit', editProfile);
    newPictureForm.addEventListener('submit', addPicture);  

    enableValidation(enable); 
    
        
      
      
        
        