import {openPicture} from './modal.js';
import {template, likeCount, currentUser, deledeLike} from './index.js';

export function createCard(element){
    const clone = template.content.cloneNode(true);
    const elelementsCaption = clone.querySelector('.elements__caption');
    const elementImage = clone.querySelector('.elements__image');
    const likeButton = clone.querySelector('.elements__button');
    const trashButton = clone.querySelector('.elements__trash');
    const likeCounter = clone.querySelector('.elements__like-counter');
    let count = 0;
    if (element.likes != undefined) count = element.likes.length;
    element.likes.forEach((function (element) {
        //console.log(element._id)
        //likeButton.classList.add('elements__button_active');
        if(currentUser!=null)
        {
            if(element._id == currentUser){
                likeButton.classList.add('elements__button_active');
            }
        } 
       
    }))
    likeCounter.textContent = count;
    function clickLike(element) {
        likeCounter.innerHTML = count+=1;
        likeButton.classList.toggle('elements__button_active');
        myFunction(element)
     }
        likeButton.addEventListener('click', clickLike);
        likeButton.setAttribute('internal_id',element._id);
        //likeButton.setAttribute('like_id', element.likes[id]);
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

function myFunction(element) {
    let cardId = element.currentTarget.getAttribute('internal_id');
    //let likeId = element.currentTarget.getAttribute('like_id');
    //if (cardId == '275b4bfec021cd779eb36c71') {
       // console.log('hi')
       // document.querySelector('.elements__button').classList.add('elements__button_active');
   // }
    //console.log(likeId);
   // likeCounter.innerHTML = count+=1;
   likeCount(cardId);
   
}


export function insertToContainer(cardElement, isPretend = false) {
    if(isPretend)
        template.parentNode.prepend(cardElement);
    else
        template.parentNode.append(cardElement);
}





 
 