    import '../pages/index.css';
    import {initialCards} from './cards.js';
    import {enableValidation, disableButton} from './validate.js';
    import {openPopup, closePopup} from './modal.js';
    import {createCard, insertToContainer} from './card.js';
    
    const profileEditPopup = document.querySelector('.profile__edit-button');
    const newPictureButton = document.querySelector('.profile__add-picture');
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
    const nameInput = document.querySelector('.form__line_box_name');
    const jobInput = document.querySelector('.form__line_box_description');
    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description'); 
    const profileAvatar = document.querySelector('.profile__avatar'); 
    const formButtonAvatar = document.querySelector('#formButtonAvatar'); //
    formButtonAvatar.formClose = document.querySelector('#formOpenAvatar'); //
    const elementsImage = document.querySelector('.elements__image'); 
    const elementsCaption = document.querySelector('.elements__caption'); 
    export const template = document.querySelector('#elementsList');
    export const popupBigPicture = document.querySelector('#bigPicture');
    export const pictureCaption = popupBigPicture.querySelector('.form__caption');
    export const formImage = popupBigPicture.querySelector('.form__image');
    const buttonSubmit = newPictureButton.formOpen.querySelector('.form__button');
    export let currentUser;
    
    

    const enable = {
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

    function addPicture(evt) {
        evt.preventDefault();
        const element  = {name:namePicture.value, link:linkPicture.value };
        userFoto(namePicture.value, linkPicture.value);
        //insertToContainer(createCard(element),true);
        namePicture.value = '';
        linkPicture.value = '';
        disableButton(enable, buttonSubmit);
        closePopup(evt);
    }
   


    profileEditPopup.addEventListener('click', openPopup);
    newPictureButton.addEventListener('click', openPopup);
    avatarChange.addEventListener('click', openPopup);
    newPictureCloseButton.addEventListener('click', closePopup);
    bigPictureClose.addEventListener('click', closePopup);
    formCloseAvatar.addEventListener('click', closePopup);
    formButtonAvatar.addEventListener('click', closePopup);
    formEditProfile.addEventListener('submit', editProfile);
    newPictureForm.addEventListener('submit', addPicture);  
    avatarPicture.addEventListener('submit', changeAvatar);//


function changeAvatar (evt){
    evt.preventDefault();
    profileAvatar.src = linkAvatar.value;
    userAvatar(linkAvatar.value);
    linkAvatar.value = '';
    disableButton(enable, formButtonAvatar);
}



    enableValidation(enable); 
    
        
    fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
        headers: {
          authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5'
        }
      })
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          res.forEach((function (element) {
            insertToContainer(createCard(element));
        }));
      }); 
     




    fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
        headers: {
            authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5'
        }
    })
    .then(res => res.json())
        .then((res) => {
            //console.log(res)
            profileAvatar.src = res.avatar;
            profileName.textContent = res.name;
            profileDescription.textContent = res.about;
            nameInput.value = res.name;
            jobInput.value = res.about;
            currentUser = res._id;
            console.log(res.avatar);
      }); 
      
      function editProfile(evt) {
        evt.preventDefault(); 
        profileName.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        userNameAbout(nameInput.value,jobInput.value);
        disableButton(enable, profileNameChange);
        closePopup(evt);
    }
    export const userNameAbout = (userName, userAbout) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            about: userAbout
        })
    })
    /*
    .then(res => res.json())
    .then((res) => {
       //currentUser = res._id;
   
    })*/
}

   const userFoto = (fotoName, fotoLink) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
        method: 'POST',
        headers: {
            authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: fotoName,
            link: fotoLink
        })
    })
    .then(res => res.json())
    .then((res) => {
        insertToContainer(createCard(res),true);
        //console.log(res)
})
   }
  let likesLength;
export const likeCount = (cardId) => {
      fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/' + cardId, {
        method: 'PUT',
        headers: {
            authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: cardId
        })
}) 
.then(res => res.json())
        .then((res) => {
            likesLength = res.likes
            
      }); 
      
}
console.log(likesLength)
export const deledeLike = (cardId) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/'  + cardId, {
       method: 'DELETE',
       headers: {
           authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           _id: cardId
       })
})
}
export const deleteCard = (cardTrash) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-14/cards/'  + cardTrash, {
       method: 'DELETE',
       headers: {
           authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           _id: cardTrash
       })
})
}

export const userAvatar = (avatar) => {
    fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatar
        })
    })
    .then(res => res.json())
        .then((res) => {
            avatar = res.avatar
            
      }); 
}

