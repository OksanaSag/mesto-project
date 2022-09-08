import {createCard, insertToContainer} from './card.js';
import {buttonSubmit} from './index.js';
import {closePopup} from './modal.js';
import {nameInput, jobInput, profileName, profileAvatar, profileDescription, enable, renderLoadingremove, formButtonAvatar, profileNameChange, newCardButton} from './utils/utils.js';
import {disableButton} from './validate.js';
export let currentUser;

    fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
        headers: {
          authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5'
        }
    })
        .then(res => {
            if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
            console.log(res)
            res.forEach((function (element) {
                insertToContainer(createCard(element));
            }));
        })
        .catch((err) => {
            console.log(err); 
        }); 
     
    fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
        headers: {
            authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5'
        }
    })
        .then(res => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
            profileAvatar.src = res.avatar;
            profileName.textContent = res.name;
            profileDescription.textContent = res.about;
            nameInput.value = res.name;
            jobInput.value = res.about;
            currentUser = res._id;
            console.log(res.avatar);
        })
        .catch((err) => {
            console.log(err); 
        }); 
      
    
    export const userNameAbout = (userName, userAbout) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                about: userAbout
            })
        })
        .then(res => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
            disableButton(enable, profileNameChange);
            closePopup();
            renderLoadingremove(profileNameChange);
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export  const userFoto = (fotoName, fotoLink) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
            method: 'POST',
            headers: {
                authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: fotoName,
                link: fotoLink
            })
        })
        .then(res => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
            
        })
        .then((res) => {
            disableButton(enable, newCardButton);
            closePopup();
            renderLoadingremove(newCardButton);
            insertToContainer(createCard(res),true);
        })
        .catch((err) => {
            console.log(err); 
            
        }); 
    }

  
    export const likeCount = (cardId) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/' + cardId, {
            method: 'PUT',
            headers: {
                authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: cardId
            })
        }) 
        .then(res => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
            //likesLength = res.likes
                    
        })
        .catch((err) => {
            console.log(err); 
        });   
    }

    export const deledeLike = (cardId) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/'  + cardId, {
            method: 'DELETE',
            headers: {
                authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: cardId
            })
        })
        .then(res => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export const deleteCard = (cardTrash) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/cards/'  + cardTrash, {
            method: 'DELETE',
            headers: {
                authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: cardTrash
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }

    export const userAvatar = (avatar) => {
        fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: '2b115875-5f8a-40be-8d8a-4a3dc9ce97a5',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
            avatar = res.avatar;
            disableButton(enable, formButtonAvatar);
            closePopup();
            renderLoadingremove(formButtonAvatar);
                
        })
        .catch((err) => {
            console.log(err); 
        }); 
    }