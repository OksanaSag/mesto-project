import {openPicture} from './modal.js';
import {template} from './index.js';

export function createCard(element){
    const clone = template.content.cloneNode(true);
    const elelementsCaption = clone.querySelector('.elements__caption');
    const elementImage = clone.querySelector('.elements__image');
    const likeButton = clone.querySelector('.elements__button');
    const trashButton = clone.querySelector('.elements__trash');
        likeButton.addEventListener('click', clickLike);
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
export function insertToContainer(cardElement, isPretend = false) {
    if(isPretend)
        template.parentNode.prepend(cardElement);
    else
        template.parentNode.append(cardElement);
}
function clickLike(evt) {
    evt.target.classList.toggle('elements__button_active');
 }
 