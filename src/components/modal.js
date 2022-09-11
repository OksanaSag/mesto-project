import {pictureCaption, formImage} from './utils/utils.js';

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
        closePopup(evt.currentTarget);
    }
}

export function closePopup(evt) {
    let formClosing = evt;
    if(evt.currentTarget!=null && evt.currentTarget.formClose!=null)
        formClosing = evt.currentTarget.formClose;
    document.removeEventListener('keydown', closeEscape);
    formClosing.removeEventListener('click', closeOverlay);
    formClosing.classList.remove('form_opened');
}

function closeEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.form_opened');
        closePopup(openedPopup);
    };
} 

export function openPicture(evt) {
    formImage.src = evt.target.src;
    formImage.alt = evt.target.alt;
    pictureCaption.textContent = evt.target.parentNode.querySelector('.elements__caption').textContent;
    openPopup(evt);
}