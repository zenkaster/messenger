// const URL = "http://172.28.0.202:7000/users"; 
// /* 
// const profile = document.querySelector(".profile"); 
// const profilePhoto = document.querySelector(".profile-photo"); 
// const profileName = document.querySelector(".profile-photo h2"); 
// const profileEmail = document.querySelector(".profile-photo h4"); 
// fetch(URL) 
// .then(response => response.json()) 
// .then(data => { 
//     console.log(data); 
//     profileName.textContent = data.username; // 
//     profileEmail.textContent = data.email; // 
// }) 
// .catch(error => { 
//         console.error("Ошибка ", error); 
// }); 
// */ 
// const profileCont = document.querySelector(".profile"); 
// fetch(URL) 
// .then(response => response.json()) 
// .then(data => { 
//     console.log(data); 
//     const profileHeader = document.createElement("div"); 
//     profileHeader.classList.add("profile-header"); 
//     profileHeader.innerHTML = ` 
//         <a href="#">&times</a> 
//         <h2>User info</h2> 
//         <a href="#">&#128396</a> 
//     `; 
//     const profilePhoto = document.createElement("div"); 
//     profilePhoto.classList.add("profile-photo"); 
//     profilePhoto.innerHTML = ` 
//         <img src="${data.avatar}" alt="userAvatar"> 
//         <h2>${data.first_name} ${data.last_name}</h2> 
//         <h4>${data.email}</h4> 
//     `; 
//     const profileInfo = document.createElement("ul"); 
//     profileInfo.classList.add("profile-info"); 
//     profileInfo.innerHTML = ` 
//         <li> 
//         <img src="" alt="icon"> 
//         <div class="profile-info-phone"> 
//             <h3>${data.phone}</h3> 
//             <h5>Телефон</h5> 
//         </div> 
//         </li> 
//         <li> 
//         <img src="" alt="icon"> 
//         <div class="profile-info-username"> 
//             <h3>${data.username}</h3> 
//             <h5>Username</h5> 
//         </div> 
//         </li> 
//         <li> 
//         <img src="" alt="icon"> 
//         <div class="profile-info-notifications"> 
//             <h3>Notifications</h3> 
//             <input type="checkbox" name="notifications" id="notifications"> 
//         </div> 
//         </li> 
//     `; 
//     profileCont.appendChild(profileHeader); 
//     profileCont.appendChild(profilePhoto); 
//     profileCont.appendChild(profileInfo); 
// }) 
// .catch(error => console.error(error));
// web socket
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
"use strict";