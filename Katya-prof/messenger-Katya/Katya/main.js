const container = document.querySelector(`.container`)
const burger = document.querySelector(`.chats-profile`)
const burgerActive = document.querySelector(`.active-chats-profile`)

burger.addEventListener(`click`, (e) => {
    e.preventDefault()
    burgerActive.classList.toggle(`active-toggle`)
    // burgerActive.style.display = `flex`
})

const inpSearch = document.querySelector(`#inp-search`)
const searchActive = document.querySelector(`.active-chats-search`)

inpSearch.addEventListener(`click`, (e) => {
    e.preventDefault()
    searchActive.classList.toggle(`active-toggle`)
})


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
const profileWindowBack = document.querySelector('.profile-window-back')
const profileWindow = document.querySelector('.profile-window')
const chatHeader = document.querySelector('.chat-header')
const chatHeaderRight = document.querySelector('.chat-header-right')
const myProf = document.querySelector('#my-prof')

myProf.addEventListener("click", () => {
	burgerActive.classList.toggle(`active-toggle`)
	profileWindowBack.style.display = "flex";
	profileWindow.style.display = "block";
})
chatHeader.addEventListener("click", (e) => {
	const target = e.target
	if (target.closest(".chat-header-right")) {
		profileWindowBack.style.display = "flex";
		profileWindow.style.display = "block";
	}
})
profileWindowBack.addEventListener("click", (e) => {
	console.log(e.target);
	const target = e.target
	if (target.closest(".profile-window")) {
		return;
	}
	if (target.closest(".profile-window-back")) {
		profileWindowBack.style.display = "none";
		profileWindow.style.display = "none";
	}
})

const contProfRight = document.querySelector(".cont-prof-right")
const URL = "http://172.28.0.202:8000/users";
fetch(URL) 
.then(response => response.json()) 
.then(data => {
		const prof = `
			<p>Name: ${data[0].email}</p>
			<p>ID: ${data[0].id}</p>
		`
		contProfRight.insertAdjacentHTML("beforeend", prof)
})


