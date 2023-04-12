"use strict";

var container = document.querySelector(".container");
var burger = document.querySelector(".chats-profile");
var burgerActive = document.querySelector(".active-chats-profile");
burger.addEventListener("click", function (e) {
  e.preventDefault();
  burgerActive.classList.toggle("active-toggle"); // burgerActive.style.display = `flex`
});
var inpSearch = document.querySelector("#inp-search");
var searchActive = document.querySelector(".active-chats-search");
inpSearch.addEventListener("click", function (e) {
  e.preventDefault();
  searchActive.classList.toggle("active-toggle");
}); // web socket
// const socket = new WebSocket(`ws://172.28.0.146:8000/ws`)
// const inp = document.querySelector(`#inp`)
// const form = document.querySelector(`#form`)
// socket.addEventListener(`open`, (event) => {
//     console.log(`Websocket connection estabilished`);
//     form.addEventListener(`submit`, (e) => {
//         e.preventDefault()
//         const message = {
//             chatId : 0,
//             text: inp.value,
//             date: new Date()
//         }
//         socket.send(JSON.stringify(message))
//     })
// })
// socket.addEventListener(`message`, (event) => {
//     console.log(event.data);
// })
// socket.addEventListener(`close`, (event) => {
//     console.log(`WebSocket connection closed`);
// })
// socket.addEventListener(`error`, (event) => {
//     console.error(`WebSocket error`,event);
// })

var profileWindowBack = document.querySelector('.profile-window-back');
var profileWindow = document.querySelector('.profile-window');
var chatHeader = document.querySelector('.chat-header');
var chatHeaderRight = document.querySelector('.chat-header-right');
var myProf = document.querySelector('#my-prof');
myProf.addEventListener("click", function () {
  burgerActive.classList.toggle("active-toggle");
  profileWindowBack.style.display = "flex";
  profileWindow.style.display = "block";
});
chatHeader.addEventListener("click", function (e) {
  var target = e.target;

  if (target.closest(".chat-header-right")) {
    profileWindowBack.style.display = "flex";
    profileWindow.style.display = "block";
  }
});
profileWindowBack.addEventListener("click", function (e) {
  console.log(e.target);
  var target = e.target;

  if (target.closest(".profile-window")) {
    return;
  }

  if (target.closest(".profile-window-back")) {
    profileWindowBack.style.display = "none";
    profileWindow.style.display = "none";
  }
});
var contProfRight = document.querySelector(".cont-prof-right");
var URL = "http://172.28.0.202:8000/users";
fetch(URL).then(function (response) {
  return response.json();
}).then(function (data) {
  var prof = "\n\t\t\t<p>Name: ".concat(data[0].email, "</p>\n\t\t\t<p>ID: ").concat(data[0].id, "</p>\n\t\t");
  contProfRight.insertAdjacentHTML("beforeend", prof);
});