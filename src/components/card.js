import {openPicture} from './modal.js';
import {template, likeCount, currentUser, deledeLike, deleteCard} from './index.js';

export function createCard(element){
    const clone = template.content.cloneNode(true);
    const elelementsCaption = clone.querySelector('.elements__caption');
    const elementImage = clone.querySelector('.elements__image');
    const likeButton = clone.querySelector('.elements__button');
    const trashButton = clone.querySelector('.elements__trash');
    const likeCounter = clone.querySelector('.elements__like-counter');

    if(element.owner._id !== currentUser){
        trashButton.setAttribute('style', 'display:none');
    }
    let count = 0;
    if (element.likes != undefined) count = element.likes.length;
    element.likes.forEach((function (element) {
        if(currentUser!=null)
        {
            if(element._id == currentUser){
                likeButton.classList.add('elements__button_active');
            }
        } 
       
    }))
    likeCounter.textContent = count;
    function clickLike(element) {
        likeButton.classList.toggle('elements__button_active');
        myFunction(element)
     }
     function myFunction(element) {
        let cardId = element.currentTarget.getAttribute('internal_id');
       if(likeButton.classList.contains('elements__button_active')){
        likeCount(cardId);
        likeCounter.innerHTML = count+=1;
    } else {
        deledeLike(cardId);
        likeCounter.innerHTML = count-=1;
    }
       
       
    }
        likeButton.addEventListener('click', clickLike);
        likeButton.setAttribute('internal_id',element._id);
        trashButton.addEventListener('click', function () {
            const listItem = trashButton.closest('.elements__foto');
            listItem.remove();
            deleteCard(element._id)
        });
    elementImage.addEventListener('click', openPicture);
    elementImage.formOpen = document.querySelector('#bigPicture'); 
    elelementsCaption.textContent = element.name;
    elementImage.src = element.link;
    elementImage.alt = element.name;
   
   
    return clone;
}




export function insertToContainer(cardElement, isPretend = false) {
    if(isPretend)
        template.parentNode.prepend(cardElement);
    else
        template.parentNode.append(cardElement);
}





 
 