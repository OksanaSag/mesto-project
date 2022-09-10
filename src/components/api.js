import {createCard} from './card.js';
import {insertToContainer} from './index.js';
import {closePopupInternal} from './modal.js';
import {validationConfig, formButtonAvatar, profileNameChange, newCardButton} from './utils/utils.js';
import {disableButton} from './validate.js';
export let currentUser;
export function InitialiseCurrentUser(id) {
    if(currentUser==null)
        currentUser = id;
} 

const config = {
headers: {
    authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
    'Content-Type': 'application/json',
},
}
const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

    export const getCards = () => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
            headers: config.headers,
        })
        .then((res) => checkResponse(res))
    }
   
    export const getUserMe = () => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
        headers: config.headers,
        })
        .then((res) => checkResponse(res))
    }

    export const updateUserInfo = (userName, userAbout,evt) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                name: userName,
                about: userAbout
            })
        })
        .then((res) => checkResponse(res))
        .then((res) => {
            disableButton(validationConfig, profileNameChange);
            closePopupInternal(evt.target.formClose);
            profileNameChange.textContent = 'Сохранить';
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export  const addCard = (fotoName, fotoLink, evt) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: fotoName,
                link: fotoLink
            })
        })
        .then((res) => checkResponse(res))
        .then((res) => {
            disableButton(validationConfig, newCardButton);
            closePopupInternal(evt.target.formClose);
            newCardButton.textContent = 'Сохранить';
            insertToContainer(createCard(res),true);
        })
        .catch((err) => {
            console.log(err); 
            
        }); 
    }
    export const likeCard = (cardId) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/' + cardId, {
            method: 'PUT',
            headers: config.headers,
            body: JSON.stringify({
                _id: cardId
            })
        }) 
        .then((res) => checkResponse(res))
        .then((res) => {
        })
        .catch((err) => {
            console.log(err); 
        });   
    }

    export const deleteLike = (cardId) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/'  + cardId, {
            method: 'DELETE',
            headers: config.headers,
            body: JSON.stringify({
                _id: cardId
            })
        })
        .then((res) => checkResponse(res))
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export const deleteCard = (cardTrash) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/cards/'  + cardTrash, {
            method: 'DELETE',
            headers: config.headers,
            body: JSON.stringify({
                _id: cardTrash
            })
        })
        .then((res) => checkResponse(res))
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export const updateAvatar = (avatar, evt) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then((res) => checkResponse(res))
        .then((res) => {
            avatar = res.avatar;
            disableButton(validationConfig, formButtonAvatar);
            closePopupInternal(evt.target.formClose);
            formButtonAvatar.textContent = 'Сохранить';
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }
