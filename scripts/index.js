    import {initialCards} from './cards.js';
    import {toggleButtonState, enableValidation} from './validate.js';
    import {openPopup, closePopup} from './modal.js';
    
    const profileEditPopup = document.querySelector('.profile__edit-button');
    const newPictureButton = document.querySelector('.profile__add-picture');
    const profileCloseButton = document.querySelector('#formClose');
    const newPictureCloseButton = document.querySelector('#formClosePicture');
    const formEditProfile = document.querySelector('#profileName');
    const newPictureForm = document.querySelector('#profilePicture');
    const bigPictureClose = document.querySelector('#formCloseBigPicture');
    profileEditPopup.addEventListener('click', openPopup);
    newPictureButton.addEventListener('click', openPopup);
    profileCloseButton.addEventListener('click', closePopup);
    newPictureCloseButton.addEventListener('click', closePopup);
    bigPictureClose.addEventListener('click', closePopup);
    profileEditPopup.formOpen = document.querySelector('#formOpen'); 
    newPictureButton.formOpen = document.querySelector('#formOpenPicture'); 
    profileCloseButton.formClose = document.querySelector('#formOpen'); 
    newPictureCloseButton.formClose = document.querySelector('#formOpenPicture'); 
    formEditProfile.formClose = document.querySelector('#formOpen'); 
    newPictureForm.formClose = document.querySelector('#formOpenPicture'); 
    bigPictureClose.formClose = document.querySelector('#bigPicture'); 
    





    const nameInput = document.querySelector('.form__line_box_name');
    const jobInput = document.querySelector('.form__line_box_description');
    const profileName = document.querySelector('.profile__name');
    const profileDescription = document.querySelector('.profile__description');
function editProfile(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(evt);
}
    formEditProfile.addEventListener('submit', editProfile);

    const popupBigPicture = document.querySelector('#bigPicture');
function openPicture (evt) {
    popupBigPicture.querySelector('.form__image').src = evt.target.src;
    popupBigPicture.querySelector('.form__image').alt = evt.target.alt;
    const pictureCaption = popupBigPicture.querySelector('.form__caption');
    pictureCaption.textContent = evt.target.parentNode.querySelector('.elements__caption').textContent;
    openPopup(evt);
}

function clickLike(evt) {
    evt.target.classList.toggle('elements__button_active');
 }
    const template = document.querySelector('#elementsList');

function createCard(element){
    const clone = template.content.cloneNode(true);
    const elelementsCaption = clone.querySelector('.elements__caption');
    const elementImage = clone.querySelector('.elements__image');
    const likeButton = clone.querySelector('.elements__button');
    likeButton.addEventListener('click', clickLike);

    const trashButton = clone.querySelector('.elements__trash');
    trashButton.addEventListener('click', function () {
        const listItem = trashButton.closest('.elements__foto');
        listItem.remove();
    });

    elementImage.addEventListener('click', openPicture);
    elementImage.formOpen = document.querySelector('#bigPicture'); 
    elelementsCaption.textContent = element.name;
    elementImage.src = element.link;
    elementImage.alt = element.name;
    return clone;
}

function insertToContainer(cardElement, isPretend = false) {
    if(isPretend)
        template.parentNode.prepend(cardElement);
    else
        template.parentNode.append(cardElement);
}

    initialCards.forEach((function (element) {
        insertToContainer(createCard(element));
    }))

    const namePicture = document.getElementById('title-input');
    const linkPicture = document.getElementById('url-input');
      
function addPicture(evt) {
    evt.preventDefault();
    const element  = {name:namePicture.value, link:linkPicture.value };
    insertToContainer(createCard(element),true);
    namePicture.value = '';
    linkPicture.value = '';
    closePopup(evt);
}
    newPictureForm.addEventListener('submit', addPicture);  
        
        