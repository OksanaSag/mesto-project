    import '../pages/index.css';
    import {createCard,initialiseCurrentUser} from './card.js';
    import {addCard, updateAvatar, updateUserInfo, getUserMe, getCards, likeCard, deleteLike, deleteCard} from './api.js';
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

    /*
    getCards()
    .then((res) => {
        res.forEach((function (element) {
            insertToContainer(createCard(element,openPicture,template));
        }));
    })
    .catch((err) => {
        console.log(err); 
    }); */

    getUserMe()
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
            insertToContainer(createCard(element,openPicture,template, deleteCard,clickLike));
        }));
    })
    .catch((err) => {
        console.log(err); 
    }); 
    
    deleteCard()
    .then((res) => {
        res._id = element._id
    })
    .catch((err) => {
        console.log(err); 
    }); 
      ///
      /*
    deleteLike()
    .then((res) => {
        
    })
    .catch((err) => {
        console.log(err); 
    }); 
    likeCard()
    .then((res) => {
       
    })
    .catch((err) => {
        console.log(err); 
    });*/

    


//.then
    function addPicture(evt) {
        renderLoading(true,newCardButton);
        evt.preventDefault()
        addCard(namePicture.value, linkPicture.value, evt)
        .then((res) => {
            disableButton(validationConfig, newCardButton);
            closePopup(evt.target.formClose);
            renderLoading(false,newCardButton);
            insertToContainer(createCard(res,openPicture,template, deleteCard,clickLike),true);
        })
        .catch((err) => {
            console.log(err); 
            
        }); 
        const element  = {name:namePicture.value, link:linkPicture.value };
        namePicture.value = '';
        linkPicture.value = '';
    }

    function changeAvatar (evt){
        renderLoading(true,formButtonAvatar);
        evt.preventDefault();
        profileAvatar.src = linkAvatar.value;
        updateAvatar(linkAvatar.value, evt)
        .then((res) => {
            disableButton(validationConfig, formButtonAvatar);
            closePopup(evt.target.formClose);
            renderLoading(false,formButtonAvatar);
        })
        .catch((err) => {
            console.log(err); 
        }); 
        linkAvatar.value = '';
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
            renderLoading(false,profileNameChange);
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export function insertToContainer(cardElement, isPretend = false) {
        if(isPretend)
            template.parentNode.prepend(cardElement);
        else
            template.parentNode.append(cardElement);
    }
    function clickLike(evt) {
        evt.currentTarget.classList.toggle('elements__button_active');
        countLike(evt);
     }
    
     function countLike(evt) {
        let cardId = evt.currentTarget.getAttribute('internal_id');
        if(evt.currentTarget.classList.contains('elements__button_active')){
            likeCard(cardId) 
            evt.currentTarget.parentElement.querySelector('.elements__like-counter').textContent-=-1;
        } else {
            deleteLike(cardId);
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