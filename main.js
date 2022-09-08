(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{A:()=>G});var t=document.querySelector(".form__line_box_name"),o=document.querySelector(".form__line_box_description"),n=document.querySelector(".profile__name"),r=document.querySelector(".profile__description"),c=document.querySelector(".profile__avatar"),a=document.querySelector("#bigPicture"),i=a.querySelector(".form__caption"),u=a.querySelector(".form__image"),s=(document.querySelector(".profile__add-picture").querySelector(".form__button"),document.querySelector("#elementsList")),l=document.querySelector("#newCardButton"),d=document.querySelector("#profileNameChange"),m=document.querySelector("#formButtonAvatar"),f={formSelector:".form",formPopup:".form__position",inputSelector:".form__line",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",activeButtonClass:"form__button_active",inputErrorClass:"form__line_type_error",errorClass:"form__line-error_active",formButtonAvatar:"formButtonAvatar",profileNameChange:"profileNameChange"};function p(e){e.innerText="Сохранить"}var v=Array.from(document.querySelectorAll(".form"));function y(e){e.currentTarget.formOpen.classList.add("form_opened"),document.addEventListener("keydown",S),v.forEach((function(e){e.addEventListener("click",_)}))}function _(e){var t=document.querySelector(".form_opened");if(null!=t){var o=t.querySelector(".form__popup");e.composedPath().includes(o)||h()}}function h(e){document.removeEventListener("keydown",S),v.forEach((function(e){e.removeEventListener("click",_)})),document.querySelector(".form_opened").classList.remove("form_opened")}function S(e){"Escape"===e.key&&(document.querySelector(".form_opened"),h())}function q(e){u.src=e.target.src,u.alt=e.target.alt,i.textContent=e.target.parentNode.querySelector(".elements__caption").textContent,y(e)}function b(e){var t=s.content.cloneNode(!0),o=t.querySelector(".elements__caption"),n=t.querySelector(".elements__image"),r=t.querySelector(".elements__button"),c=t.querySelector(".elements__trash"),a=t.querySelector(".elements__like-counter"),i=0;return e.owner._id!==g&&c.setAttribute("style","display:none"),null!=e.likes&&(i=e.likes.length),e.likes.forEach((function(e){null!=g&&e._id==g&&r.classList.add("elements__button_active")})),a.textContent=i,r.addEventListener("click",(function(e){r.classList.toggle("elements__button_active"),function(e){var t=e.currentTarget.getAttribute("internal_id");r.classList.contains("elements__button_active")?(k(t),a.innerHTML=i+=1):(O(t),a.innerHTML=i-=1)}(e)})),r.setAttribute("internal_id",e._id),c.formOpen=document.querySelector("#formOpenTrashCard"),c.addEventListener("click",(function(t){y(t),c.closest(".elements__foto").remove(),h(),P(e._id)})),n.addEventListener("click",q),n.formOpen=document.querySelector("#bigPicture"),o.textContent=e.name,n.src=e.link,n.alt=e.name,t}function C(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?s.parentNode.prepend(e):s.parentNode.append(e)}var g,E=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.classList.add(o.activeButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.classList.remove(o.activeButtonClass),t.disabled=!0)},L=function(e,t){t.classList.add(e.inactiveButtonClass),t.classList.remove(e.activeButtonClass)};fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),e.forEach((function(e){C(b(e))}))})).catch((function(e){console.log(e)})),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){c.src=e.avatar,n.textContent=e.name,r.textContent=e.about,t.value=e.name,o.value=e.about,g=e._id,console.log(e.avatar)})).catch((function(e){console.log(e)}));var k=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"PUT",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){})).catch((function(e){console.log(e)}))},O=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},P=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},j=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-picture"),B=document.querySelector(".profile__avatar-change"),T=document.querySelector("#formClose"),N=document.querySelector("#formCloseAvatar"),x=document.querySelector("#formClosePicture"),z=document.querySelector("#profileName"),w=document.querySelector("#profilePicture"),D=document.querySelector("#avatarPicture"),J=document.querySelector("#formCloseBigPicture");j.formOpen=document.querySelector("#formOpen"),B.formOpen=document.querySelector("#formOpenAvatar");var M=document.querySelector("#profileNameChange"),H=document.querySelector("#newCardButton");A.formOpen=document.querySelector("#formOpenPicture"),N.formClose=document.querySelector("#formOpenAvatar"),T.formClose=document.querySelector("#formOpen"),x.formClose=document.querySelector("#formOpenPicture"),z.formClose=document.querySelector("#formOpen"),w.formClose=document.querySelector("#formOpenPicture"),J.formClose=document.querySelector("#bigPicture");var I=document.getElementById("title-input"),V=document.getElementById("url-input"),U=document.getElementById("url-avatar"),F=document.querySelector("#formButtonAvatar");F.formClose=document.querySelector("#formOpenAvatar");var G=A.formOpen.querySelector(".form__button");function K(e){e.target.innerText="Сохранение..."}j.addEventListener("click",y),A.addEventListener("click",y),B.addEventListener("click",y),x.addEventListener("click",h),J.addEventListener("click",h),T.addEventListener("click",h),N.addEventListener("click",h),z.addEventListener("submit",(function(e){var c,a;e.preventDefault(),n.textContent=t.value,r.textContent=o.value,c=t.value,a=o.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:c,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){L(f,G),h(),p(d)})).catch((function(e){console.log(e)}))})),w.addEventListener("submit",(function(e){var t,o;e.preventDefault(),I.value,V.value,t=I.value,o=V.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){L(f,G),h(),p(l),C(b(e),!0)})).catch((function(e){console.log(e)})),I.value="",V.value=""})),D.addEventListener("submit",(function(e){var t;e.preventDefault(),c.src=U.value,t=U.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t=e.avatar,L(f,G),h(),p(m)})).catch((function(e){console.log(e)})),U.value=""})),M.addEventListener("click",K),H.addEventListener("click",K),F.addEventListener("click",K),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(t.querySelectorAll(e.formPopup)).forEach((function(t){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);E(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.errorClass),n.textContent=""}(e,t,o):function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o,r.classList.add(n.errorClass)}(e,t,t.validationMessage,o)}(e,r,t),E(o,n,t)}))}))}(t,e)}))}))}(f)})();