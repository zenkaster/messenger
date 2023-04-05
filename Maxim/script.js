// fetch("", {
// 	method: "POST",
// 	mode: "cors",
// 	headers: {
// 		"Content-type": "application/json"
// 	},
// 	body: d,
// })



// const socket = new WebSocket('ws://172.28.0.202:8000/ws');

// const int = document.querySelector("#inp");
// const form = document.querySelector("form");

// socket.addEventListener("open", (event) => {
// 	console.log("Websocket connection established");

// 	form.addEventListener("submit", (e) => {
// 		e.preventDefault();
// 		const message = {
// 			chatId: 0,
// 			text: inp.value,
// 			date: new Date()
// 		}
// 		socket.send(JSON.stringify(message.text));
// 	})
// })

// socket.addEventListener("message", (event) => {
// 	console.log(event.data);
// })

// socket.addEventListener("close", (event) => {
// 	console.log("Websocket connection closed");
// })

// socket.addEventListener("error", (event) => {
// 	console.error("Websocket error", event);
// })
const chatsBottom = document.querySelector(".chats-bottom")
const URL = "http://172.28.0.202:7000/users";
fetch(URL) 
.then(response => response.json()) 
.then(data => { 
		console.log(data);
		data.forEach(element => {
			console.log(element);
			const oneChat = `
			<div class="chats-chat" id="${element.id}">
				<div class="chat-header-right">
					<img class="chat-header-right-img" src="images/logo-of-chat.png" alt="#">
					<h2 class="chat-header-right-h2">${element.email}</h2>
				</div>
			</div>
			<hr>
			`
			chatsBottom.insertAdjacentHTML("beforeend", oneChat)
		});

})
// const URL = "http://172.28.0.202:7000/users"; 
 
// const profileCont = document.querySelector(".profile"); 
 
// fetch(URL) 
// .then(response => response.json()) 
// .then(data => { 
//     console.log(data); 
// 		console.log(data[0].email);
 
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
//         <img src="#" alt="userAvatar"> 
//         <h2>A A</h2> 
//         <h4>${data[0].email}</h4> 
//     `; 
 
//     const profileInfo = document.createElement("ul"); 
//     profileInfo.classList.add("profile-info"); 
//     profileInfo.innerHTML = ` 
//         <li> 
//         <img src="" alt="icon"> 
//         <div class="profile-info-phone"> 
//             <h3>+777</h3> 
//             <h5>Телефон</h5> 
//         </div> 
//         </li> 
//         <li> 
//         <img src="" alt="icon"> 
//         <div class="profile-info-username"> 
//             <h3>A</h3> 
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
 
 
//     profileCont.append(profileHeader); 
//     profileCont.append(profilePhoto); 
//     profileCont.append(profileInfo); 
// }) 
// .catch(error => console.error(error));