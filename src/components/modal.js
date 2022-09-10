import {pictureCaption, formImage} from './utils/utils.js';


const forms = Array.from(document.querySelectorAll('.form'));
export function openPopup(evt) {
    evt.currentTarget.formOpen.classList.add('form_opened');
    document.addEventListener('keydown', closeEscape);
    evt.currentTarget.formOpen.addEventListener('click', closeOverlay);
}
function closeOverlay(evt) {
    const formOpened = document.querySelector('.form_opened');
    if(formOpened === null) {
        return;
    }
    const formArea = formOpened.querySelector('.form__popup');
    const withinBoundaries = evt.composedPath().includes(formArea);
    if ( ! withinBoundaries ) {
        closePopupInternal(evt.currentTarget);
    }
}
export function closePopup(evt) {
    closePopupInternal(evt.currentTarget.formClose);   
}


export function closePopupInternal(formClosing) {
    document.removeEventListener('keydown', closeEscape);
    formClosing.removeEventListener('click', closeOverlay);
    formClosing.classList.remove('form_opened');
}

function closeEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.form_opened');
        closePopupInternal(openedPopup);
    };
} 
export function openPicture(evt) {
    formImage.src = evt.target.src;
    formImage.alt = evt.target.alt;
    pictureCaption.textContent = evt.target.parentNode.querySelector('.elements__caption').textContent;
    openPopup(evt);
}