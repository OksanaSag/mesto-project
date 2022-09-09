    import '../pages/index.css';
    import {addCard, updateAvatar, updateUserInfo} from './api.js';
    import {enableValidation} from './validate.js';
    import {openPopup, closePopup} from './modal.js';
    import {nameInput, profileAvatar, profileDescription, profileName, jobInput, validationConfig, template} from './utils/utils.js';
    
    const profileEditPopup = document.querySelector('.profile__edit-button');
    const newPictureButton = document.querySelector('.profile__add-picture');//
    const avatarChange = document.querySelector('.profile__avatar-change');
    const profileCloseButton = document.querySelector('#formClose');
    const formCloseAvatar = document.querySelector('#formCloseAvatar');
    const newPictureCloseButton = document.querySelector('#formClosePicture');
    const formEditProfile = document.querySelector('#profileName');
    const newPictureForm = document.querySelector('#profilePicture');
    const avatarPicture = document.querySelector('#avatarPicture');
    const bigPictureClose = document.querySelector('#formCloseBigPicture');
    profileEditPopup.formOpen = document.querySelector('#formOpen'); 
    avatarChange.formOpen = document.querySelector('#formOpenAvatar'); 
    const profileNameChange = document.querySelector('#profileNameChange');
    const newCardButton = document.querySelector('#newCardButton');
    newPictureButton.formOpen = document.querySelector('#formOpenPicture'); 
    formCloseAvatar.formClose = document.querySelector('#formOpenAvatar'); 
    profileCloseButton.formClose = document.querySelector('#formOpen'); 
    newPictureCloseButton.formClose = document.querySelector('#formOpenPicture'); 
    formEditProfile.formClose = document.querySelector('#formOpen'); 
    newPictureForm.formClose = document.querySelector('#formOpenPicture'); 
    bigPictureClose.formClose = document.querySelector('#bigPicture'); 
    const namePicture = document.getElementById('title-input');
    const linkPicture = document.getElementById('url-input');
    const linkAvatar = document.getElementById('url-avatar');
    const formButtonAvatar = document.querySelector('#formButtonAvatar');
    formButtonAvatar.formClose = document.querySelector('#formOpenAvatar');
    //export const nameInput = document.querySelector('.form__line_box_name');
    //export const jobInput = document.querySelector('.form__line_box_description');
    //export const profileName = document.querySelector('.profile__name');
    //export const profileDescription = document.querySelector('.profile__description'); 
    //export const profileAvatar = document.querySelector('.profile__avatar'); 
    //export const template = document.querySelector('#elementsList');
    //export const popupBigPicture = document.querySelector('#bigPicture');
    //export const pictureCaption = popupBigPicture.querySelector('.form__caption');
    //export const formImage = popupBigPicture.querySelector('.form__image');
    export const buttonSubmit = newPictureButton.formOpen.querySelector('.form__button');
    //export let currentUser;
    
    

    //export function renderLoadingremove(evt) {
    //    evt.innerText = 'Сохранить';
    //}

    //function renderLoading(evt) {
      //  evt.target.textContent = 'Сохранение...';
    //}

    function addPicture(evt) {
        evt.preventDefault();
        const element  = {name:namePicture.value, link:linkPicture.value };
        addCard(namePicture.value, linkPicture.value);
        namePicture.value = '';
        linkPicture.value = '';
    }

    function changeAvatar (evt){
        evt.preventDefault();
        profileAvatar.src = linkAvatar.value;
        updateAvatar(linkAvatar.value);
        linkAvatar.value = '';
    }

    function editProfile(evt) {
        evt.preventDefault(); 
        profileName.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        updateUserInfo(nameInput.value,jobInput.value);
    }

    export function insertToContainer(cardElement, isPretend = false) {
        if(isPretend)
            template.parentNode.prepend(cardElement);
        else
            template.parentNode.append(cardElement);
    }

    profileEditPopup.addEventListener('click', openPopup);
    newPictureButton.addEventListener('click', openPopup);
    avatarChange.addEventListener('click', openPopup);
    newPictureCloseButton.addEventListener('click', closePopup);
    bigPictureClose.addEventListener('click', closePopup);
    profileCloseButton.addEventListener('click', closePopup);
    formCloseAvatar.addEventListener('click', closePopup);
    formEditProfile.addEventListener('submit', editProfile);
    newPictureForm.addEventListener('submit', addPicture);  
    avatarPicture.addEventListener('submit', changeAvatar);
    profileNameChange.addEventListener('click', evt => {
        evt.target.textContent = 'Сохранение...';
    })
    newCardButton.addEventListener('click', evt => {
        evt.target.textContent = 'Сохранение...';
    })
    formButtonAvatar.addEventListener('click', evt => {
        evt.target.textContent = 'Сохранение...';
    })
    enableValidation(validationConfig); 