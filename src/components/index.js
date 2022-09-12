    import '../pages/index.css';
    import {createCard,initialiseCurrentUser} from './card.js';
    import {addCard, updateAvatar, updateUserInfo, getUserInfo, getCards, likeCard, deleteLike, deleteCard} from './api.js';
    import {enableValidation, disableButton} from './validate.js';
    import {openPopup, closePopup, openPicture} from './modal.js';
    import {nameInput, profileAvatar, profileDescription, profileName, jobInput, validationConfig, template, renderLoading} from './utils/utils.js';
    
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
    avatarPicture.formClose = document.querySelector('#formOpenAvatar'); 
    const namePicture = document.getElementById('title-input');
    const linkPicture = document.getElementById('url-input');
    const linkAvatar = document.getElementById('url-avatar');
    const formButtonAvatar = document.querySelector('#formButtonAvatar');
    formButtonAvatar.formClose = document.querySelector('#formOpenAvatar');

    const handlerConfig = {
        openPicture: openPicture,
        clickLike: clickLike,
        deleteCard: deleteCard
    }

    getUserInfo()
    .then((res) => {
        profileAvatar.src = res.avatar;
        profileName.textContent = res.name;
        profileDescription.textContent = res.about;
        nameInput.value = res.name;
        jobInput.value = res.about;
        initialiseCurrentUser(res._id);
        console.log(res.avatar);
    })
    .then(() => getCards())
    .then((res) => {
        res.forEach((function (element) {
            insertToContainer(createCard(element,handlerConfig,template, deleteCardHandler));
        }));
    })
    .catch((err) => {
        console.log(err); 
    }); 
    function deleteCardHandler(cardTrash){
        confa.deleteCard(cardTrash)
        .catch((err) => {
            console.log(err); 
        });
    }

    function addPicture(evt) {
        renderLoading(true,newCardButton);
        evt.preventDefault()
        addCard(namePicture.value, linkPicture.value, evt)
        .then((res) => {
            disableButton(validationConfig, newCardButton);
            closePopup(evt.target.formClose);
            insertToContainer(createCard(res,handlerConfig,template),true);
            namePicture.value = '';
            linkPicture.value = '';
        })
        .catch((err) => {
            console.log(err); 
            
        })
        .finally(() => {
            renderLoading(false,newCardButton);
        });
    }

    function changeAvatar (evt){
        renderLoading(true,formButtonAvatar);
        evt.preventDefault();
        profileAvatar.src = linkAvatar.value;
        updateAvatar(linkAvatar.value, evt)
        .then((res) => {
            disableButton(validationConfig, formButtonAvatar);
            closePopup(evt.target.formClose);
            linkAvatar.value = '';
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            renderLoading(false,formButtonAvatar);
        });
    }

    function editProfile(evt) {
        renderLoading(true,profileNameChange);
        evt.preventDefault(); 
        profileName.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        updateUserInfo(nameInput.value,jobInput.value, evt)
        .then((res) => {
            disableButton(validationConfig, profileNameChange);
            closePopup(evt.target.formClose);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false,profileNameChange);
        });
    }

    export function insertToContainer(cardElement, isPrepend = false) {
        if(isPrepend)
            template.parentNode.prepend(cardElement);
        else
            template.parentNode.append(cardElement);
    }
    function clickLike(evt) {
        evt.currentTarget.classList.toggle('elements__button_active');
        countLike(evt);
     }
    
     function countLike(evt) {
        const cardId = evt.currentTarget.getAttribute('internal_id');
        if(evt.currentTarget.classList.contains('elements__button_active')){
            likeCard(cardId) 
            .catch((err) => {
                console.log(err); 
            }); 
            evt.currentTarget.parentElement.querySelector('.elements__like-counter').textContent-=-1;
        } else {
            deleteLike(cardId)
            .catch((err) => {
                console.log(err); 
                
            }); 
            evt.currentTarget.parentElement.querySelector('.elements__like-counter').textContent-=+1;
        } 
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
    
    enableValidation(validationConfig); 