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
   
    export const getUserInfo = () => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
        headers: config.headers,
        })
        .then((res) => checkResponse(res))
    }

    export const updateUserInfo = (userName, userAbout,evt) => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                name: userName,
                about: userAbout
            })
        })
        .then((res) => checkResponse(res))
    }

    export  const addCard = (fotoName, fotoLink, evt) => {
         return fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: fotoName,
                link: fotoLink
            })
        })
        .then((res) => checkResponse(res))
    }
    
    export const likeCard = (cardId) => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/' + cardId, {
            method: 'PUT',
            headers: config.headers,
            body: JSON.stringify({
                _id: cardId
            })
        }) 
        .then((res) => checkResponse(res))
    }

    export const deleteLike = (cardId) => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14//cards/likes/'  + cardId, {
            method: 'DELETE',
            headers: config.headers,
            body: JSON.stringify({
                _id: cardId
            })
        })
        .then((res) => checkResponse(res))
    }

    export const deleteCard = (cardTrash) => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14/cards/'  + cardTrash, {
            method: 'DELETE',
            headers: config.headers,
            body: JSON.stringify({
                _id: cardTrash
            })
        })
        .then((res) => checkResponse(res))
    }

    export const updateAvatar = (avatar, evt) => {
        return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
        .then((res) => checkResponse(res))
    }
