

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