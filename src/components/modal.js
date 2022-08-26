import {popupBigPicture} from './index.js';
export function openPopup(evt) {
    evt.currentTarget.formOpen.classList.add('form_opened');
    document.addEventListener('keydown', closeEscape);
    const form = Array.from(document.querySelectorAll('.form'));
    form.forEach((overlayElement) => {
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
    document.querySelector('.form_opened').classList.remove('form_opened');
}
function closeEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(evt);
    };
} 
export function openPicture(evt) {
    popupBigPicture.querySelector('.form__image').src = evt.target.src;
    popupBigPicture.querySelector('.form__image').alt = evt.target.alt;
    const pictureCaption = popupBigPicture.querySelector('.form__caption');
    pictureCaption.textContent = evt.target.parentNode.querySelector('.elements__caption').textContent;
    openPopup(evt);
}