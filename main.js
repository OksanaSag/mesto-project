(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{AL:()=>I,Be:()=>V});var t=document.querySelector(".form__line_box_name"),o=document.querySelector(".form__line_box_description"),n=document.querySelector(".profile__name"),r=document.querySelector(".profile__description"),c=document.querySelector(".profile__avatar"),a=document.querySelector("#bigPicture"),i=a.querySelector(".form__caption"),u=a.querySelector(".form__image"),s=document.querySelector("#elementsList"),l={formSelector:".form",formPopup:".form__position",inputSelector:".form__line",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",activeButtonClass:"form__button_active",inputErrorClass:"form__line_type_error",errorClass:"form__line-error_active",formButtonAvatar:"formButtonAvatar",profileNameChange:"profileNameChange"},d=Array.from(document.querySelectorAll(".form"));function m(e){e.currentTarget.formOpen.classList.add("form_opened"),document.addEventListener("keydown",v),d.forEach((function(e){e.addEventListener("click",f)}))}function f(e){var t=document.querySelector(".form_opened");if(null!=t){var o=t.querySelector(".form__popup");e.composedPath().includes(o)||p()}}function p(e){document.removeEventListener("keydown",v),d.forEach((function(e){e.removeEventListener("click",f)})),document.querySelector(".form_opened").classList.remove("form_opened")}function v(e){"Escape"===e.key&&(document.querySelector(".form_opened"),p())}function y(e){u.src=e.target.src,u.alt=e.target.alt,i.textContent=e.target.parentNode.querySelector(".elements__caption").textContent,m(e)}function h(e){var t=s.content.cloneNode(!0),o=t.querySelector(".elements__caption"),n=t.querySelector(".elements__image"),r=t.querySelector(".elements__button"),c=t.querySelector(".elements__trash"),a=t.querySelector(".elements__like-counter"),i=0;return e.owner._id!==S&&c.setAttribute("style","display:none"),null!=e.likes&&(i=e.likes.length),e.likes.forEach((function(e){null!=S&&e._id==S&&r.classList.add("elements__button_active")})),a.textContent=i,r.addEventListener("click",(function(e){r.classList.toggle("elements__button_active"),function(e){var t=e.currentTarget.getAttribute("internal_id");r.classList.contains("elements__button_active")?(C(t),a.innerHTML=i+=1):(g(t),a.innerHTML=i-=1)}(e)})),r.setAttribute("internal_id",e._id),c.formOpen=document.querySelector("#formOpenTrashCard"),c.addEventListener("click",(function(t){m(t),c.closest(".elements__foto").remove(),p(),E(e._id)})),n.addEventListener("click",y),n.formOpen=document.querySelector("#bigPicture"),o.textContent=e.name,n.src=e.link,n.alt=e.name,t}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?s.parentNode.prepend(e):s.parentNode.append(e)}var S,b=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o.inactiveButtonClass),t.classList.add(o.activeButtonClass),t.disabled=!1):(t.classList.add(o.inactiveButtonClass),t.classList.remove(o.activeButtonClass),t.disabled=!0)},q=function(e,t){t.classList.add(e.inactiveButtonClass),t.classList.remove(e.activeButtonClass)};fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),e.forEach((function(e){_(h(e))}))})).catch((function(e){console.log(e)})),fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){c.src=e.avatar,n.textContent=e.name,r.textContent=e.about,t.value=e.name,o.value=e.about,S=e._id,console.log(e.avatar)})).catch((function(e){console.log(e)}));var C=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"PUT",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){})).catch((function(e){console.log(e)}))},g=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14//cards/likes/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},E=function(e){fetch("https://nomoreparties.co/v1/plus-cohort-14/cards/"+e,{method:"DELETE",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},L=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-picture"),O=document.querySelector(".profile__avatar-change"),P=document.querySelector("#formClose"),j=document.querySelector("#formCloseAvatar"),A=document.querySelector("#formClosePicture"),B=document.querySelector("#profileName"),T=document.querySelector("#profilePicture"),x=document.querySelector("#avatarPicture"),N=document.querySelector("#formCloseBigPicture");L.formOpen=document.querySelector("#formOpen"),O.formOpen=document.querySelector("#formOpenAvatar");var z=document.querySelector("#profileNameChange"),D=document.querySelector("#newCardButton");k.formOpen=document.querySelector("#formOpenPicture"),j.formClose=document.querySelector("#formOpenAvatar"),P.formClose=document.querySelector("#formOpen"),A.formClose=document.querySelector("#formOpenPicture"),B.formClose=document.querySelector("#formOpen"),T.formClose=document.querySelector("#formOpenPicture"),N.formClose=document.querySelector("#bigPicture");var J=document.getElementById("title-input"),w=document.getElementById("url-input"),M=document.getElementById("url-avatar"),H=document.querySelector("#formButtonAvatar");H.formClose=document.querySelector("#formOpenAvatar");var I=k.formOpen.querySelector(".form__button");function V(e){Array.from(document.querySelectorAll(".form__button")).forEach((function(e){e.innerText="Сохранить"}))}function U(e){e.target.innerText="Сохранение..."}L.addEventListener("click",m),k.addEventListener("click",m),O.addEventListener("click",m),A.addEventListener("click",p),N.addEventListener("click",p),P.addEventListener("click",p),j.addEventListener("click",p),B.addEventListener("submit",(function(e){var c,a;e.preventDefault(),n.textContent=t.value,r.textContent=o.value,c=t.value,a=o.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:c,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){q(l,I),p(),V()})).catch((function(e){console.log(e)}))})),T.addEventListener("submit",(function(e){var t,o;e.preventDefault(),J.value,w.value,t=J.value,o=w.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/cards",{method:"POST",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){q(l,I),p(),V(),_(h(e),!0)})).catch((function(e){console.log(e)})),J.value="",w.value=""})),x.addEventListener("submit",(function(e){var t;e.preventDefault(),c.src=M.value,t=M.value,fetch("https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar",{method:"PATCH",headers:{authorization:"2b115875-5f8a-40be-8d8a-4a3dc9ce97a5","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t=e.avatar,q(l,I),p(),V()})).catch((function(e){console.log(e)})),M.value=""})),z.addEventListener("click",U),D.addEventListener("click",U),H.addEventListener("click",U),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),Array.from(t.querySelectorAll(e.formPopup)).forEach((function(t){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);b(o,n,t),o.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),n.classList.remove(o.errorClass),n.textContent=""}(e,t,o):function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o,r.classList.add(n.errorClass)}(e,t,t.validationMessage,o)}(e,r,t),b(o,n,t)}))}))}(t,e)}))}))}(l)})();