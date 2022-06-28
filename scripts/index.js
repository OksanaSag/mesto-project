    const profileEditPopup = document.querySelector('.profile__edit-button');
    const newPictureButton = document.querySelector('.profile__add-picture');
    const profileCloseButton = document.querySelector('#formClose');
    const newPictureCloseButton = document.querySelector('#formClosePicture');
    const formEditProfile = document.querySelector('.form__position');
    const newPictureForm = document.querySelector('#form-Position');
    const bigPictureClose = document.querySelector('#formCloseBigPicture');
    profileEditPopup.addEventListener('click', openPopup);
    newPictureButton.addEventListener('click', openPopup);
    profileCloseButton.addEventListener('click', closePopup);
    newPictureCloseButton.addEventListener('click', closePopup);
    bigPictureClose.addEventListener('click', closePopup);
    profileEditPopup.openForm = document.querySelector('#formOpen'); 
    newPictureButton.openForm = document.querySelector('#formOpenPicture'); 
    profileCloseButton.closeForm = document.querySelector('#formOpen'); 
    newPictureCloseButton.closeForm = document.querySelector('#formOpenPicture'); 
    formEditProfile.closeForm = document.querySelector('#formOpen'); 
    newPictureForm.closeForm = document.querySelector('#formOpenPicture'); 
    bigPictureClose.closeForm = document.querySelector('#bigPicture'); 

function openPopup(evt) {
    evt.currentTarget.openForm.classList.add('form_opened');
}
function closePopup(evt) {
    evt.currentTarget.closeForm.classList.remove('form_opened');
}

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
    elementImage.openForm = document.querySelector('#bigPicture'); 
    elelementsCaption.textContent = element.name;
    elementImage.src = element.link;
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

    const namePicture = document.getElementById('inputNamePicture');
    const linkPicture = document.getElementById('inputPicture');
      
function addPicture(evt) {
    evt.preventDefault();
    const element  = {name:namePicture.value, link:linkPicture.value };
    insertToContainer(createCard(element),true);
    namePicture.value = '';
    linkPicture.value = '';
    closePopup(evt);
}
    newPictureForm.addEventListener('submit', addPicture);  
        
        