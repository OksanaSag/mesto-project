(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{A:()=>V});var t=document.querySelector(".form__line_box_name"),o=document.querySelector(".form__line_box_description"),n=document.querySelector(".profile__name"),r=document.querySelector(".profile__description"),c=document.querySelector(".profile__avatar"),a=document.querySelector("#bigPicture"),i=a.querySelector(".form__caption"),u=a.querySelector(".form__image"),s=(document.querySelector(".profile__add-picture").querySelector(".form__button"),document.querySelector("#elementsList")),l=(document.querySelector("#newCardButton"),document.querySelector("#profileNameChange"),document.querySelector("#formButtonAvatar"),{formSelector:".form",formPopup:".form__position",inputSelector:".form__line",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",activeButtonClass:"form__button_active",inputErrorClass:"form__line_type_error",errorClass:"form__line-error_active",formButtonAvatar:"formButtonAvatar",profileNameChange:"profileNameChange"});function d(e){e.innerText="Сохранить"}var m=Array.from(document.querySelectorAll(".form"));function f(e){e.currentTarget.formOpen.classList.add("form_opened"),document.addEventListener("keydown",y),m.forEach((function(e){e.addEventListener("click",p)}))}function p(e){var t=document.querySelector(".form_opened");if(null!=t){var o=t.querySelector(".form__popup");e.composedPath().includes(o)||v()}}function v(e){document.removeEventListener("keydown",y),m.forEach((function(e){e.removeEventListener("click",p)})),document.querySelector(".form_opened").classList.remove("form_opened")}function y(e){"Escape"===e.key&&(document.querySelector(".form_opened"),v())}function _(e){u.src=e.target.src,u.alt=e.target.alt,i.textContent=e.target.parentNode.querySelector(".elements__caption").textContent,f(e)}function h(e){var t=s.content.cloneNode(!0),o=t.querySelector(".elements__caption"),n=t.querySelector(".elements__image"),r=t.querySelector(".elements__button"),c=t.querySelector(".elements__trash"),a=t.querySelector(".elements__like-counter"),i=0;return e.owner._id!==q&&c.setAttribute("style","display:none"),null!=e.likes&&(i=e.likes.length),e.likes.forEach((function(e){null!=q&&e._id==q&&r.classList.add("elements__button_active")})),a.textContent=i,r.addEventListener("click",(function(e){r.classList.toggle("elements__button_active"),function(e){var t=e.currentTarget.getAttribute("internal_id");r.classList.contains("elements__button_active")?(g(t),a.innerHTML=i+=1):(E(t),a.innerHTML=i-=1)}(e)})),r.setAttribute("internal_id",e._id),c.formOpen=document.querySelector("#formOpenTrashCard"),c.addEventListener("click",(function(t){f(t),c.closest(".elements__foto").remove(),v(),L(e._id)})),n.addEventListener("click",_),n.formOpen=document.querySelector("#bigPicture"),o.textContent=e.name,n.src=e.link,n.alt=e.name,t}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?s.parentNode.prepend(e):s.parentNode.append(e)}var q,b=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.classList.add(o.activeButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.classList.remove(o.activeButtonClass),t.disabled=!0)},C=function(e,t){t.classList.add(e.inactiveButtonClass),t.classList.remove(e.activeButtonClass)};fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),e.forEach((function(e){S(h(e))}))})).catch((function(e){console.log(e)})),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){c.src=e.avatar,n.textContent=e.name,r.textContent=e.about,t.value=e.name,o.value=e.about,q=e._id,console.log(e.avatar)})).catch((function(e){console.log(e)}));var g=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"PUT",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){})).catch((function(e){console.log(e)}))},E=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},L=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},k=document.querySelector(".profile__edit-button"),O=document.querySelector(".profile__add-picture"),P=document.querySelector(".profile__avatar-change"),j=document.querySelector("#formClose"),A=document.querySelector("#formCloseAvatar"),B=document.querySelector("#formClosePicture"),T=document.querySelector("#profileName"),N=document.querySelector("#profilePicture"),x=document.querySelector("#avatarPicture"),z=document.querySelector("#formCloseBigPicture");k.formOpen=document.querySelector("#formOpen"),P.formOpen=document.querySelector("#formOpenAvatar");var w=document.querySelector("#profileNameChange"),D=document.querySelector("#newCardButton");O.formOpen=document.querySelector("#formOpenPicture"),A.formClose=document.querySelector("#formOpenAvatar"),j.formClose=document.querySelector("#formOpen"),B.formClose=document.querySelector("#formOpenPicture"),T.formClose=document.querySelector("#formOpen"),N.formClose=document.querySelector("#formOpenPicture"),z.formClose=document.querySelector("#bigPicture");var J=document.getElementById("title-input"),M=document.getElementById("url-input"),H=document.getElementById("url-avatar"),I=document.querySelector("#formButtonAvatar");I.formClose=document.querySelector("#formOpenAvatar");var V=O.formOpen.querySelector(".form__button");function U(e){e.target.innerText="Сохранение..."}k.addEventListener("click",f),O.addEventListener("click",f),P.addEventListener("click",f),B.addEventListener("click",v),z.addEventListener("click",v),j.addEventListener("click",v),A.addEventListener("click",v),T.addEventListener("submit",(function(e){var c,a;e.preventDefault(),n.textContent=t.value,r.textContent=o.value,c=t.value,a=o.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:c,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){C(l,V),v(),d()})).catch((function(e){console.log(e)}))})),N.addEventListener("submit",(function(e){var t,o;e.preventDefault(),J.value,M.value,t=J.value,o=M.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){C(l,V),v(),d(),S(h(e),!0)})).catch((function(e){console.log(e)})),J.value="",M.value=""})),x.addEventListener("submit",(function(e){var t;e.preventDefault(),c.src=H.value,t=H.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t=e.avatar,C(l,V),v(),d()})).catch((function(e){console.log(e)})),H.value=""})),w.addEventListener("click",U),D.addEventListener("click",U),I.addEventListener("click",U),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(t.querySelectorAll(e.formPopup)).forEach((function(t){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);b(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.errorClass),n.textContent=""}(e,t,o):function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o,r.classList.add(n.errorClass)}(e,t,t.validationMessage,o)}(e,r,t),b(o,n,t)}))}))}(t,e)}))}))}(l)})();