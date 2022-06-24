const openPopup = document.getElementById('profileOpen');
const closePopup = document.getElementById('formClose');
const popup = document.getElementById('formOpen');
const popupPicture = document.getElementById('profileOpenPicture');
const formPicture = document.getElementById('formOpenPicture');
const popupClose = document.getElementById('formClosePicture');

function openFunction () {
    popup.classList.add('form_opened'); 
}
function closeFunction () {
    popup.classList.remove('form_opened');
}
function openFunctionPicture () {
    formPicture.classList.add('form_opened'); 
}
function closeFunctionPicture  () {
    formPicture.classList.remove('form_opened');
}

openPopup.addEventListener('click', openFunction);
closePopup.addEventListener('click', closeFunction);
popupPicture.addEventListener('click', openFunctionPicture);
popupClose.addEventListener('click', closeFunctionPicture);


const formElement = document.querySelector('.form__position');
const nameInput = document.querySelector('.form__line_box_name');
const jobInput = document.querySelector('.form__line_box_description');
const profilename = document.querySelector('.profile__name');
const profiledescription = document.querySelector('.profile__description');
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profilename.textContent = nameInput.value;
    profiledescription.textContent = jobInput.value;
    closeFunction();
}
formElement.addEventListener('submit', formSubmitHandler);

 const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];




    const template = document.querySelector('#elementsList');
    function Draw(element, isPretend = false){
        const clone = template.content.cloneNode(true);
    
        const elelementsCaption = clone.querySelector('.elements__caption');
        const img = clone.querySelector('.elements__image');
    
        const like = clone.querySelector('.elements__button');

        like.addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements__button_active');

        });
        const deleteButton = clone.querySelector('.elements__trash');
        deleteButton.addEventListener('click', function () {
               const listItem = deleteButton.closest('.elements__foto');
       
               listItem.remove();
       });

    
        elelementsCaption.textContent = element.name;
        img.src = element.link;
        clone.querySelector('li').classList.add('removeIt');
        if(isPretend)
            template.parentNode.prepend(clone);
        else
           template.parentNode.append(clone);
         
    }

    initialCards.forEach((function (element) {
        Draw(element);
      }))



      const formPosition = document.getElementById('form-Position');
      const namePicture = document.getElementById('inputNamePicture');
      const linkPicture = document.getElementById('inputPicture');
      
      function addPicture(evt) {
          evt.preventDefault();
          const element  = {name:namePicture.value, link:linkPicture.value };
          Draw(element, true);
          closeFunctionPicture();
      }
      formPosition.addEventListener('submit', addPicture);   
            like.onclick = function(evt) {
            evt.target.classList.toggle('elements__button_active'); 
        }
    
        
        