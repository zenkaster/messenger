const URL = 'http://172.28.0.202:8000'
const container = document.querySelector(`.container`)

const burgerContent = document.querySelector(`.burger-content`)
const inpSearch = document.querySelector(`#inp-search`)

const searchContent = document.querySelector(`.search-content`)




const token = () => {
  return localStorage.getItem('token')
}
const getData = async (url, method, body) => {
  
  const req = await fetch(url, {
    method: method,
    body: body,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token()}`,
    },
  })
  try {
    const resp = await req.json();
    console.log(resp);
    return resp;
  }
  catch (err) {
    console.log(err);
  }
}
const end = {
  allUsers: '/users?skip=0&limit=100', //get
  createUser: '/users', //post
  login: '/users/login', //post
  createChat: '/chat', //post
  myChats: '/chat/my', //get
  sendMessage: '/send_message', //post
  getMessages: '/get_data', //get
}



const log = await getData(URL + end.login, 'POST', JSON.stringify({ email: 'testNewFunc', password: '12345678' })) // надо заменить на логин
localStorage.setItem('token', log.access_token)


// отрисовка чатов в поиске
const showAllUsers = async () => {
  searchContent.innerHTML = '';
  const all = await getData(URL + end.allUsers, 'GET',)
  all.forEach(element => {
    const card = `
    <li class="search-result" id=${element.id}>
    <img src="images/user (2).png" alt="#">
    <h2>${element.email}</h2>
    </li>
    `
    searchContent.insertAdjacentHTML('beforeend', card)
  });
  
}

// отрисовка чатов пользователя
const renderMyChats = async () => {
  document.querySelector('.chats').innerHTML = '';
  const ownChats = await getData(URL + end.myChats, 'GET',)
  ownChats.chats.forEach(element => {
    const chat = `
    <div class="chat" id="chat_id:${element.id}">
    <img src="images/user (2).png" alt="#">
    <h2 id="to_user_id:${element.to_user.id}">${element.to_user.email}</h2>
    </div>
    <hr>
    `
    document.querySelector('.chats').insertAdjacentHTML('afterbegin', chat)
  })
}

// не удалять
// создание нового чата
const createChat = async (id) => {
  await getData(URL + end.createChat + `/${id}`, 'POST', '')
  renderMyChats();
  
  // if (!chat.detail) {
    //   chat = await getData(URL + end.getMessages + `/${id}`, 'GET',)
    // }
    // const chatContent = `
    //   <div class="chat-header">
    //     <div class="chat-header-right">
    //         <img class="chat-header-right-img" src="images/user (2).png" alt="#">
  //         <h2 class="chat-header-right-h2">Название чата</h2>
  //     </div>
  //   </div>
  //   <div class="chat-middle">
  //     <div class="message1">
  //       <p class="message2">
  //         JOOOOOOOOOOOHN Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio possimus
  //         molestias atque vitae, eligendi ipsam? Cumque, quidem eum! Minima eum, laudantium quia rerum
  //         possimus expedita explicabo facilis non repellendus. Lorem ipsum dolor, sit amet consectetur
  //         adipisicing elit. Numquam, tempora! Est exercitationem repudiandae voluptas numquam
  //         nesciunt, consectetur distinctio nam non assumenda nobis, ad sit ullam quo? Nihil id ipsam
  //         quod?
  //       </p>
  //     </div>
  //     <div class="message1">
  //       <p class="message2">
  //         JOOOOOOOOOOOHN
  //       </p>
  //     </div>
  //     <div class="message1">
  //       <p class="message2">
  //         JOOOOOOOOOOOHN
  //       </p>
  //     </div>
  //   </div>
  // <div class="chat-footer">
  //   <input class="chat-footer-inp" type="text" placeholder="Введите сообщение">
  //   <img class="chat-footer-img"
  //       src="https://raw.githubusercontent.com/zenkaster/messenger/Maksim/Maxim/images/send-mes-img.png"
  //       alt="#">
  // </div>
  // `
}





const init = () => {
  renderMyChats();
}
init()


document.addEventListener('click', (e) => {
  const target = e.target;
  // console.log(target);
  if (target.closest('.burger-menu')) {
    burgerContent.classList.toggle(`hide`)
  }
  if (!burgerContent.classList.contains('hide') && !target.closest('.burger-menu')&& !target.closest('.burger-content')) {
    burgerContent.classList.toggle(`hide`)
  }
  if (target.closest(`#inp-search`)) {
    searchContent.classList.toggle(`hide`);
    showAllUsers();
  }
  if (!searchContent.classList.contains('hide') && !target.closest('#inp-search')) {
    searchContent.classList.toggle(`hide`);
  }
  if (target.closest('.chat-search')) {
    createChat(target.id);
  }
})

const sideCheckbox = document.querySelector(`#side-checkbox`)
const link = document.getElementById("theme-link");

sideCheckbox.addEventListener(`click`, (e) => {
  let lightTheme = "./dist/style.css";
  let darkTheme = "./dist/light-style.css";
  console.log(link);

  let currTheme = link.getAttribute("href");
  let theme = "";
  if(sideCheckbox.checked) {
    currTheme = darkTheme;
   	theme = "dark";
  }
  else {
    currTheme = lightTheme;
   	theme = "light";
  }

  link.setAttribute("href", currTheme);

  // Save(theme);
})


// container.addEventListener(`click`, (e) => {

//   const target = e.target
//   if(target.closest(`#side-checkbox`)) {
//     // container.classList.toggle(`dark-side`)
//     // console.log(`234`);
    
//   }
// })