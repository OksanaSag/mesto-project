(()=>{"use strict";var e=document.querySelector(".form__line_box_name"),t=document.querySelector(".form__line_box_description"),o=document.querySelector(".profile__name"),n=document.querySelector(".profile__description"),r=document.querySelector(".profile__avatar"),c=document.querySelector("#bigPicture"),a=c.querySelector(".form__caption"),i=c.querySelector(".form__image"),u=document.querySelector(".profile__add-picture"),s=u.formOpen.querySelector(".form__button"),l=document.querySelector("#elementsList"),d={formSelector:".form",formPopup:".form__position",inputSelector:".form__line",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",activeButtonClass:"form__button_active",inputErrorClass:"form__line_type_error",errorClass:"form__line-error_active",formButtonAvatar:"formButtonAvatar",profileNameChange:"profileNameChange"};function m(e){Array.from(document.querySelectorAll(".form__button")).forEach((function(e){e.innerText="Сохранить"}))}var f=Array.from(document.querySelectorAll(".form"));function p(e){e.currentTarget.formOpen.classList.add("form_opened"),document.addEventListener("keydown",_),f.forEach((function(e){e.addEventListener("click",v)}))}function v(e){var t=document.querySelector(".form_opened");if(null!=t){var o=t.querySelector(".form__popup");e.composedPath().includes(o)||y()}}function y(e){document.removeEventListener("keydown",_),f.forEach((function(e){e.removeEventListener("click",v)})),document.querySelector(".form_opened").classList.remove("form_opened")}function _(e){"Escape"===e.key&&(document.querySelector(".form_opened"),y())}function h(e){i.src=e.target.src,i.alt=e.target.alt,a.textContent=e.target.parentNode.querySelector(".elements__caption").textContent,p(e)}function S(e){var t=l.content.cloneNode(!0),o=t.querySelector(".elements__caption"),n=t.querySelector(".elements__image"),r=t.querySelector(".elements__button"),c=t.querySelector(".elements__trash"),a=t.querySelector(".elements__like-counter"),i=0;return e.owner._id!==b&&c.setAttribute("style","display:none"),null!=e.likes&&(i=e.likes.length),e.likes.forEach((function(e){null!=b&&e._id==b&&r.classList.add("elements__button_active")})),a.textContent=i,r.addEventListener("click",(function(e){r.classList.toggle("elements__button_active"),function(e){var t=e.currentTarget.getAttribute("internal_id");r.classList.contains("elements__button_active")?(g(t),a.innerHTML=i+=1):(L(t),a.innerHTML=i-=1)}(e)})),r.setAttribute("internal_id",e._id),c.formOpen=document.querySelector("#formOpenTrashCard"),c.addEventListener("click",(function(t){p(t),c.closest(".elements__foto").remove(),y(),k(e._id)})),n.addEventListener("click",h),n.formOpen=document.querySelector("#bigPicture"),o.textContent=e.name,n.src=e.link,n.alt=e.name,t}function q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?l.parentNode.prepend(e):l.parentNode.append(e)}var b,C=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.classList.add(o.activeButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.classList.remove(o.activeButtonClass),t.disabled=!0)},E=function(e,t){t.classList.add(e.inactiveButtonClass),t.classList.remove(e.activeButtonClass)};fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),e.forEach((function(e){q(S(e))}))})).catch((function(e){console.log(e)})),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(c){r.src=c.avatar,o.textContent=c.name,n.textContent=c.about,e.value=c.name,t.value=c.about,b=c._id,console.log(c.avatar)})).catch((function(e){console.log(e)}));var g=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"PUT",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){})).catch((function(e){console.log(e)}))},L=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},k=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},P=document.querySelector(".profile__edit-button"),O=document.querySelector(".profile__avatar-change"),j=document.querySelector("#formClose"),A=document.querySelector("#formCloseAvatar"),T=document.querySelector("#formClosePicture"),B=document.querySelector("#profileName"),x=document.querySelector("#profilePicture"),N=document.querySelector("#avatarPicture"),z=document.querySelector("#formCloseBigPicture");P.formOpen=document.querySelector("#formOpen"),O.formOpen=document.querySelector("#formOpenAvatar");var D=document.querySelector("#profileNameChange"),J=document.querySelector("#newCardButton");u.formOpen=document.querySelector("#formOpenPicture"),A.formClose=document.querySelector("#formOpenAvatar"),j.formClose=document.querySelector("#formOpen"),T.formClose=document.querySelector("#formOpenPicture"),B.formClose=document.querySelector("#formOpen"),x.formClose=document.querySelector("#formOpenPicture"),z.formClose=document.querySelector("#bigPicture");var M=document.getElementById("title-input"),w=document.getElementById("url-input"),H=document.getElementById("url-avatar"),I=document.querySelector("#formButtonAvatar");function V(e){e.target.innerText="Сохранение..."}I.formClose=document.querySelector("#formOpenAvatar"),P.addEventListener("click",p),u.addEventListener("click",p),O.addEventListener("click",p),T.addEventListener("click",y),z.addEventListener("click",y),j.addEventListener("click",y),A.addEventListener("click",y),B.addEventListener("submit",(function(r){var c,a;r.preventDefault(),o.textContent=e.value,n.textContent=t.value,c=e.value,a=t.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:c,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){E(d,s),y(),m()})).catch((function(e){console.log(e)}))})),x.addEventListener("submit",(function(e){var t,o;e.preventDefault(),M.value,w.value,t=M.value,o=w.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){E(d,s),y(),m(),q(S(e),!0)})).catch((function(e){console.log(e)})),M.value="",w.value=""})),N.addEventListener("submit",(function(e){var t;e.preventDefault(),r.src=H.value,t=H.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t=e.avatar,E(d,s),y(),m()})).catch((function(e){console.log(e)})),H.value=""})),D.addEventListener("click",V),J.addEventListener("click",V),I.addEventListener("click",V),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(t.querySelectorAll(e.formPopup)).forEach((function(t){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);C(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.errorClass),n.textContent=""}(e,t,o):function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o,r.classList.add(n.errorClass)}(e,t,t.validationMessage,o)}(e,r,t),C(o,n,t)}))}))}(t,e)}))}))}(d)})();