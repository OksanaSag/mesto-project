import {popupBigPicture, pictureCaption, formImage} from './index.js';


const forms = Array.from(document.querySelectorAll('.form'));
export function openPopup(evt) {
    evt.currentTarget.formOpen.classList.add('form_opened');
    document.addEventListener('keydown', closeEscape);
    forms.forEach((overlayElement) => {
        overlayElement.addEventListener('click', closeOverlay);
    })
}
function closeOverlay(evt) {
    const formOpened = document.querySelector('.form_opened');
    if(formOpened == null) {
        return;
    }
    const formArea = formOpened.querySelector('.form__popup');
    const withinBoundaries = evt.composedPath().includes(formArea);
    if ( ! withinBoundaries ) {
        closePopup(evt);
    }
}
export function closePopup(evt) {
    document.removeEventListener('keydown', closeEscape);
    forms.forEach((overlayElement) => {
        overlayElement.removeEventListener('click', closeOverlay);
    })
    document.querySelector('.form_opened').classList.remove('form_opened');
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