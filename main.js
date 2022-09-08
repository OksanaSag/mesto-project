(()=>{"use strict";var e=document.querySelector(".form__line_box_name"),t=document.querySelector(".form__line_box_description"),o=document.querySelector(".profile__name"),n=document.querySelector(".profile__description"),r=document.querySelector(".profile__avatar"),c=document.querySelector("#bigPicture"),a=c.querySelector(".form__caption"),i=c.querySelector(".form__image"),u=(document.querySelector(".profile__add-picture").querySelector(".form__button"),document.querySelector("#elementsList")),s=document.querySelector("#newCardButton"),l=document.querySelector("#profileNameChange"),d=document.querySelector("#formButtonAvatar"),m={formSelector:".form",formPopup:".form__position",inputSelector:".form__line",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",activeButtonClass:"form__button_active",inputErrorClass:"form__line_type_error",errorClass:"form__line-error_active",formButtonAvatar:"formButtonAvatar",profileNameChange:"profileNameChange"};function f(e){Array.from(document.querySelectorAll(".form__button")).forEach((function(e){e.innerText="Сохранить"}))}function p(e){e.target.innerText="Сохранение..."}var v=Array.from(document.querySelectorAll(".form"));function _(e){e.currentTarget.formOpen.classList.add("form_opened"),document.addEventListener("keydown",S),v.forEach((function(e){e.addEventListener("click",y)}))}function y(e){var t=document.querySelector(".form_opened");if(null!=t){var o=t.querySelector(".form__popup");e.composedPath().includes(o)||h()}}function h(e){document.removeEventListener("keydown",S),v.forEach((function(e){e.removeEventListener("click",y)})),document.querySelector(".form_opened").classList.remove("form_opened")}function S(e){"Escape"===e.key&&(document.querySelector(".form_opened"),h())}function q(e){i.src=e.target.src,i.alt=e.target.alt,a.textContent=e.target.parentNode.querySelector(".elements__caption").textContent,_(e)}function C(e){var t=u.content.cloneNode(!0),o=t.querySelector(".elements__caption"),n=t.querySelector(".elements__image"),r=t.querySelector(".elements__button"),c=t.querySelector(".elements__trash"),a=t.querySelector(".elements__like-counter"),i=0;return e.owner._id!==E&&c.setAttribute("style","display:none"),null!=e.likes&&(i=e.likes.length),e.likes.forEach((function(e){null!=E&&e._id==E&&r.classList.add("elements__button_active")})),a.textContent=i,r.addEventListener("click",(function(e){r.classList.toggle("elements__button_active"),function(e){var t=e.currentTarget.getAttribute("internal_id");r.classList.contains("elements__button_active")?(k(t),a.innerHTML=i+=1):(P(t),a.innerHTML=i-=1)}(e)})),r.setAttribute("internal_id",e._id),c.formOpen=document.querySelector("#formOpenTrashCard"),c.addEventListener("click",(function(t){_(t),c.closest(".elements__foto").remove(),h(),O(e._id)})),n.addEventListener("click",q),n.formOpen=document.querySelector("#bigPicture"),o.textContent=e.name,n.src=e.link,n.alt=e.name,t}function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?u.parentNode.prepend(e):u.parentNode.append(e)}var E,L=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.classList.add(o.activeButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.classList.remove(o.activeButtonClass),t.disabled=!0)},g=function(e,t){t.classList.add(e.inactiveButtonClass),t.classList.remove(e.activeButtonClass)};fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),e.forEach((function(e){b(C(e))}))})).catch((function(e){console.log(e)})),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(c){r.src=c.avatar,o.textContent=c.name,n.textContent=c.about,e.value=c.name,t.value=c.about,E=c._id,console.log(c.avatar)})).catch((function(e){console.log(e)}));var k=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"PUT",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){})).catch((function(e){console.log(e)}))},P=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},O=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},A=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__add-picture"),B=document.querySelector(".profile__avatar-change"),T=document.querySelector("#formClose"),x=document.querySelector("#formCloseAvatar"),N=document.querySelector("#formClosePicture"),z=document.querySelector("#profileName"),D=document.querySelector("#profilePicture"),J=document.querySelector("#avatarPicture"),M=document.querySelector("#formCloseBigPicture");A.formOpen=document.querySelector("#formOpen"),B.formOpen=document.querySelector("#formOpenAvatar"),j.formOpen=document.querySelector("#formOpenPicture"),x.formClose=document.querySelector("#formOpenAvatar"),T.formClose=document.querySelector("#formOpen"),N.formClose=document.querySelector("#formOpenPicture"),z.formClose=document.querySelector("#formOpen"),D.formClose=document.querySelector("#formOpenPicture"),M.formClose=document.querySelector("#bigPicture");var w,I=document.getElementById("title-input"),H=document.getElementById("url-input"),U=document.getElementById("url-avatar");d.formClose=document.querySelector("#formOpenAvatar"),A.addEventListener("click",_),j.addEventListener("click",_),B.addEventListener("click",_),N.addEventListener("click",h),M.addEventListener("click",h),T.addEventListener("click",h),x.addEventListener("click",h),z.addEventListener("submit",(function(r){r.preventDefault(),o.textContent=e.value,n.textContent=t.value,updateUserInfo(e.value,t.value)})),D.addEventListener("submit",(function(e){var t,o;e.preventDefault(),I.value,H.value,t=I.value,o=H.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){g(m,s),h(),f(),b(C(e),!0)})).catch((function(e){console.log(e)})),I.value="",H.value=""})),J.addEventListener("submit",(function(e){var t;e.preventDefault(),r.src=U.value,t=U.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t=e.avatar,g(m,d),h(),f()})).catch((function(e){console.log(e)})),U.value=""})),l.addEventListener("click",p),s.addEventListener("click",p),d.addEventListener("click",p),w=m,Array.from(document.querySelectorAll(w.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(e.querySelectorAll(w.formPopup)).forEach((function(e){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);L(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.errorClass),n.textContent=""}(e,t,o):function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o,r.classList.add(n.errorClass)}(e,t,t.validationMessage,o)}(e,r,t),L(o,n,t)}))}))}(e,w)}))}))})();