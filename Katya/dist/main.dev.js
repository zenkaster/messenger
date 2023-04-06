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