const URL = 'http://172.28.0.202:8000'
const container = document.querySelector('.container')

const burger = document.querySelector('.burger-menu')
const burgerContent = document.querySelector('.burger-content')
const inpSearch = document.querySelector('#inp-search')

const searchContent = document.querySelector('.search-content')



const token = () => {
  return localStorage.getItem('token')
}
const getData = async (url, method, body, login) => {
  let content;
  if (login) {
    content = 'application/json'
  } else {
    content = 'application/x-www-form-urlencoded'
  }
  const req = await fetch(url, {
    method: method,
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': content,
      'Authorization': `Bearer ${token()}`,
    },
  })
  try {
    const resp = await req.json();
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(err);
  }
}
const end = {
  allUsers: '/auth/users/?skip=0&limit=100', //get
  createUser: '/auth/register', //post
  login: '/auth/login', //post
  createChat: '/chat/create', //post
  myChats: '/chat/my', //get
  sendMessage: '/send_message', //post
  getMessages: '/chat', //get
  users: '/users', //get
  me: '/auth/me', //get
}

// const log = await getData(URL + end.login, 'POST', 'username=tima&password=123456qwe');

// const log = await getData(URL + end.login, 'POST', JSON.stringify({ email: 'asdasd', password: '123456qwe' })) // надо заменить на логин
// localStorage.setItem('token', log.access_token)




// const log = await getData(URL + end.login, 'POST', JSON.stringify({ email: 'testNewFunc', password: '12345678' })) // надо заменить на логин
// localStorage.setItem('token', log.access_token)


// отрисовка чатов в поиске
const showAllUsers = async () => {
  searchContent.innerHTML = '';
  const all = await getData(URL + end.allUsers, 'GET', )
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
  const ownChats = await getData(URL + end.myChats, 'GET', )
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
  if (!burgerContent.classList.contains('hide') && !target.closest('.burger-menu') && !target.closest('.burger-content')) {
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
  if (sideCheckbox.checked) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme);

  // Save(theme);
})
/// requests

const loginUser = async () => {
  const data = await fetch(url + endLogin, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: entrLogin.value,
      password: entrPass.value,
    }),
  });
  try {
    const resp = await data.json();
    if (resp.access_token) {
      return resp.access_token;
    }
    return resp.detail;
  } catch (err) {
    console.log(err);
  }
};
/////

const createUser = async (login, password) => {
  const data = await fetch(url + endCreateUser, {
    method: "POST",
    body: `grant_type=&username=${body.user}`,

    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: login,
      password: password,
    }),
  });
  try {
    const req = await data.json();
    console.log(req);
    return req;
  } catch (error) {
    console.error(error);
  }
};

///
const url = "http://172.28.0.202:8000";
const endCreateUser = "/users";
const endCreateChat = "/create_chat";
const endLogin = "/users/login";
const endSendMess = "/send_message";

/////////////////////
const formWrap = document.querySelector(".form-wrapper");
const title = document.querySelector("#form-title");
const logo = document.querySelector("#form-logo");
////

const entrLink = document.querySelector("#entrance");
const registrSend = document.querySelector("#registr-send");
const registrForm = document.querySelector(".registration-form");
const entrForm = document.querySelector(".entrance-form");
const wrapper = document.querySelector(".wrapper");
const already = document.querySelector(".already-block");

/////////////////////

const regMail = document.querySelector("#registr-mail");
const regLogin = document.querySelector("#registr-login");
const regPass = document.querySelector("#registr-password");
const regRepeat = document.querySelector("#registr-repeat");

//entr

const entrLogin = document.querySelector("#entrance-login");
const entrPass = document.querySelector("#entrance-password");
const entrBtn = document.querySelector("#entr-send");

//error
const regErrMail = document.querySelector("#error-reg-mail");
const regErrLog = document.querySelector("#error-reg-log");
const regErrPas = document.querySelector("#error-reg-pas");
const regErrRep = document.querySelector("#error-reg-rep");

/////////////////////

let regMailValue = 0;
let regLogValue = 0;
let regPassValue = 0;
let regRepValue = 0;

/////////////////////

const registredTitle = document.querySelector(".registred-title");
///

const entrError = document.querySelector("#entrance-error");
const regTitle = document.querySelector(".entr-title");

////


regMail.addEventListener("blur", () => {
  regMailValue = 0;
  regErrMail.classList.remove("error-true");
  regMail.style.borderBottom = "2px solid red";
  if (regMail.value.length == 0) {
    regErrMail.textContent = "Обязательное поле";
  } else {
    if (/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/.test(regMail.value)) {
      if (regMail.value.length > 4) {
        regErrMail.textContent = "✓";
        regErrMail.classList.add("error-true");
        regMailValue = 1;
        regMail.style.borderBottom = "2px solid green";
      } else {
        regErrMail.textContent = "Слишком короткий email";
      }
    } else {
      9;
      regErrMail.textContent = "Неккоретный email";
    }
  }
  if (
    regLogValue == 1 &&
    regPassValue == 1 &&
    regRepValue == 1 &&
    regMailValue == 1
  ) {
    registrSend.classList.add("active");
  } else {
    registrSend.classList.remove("active");
  }
});
///
regLogin.addEventListener("blur", () => {
  regLogValue = 0;
  regErrLog.classList.remove("error-true");
  regLogin.style.borderBottom = "2px solid red";
  const logValue = regLogin.value.length;
  if (logValue == 0) {
    regErrLog.textContent = "Обязательное поле";
  } else {
    if (logValue >= 3 && logValue <= 15) {
      if (/^[a-zA-Z]+$/.test(regLogin.value)) {
        if (/^[A-Z].*$/.test(regLogin.value)) {
          regLogValue = 1;
          regLogin.style.borderBottom = "2px solid green";
          regErrLog.classList.add("error-true");
          regErrLog.textContent = "✓";
        } else {
          regErrLog.textContent = "Первый символ - заглавная буква";
        }
      } else {
        regErrLog.textContent = "Только латинские буквы";
      }
    } else {
      regErrLog.textContent = "Кол-во символов: от 3 до 15";
    }
    if (
      regLogValue == 1 &&
      regPassValue == 1 &&
      regRepValue == 1 &&
      regMailValue == 1
    ) {
      registrSend.classList.add("active");
    } else {
      registrSend.classList.remove("active");
    }
  }
});
//
regPass.addEventListener("blur", () => {
  regPassValue = 0;
  const passValue = regPass.value.length;
  regPass.style.borderBottom = "2px solid red";
  regErrPas.classList.remove("error-true");

  if (passValue == 0) {
    regErrPas.textContent = "Обязательное поле";
  } else {
    if (passValue >= 5 && passValue <= 15) {
      if (
        /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/.test(
          regPass.value
        )
      ) {
        regPassValue = 1;
        regErrPas.classList.add("error-true");
        regPass.style.borderBottom = "2px solid green";
        regErrPas.textContent = "✓";
      } else {
        regErrPas.textContent = "Некорректный пароль";
        confirm(
          "Пароль должен содержать: только латинские буквы, минимум 1 букву в верхнем  и нижнем регистре, минимум 1 цифру"
        );
      }
    } else {
      regErrPas.textContent = "Кол-во символов: от 5 до 15";
    }
    if (regRepeat.value.length >= 5) {
      if (regRepeat.value === regPass.value) {
        regErrRep.textContent = "Пароли совпадают ✓";
        regRepValue = 1;
        regErrRep.classList.add("error-true");
        regRepeat.style.borderBottom = "2px solid green";
        regErrRep.style.fontSize = "16px";
      } else {
        regErrRep.classList.remove("error-true");
        regErrRep.textContent = "Пароли не совпадают";
        regRepValue = 0;
      }
    }
    if (
      regLogValue == 1 &&
      regPassValue == 1 &&
      regRepValue == 1 &&
      regMailValue == 1
    ) {
      registrSend.classList.add("active");
    } else {
      registrSend.classList.remove("active");
    }
  }
});

regRepeat.addEventListener("blur", () => {
  regRepValue = 0;
  regRepeat.style.borderBottom = "2px solid red";
  regErrRep.classList.remove("error-true");
  const repValue = regRepeat.value.length;
  if (regRepeat.value == 0) {
    regErrRep.textContent = "Обязательное поле";
  } else {
    if (repValue >= 5 && repValue <= 15) {
      if (regRepeat.value == regPass.value) {
        regRepValue = 1;
        regErrRep.classList.add("error-true");
        regRepeat.style.borderBottom = "2px solid green";
        regErrRep.style.fontSize = "16px";

        regErrRep.textContent = "Пароли совпадают ✓";
        if (
          regLogValue == 1 &&
          regPassValue == 1 &&
          regRepValue == 1 &&
          regMailValue == 1
        ) {
          registrSend.classList.add("active");
        } else {
          registrSend.classList.remove("active");
        }
      } else {
        regErrRep.textContent = "Пароли не совпадают";
      }
    } else {
      regErrRep.textContent = "Кол-во символов: от 5 до 15";
    }
  }
});

///////

registrSend.addEventListener("click", async (e) => {
  e.preventDefault();
  if (
    regLogValue == 1 &&
    regPassValue == 1 &&
    regRepValue == 1 &&
    regMailValue == 1
  ) {
    const res = await createUser(regLogin.value, regPass.value);
    if (res.detail) {
      regErrLog.style.color = "red";
      regLogin.style.borderBottom = "2px solid red";
      regErrLog.style.fontSize = "14px";
      regErrLog.textContent = "Такой логин уже есть";
    } else {
      registredTitle.style.display = "block";
      registrForm.style.display = "none";
      already.style.display = "none";
      setTimeout(() => {
        registredTitle.style.display = "none";
        entrForm.style.display = "flex";
      }, 4000);
    }
  } else {
    alert("Значения невалидны");
  }
});

//
let entrLogVal = 0;
let entrPasVal = 0;

const errorEntrLog = document.querySelector("#error-entr-log");
const errorEntrPas = document.querySelector("#error-entr-pas");

entrLogin.addEventListener("blur", () => {
  const entrLogValue = entrLogin.value;
  errorEntrLog.classList.remove("error-true");
  entrLogin.style.borderBottom = "2px solid red";
  errorEntrLog.textContent = "Обязательное поле";
  entrLogVal = 0;

  if (entrLogValue.length > 0) {
    if (/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/.test(entrLogValue)) {
      if (entrLogValue.length > 4) {
        errorEntrLog.textContent = "✓";
        errorEntrLog.classList.add("error-true");
        entrLogVal = 1;
        entrLogin.style.borderBottom = "2px solid green";
      } else {
        errorEntrLog.textContent = "Слишком короткий email";
      }
    } else {
      errorEntrLog.textContent = "Неккоретный email";
    }
  }
  if (entrLogVal == 1 && entrPasVal == 1) {
    entrBtn.classList.add("active");
  } else {
    entrBtn.classList.remove("active");
  }
});
entrPass.addEventListener("blur", () => {
  entrPasVal = 0;
  entrPass.style.borderBottom = "2px solid red";

  errorEntrPas.classList.remove("error-true");

  if (entrPass.value.length == 0) {
    errorEntrPas.textContent = "Обязательное поле";
  } else if (entrPass.value.length > 0 && entrPass.value.length <= 4) {
    errorEntrPas.textContent = "Слишком короткий пароль";
  } else {
    errorEntrPas.textContent = "✓";
    errorEntrPas.classList.add("error-true");
    entrPasVal = 1;
    entrPass.style.borderBottom = "2px solid green";
  }
  if (entrLogVal == 1 && entrPasVal == 1) {
    entrBtn.classList.add("active");
  } else {
    entrBtn.classList.remove("active");
  }
});

const entrFormOpening = () => {
  formWrap.style.transform = "rotateY(180deg)";

  setTimeout(() => {
    registrForm.style.display = "none";
    already.style.display = "none";
    entrForm.style.display = "flex";
    title.style.transform = "rotateY(180deg)";
    logo.style.transform = "rotateY(180deg)";
  }, 500);
};

entrLink.addEventListener("click", entrFormOpening);

entrBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const guest = entrLogin.value;
  const token = await loginUser();
  const signWrapper = document.querySelector(`#sign-wrapper`)
  if (token == "Incorrect username or password") {
    entrLogin.style.borderBottom = "2px solid red";
    entrPass.style.borderBottom = "2px solid red";
    entrError.textContent = "Неправильный логин или пароль";
    entrError.style.display = "block";
  } else {
    localStorage.setItem("token", token);
    console.log(token);
    already.style.display = "none";
    entrForm.style.display = "none";
    regTitle.style.display = "block";
    regTitle.textContent = `Добро пожаловать, ${guest}`;
    setTimeout(() => {
      signWrapper.style.display = "none";
    }, 3000);
  }
  entrLogin.value = "";
  entrPass.value = "";
});
