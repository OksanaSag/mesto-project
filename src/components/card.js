import {currentUser} from './index.js';
let count = 0;
export function createCard (element,  handlerConfig, template) {
    const clone = template.content.cloneNode(true);
    const elelementsCaption = clone.querySelector('.elements__caption');
    const elementImage = clone.querySelector('.elements__image');
    const likeButton = clone.querySelector('.elements__button');
    const trashButton = clone.querySelector('.elements__trash');
    const likeCounter = clone.querySelector('.elements__like-counter');
   
    if(element.owner._id !== currentUser){
        trashButton.setAttribute('style', 'display:none');
    }
    if (element.likes !== undefined) count = element.likes.length;
        element.likes.forEach((function (element) {
            if(currentUser!==null) {
                if(element._id === currentUser){
                    likeButton.classList.add('elements__button_active');
                }
            } 
   }))
    likeCounter.textContent = count;
        likeButton.addEventListener('click', handlerConfig.clickLike);
        likeButton.setAttribute('internal_id',element._id);
        trashButton.formOpen = document.querySelector('#formOpenTrashCard'); 
        trashButton.addEventListener('click', function (evt) {
                const listItem = trashButton.closest('.elements__foto');
                listItem.remove();
                handlerConfig.deleteCard(element._id);
        });
    elementImage.addEventListener('click', handlerConfig.openPicture);
    elementImage.formOpen = document.querySelector('#bigPicture'); 
    elelementsCaption.textContent = element.name;
    elementImage.src = element.link;
    elementImage.alt = element.name;
    return clone;
}

 


 
 