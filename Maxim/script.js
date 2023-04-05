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