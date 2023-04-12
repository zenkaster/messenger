"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var URL = 'http://172.28.0.202:8000';
var container = document.querySelector('.container');
var burger = document.querySelector('.burger-menu');
var burgerContent = document.querySelector('.burger-content');
var inpSearch = document.querySelector('#inp-search');
var searchContent = document.querySelector('.search-content');

var token = function token() {
  return localStorage.getItem('token');
};

var getData = function getData(url, method, body, login) {
  var content, req, resp;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (login) {
            content = 'application/json';
          } else {
            content = 'application/x-www-form-urlencoded';
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url, {
            method: method,
            body: body,
            headers: {
              'Accept': 'application/json',
              'Content-Type': content,
              'Authorization': "Bearer ".concat(token())
            }
          }));

        case 3:
          req = _context.sent;
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(req.json());

        case 7:
          resp = _context.sent;
          console.log(resp);
          return _context.abrupt("return", resp);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 12]]);
};

var end = {
  allUsers: '/auth/users/?skip=0&limit=100',
  //get
  createUser: '/auth/register',
  //post
  login: '/auth/login',
  //post
  createChat: '/chat/create',
  //post
  myChats: '/chat/my',
  //get
  sendMessage: '/send_message',
  //post
  getMessages: '/chat',
  //get
  users: '/users',
  //get
  me: '/auth/me' //get

}; // const log = await getData(URL + end.login, 'POST', 'username=tima&password=123456qwe');
// const log = await getData(URL + end.login, 'POST', JSON.stringify({ email: 'asdasd', password: '123456qwe' })) // надо заменить на логин
// localStorage.setItem('token', log.access_token)
// const log = await getData(URL + end.login, 'POST', JSON.stringify({ email: 'testNewFunc', password: '12345678' })) // надо заменить на логин
// localStorage.setItem('token', log.access_token)
// отрисовка чатов в поиске

var showAllUsers = function showAllUsers() {
  var all;
  return regeneratorRuntime.async(function showAllUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          searchContent.innerHTML = '';
          _context2.next = 3;
          return regeneratorRuntime.awrap(getData(URL + end.allUsers, 'GET'));

        case 3:
          all = _context2.sent;
          all.forEach(function (element) {
            var card = "\n    <li class=\"search-result\" id=".concat(element.id, ">\n    <img src=\"images/user (2).png\" alt=\"#\">\n    <h2>").concat(element.email, "</h2>\n    </li>\n    ");
            searchContent.insertAdjacentHTML('beforeend', card);
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // отрисовка чатов пользователя


var renderMyChats = function renderMyChats() {
  var ownChats;
  return regeneratorRuntime.async(function renderMyChats$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          document.querySelector('.chats').innerHTML = '';
          _context3.next = 3;
          return regeneratorRuntime.awrap(getData(URL + end.myChats, 'GET'));

        case 3:
          ownChats = _context3.sent;
          ownChats.chats.forEach(function (element) {
            var chat = "\n    <div class=\"chat\" id=\"chat_id:".concat(element.id, "\">\n    <img src=\"images/user (2).png\" alt=\"#\">\n    <h2 id=\"to_user_id:").concat(element.to_user.id, "\">").concat(element.to_user.email, "</h2>\n    </div>\n    <hr>\n    ");
            document.querySelector('.chats').insertAdjacentHTML('afterbegin', chat);
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var init = function init() {
  renderMyChats();
};

init();
document.addEventListener('click', function (e) {
  var target = e.target; // console.log(target);

  if (target.closest('.burger-menu')) {
    burgerContent.classList.toggle("hide");
  }

  if (!burgerContent.classList.contains('hide') && !target.closest('.burger-menu') && !target.closest('.burger-content')) {
    burgerContent.classList.toggle("hide");
  }

  if (target.closest("#inp-search")) {
    searchContent.classList.toggle("hide");
    showAllUsers();
  }

  if (!searchContent.classList.contains('hide') && !target.closest('#inp-search')) {
    searchContent.classList.toggle("hide");
  }

  if (target.closest('.chat-search')) {
    createChat(target.id);
  }
});
var sideCheckbox = document.querySelector("#side-checkbox");
var link = document.getElementById("theme-link");
sideCheckbox.addEventListener("click", function (e) {
  var lightTheme = "./dist/style.css";
  var darkTheme = "./dist/light-style.css";
  console.log(link);
  var currTheme = link.getAttribute("href");
  var theme = "";

  if (sideCheckbox.checked) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  link.setAttribute("href", currTheme); // Save(theme);
}); /// requests

var loginUser = function loginUser() {
  var data, resp;
  return regeneratorRuntime.async(function loginUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch(url + endLogin, {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: entrLogin.value,
              password: entrPass.value
            })
          }));

        case 2:
          data = _context4.sent;
          _context4.prev = 3;
          _context4.next = 6;
          return regeneratorRuntime.awrap(data.json());

        case 6:
          resp = _context4.sent;

          if (!resp.access_token) {
            _context4.next = 9;
            break;
          }

          return _context4.abrupt("return", resp.access_token);

        case 9:
          return _context4.abrupt("return", resp.detail);

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](3);
          console.log(_context4.t0);

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 12]]);
}; /////


var createUser = function createUser(login, password) {
  var data, req;
  return regeneratorRuntime.async(function createUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(fetch(url + endCreateUser, _defineProperty({
            method: "POST",
            body: "grant_type=&username=".concat(body.user),
            headers: {
              accept: "application/json",
              "Content-Type": "application/json"
            }
          }, "body", JSON.stringify({
            email: login,
            password: password
          }))));

        case 2:
          data = _context5.sent;
          _context5.prev = 3;
          _context5.next = 6;
          return regeneratorRuntime.awrap(data.json());

        case 6:
          req = _context5.sent;
          console.log(req);
          return _context5.abrupt("return", req);

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](3);
          console.error(_context5.t0);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[3, 11]]);
}; ///


var url = "http://172.28.0.202:8000";
var endCreateUser = "/users";
var endCreateChat = "/create_chat";
var endLogin = "/users/login";
var endSendMess = "/send_message"; /////////////////////

var formWrap = document.querySelector(".form-wrapper");
var title = document.querySelector("#form-title");
var logo = document.querySelector("#form-logo"); ////

var entrLink = document.querySelector("#entrance");
var registrSend = document.querySelector("#registr-send");
var registrForm = document.querySelector(".registration-form");
var entrForm = document.querySelector(".entrance-form");
var wrapper = document.querySelector(".wrapper");
var already = document.querySelector(".already-block"); /////////////////////

var regMail = document.querySelector("#registr-mail");
var regLogin = document.querySelector("#registr-login");
var regPass = document.querySelector("#registr-password");
var regRepeat = document.querySelector("#registr-repeat"); //entr

var entrLogin = document.querySelector("#entrance-login");
var entrPass = document.querySelector("#entrance-password");
var entrBtn = document.querySelector("#entr-send"); //error

var regErrMail = document.querySelector("#error-reg-mail");
var regErrLog = document.querySelector("#error-reg-log");
var regErrPas = document.querySelector("#error-reg-pas");
var regErrRep = document.querySelector("#error-reg-rep"); /////////////////////

var regMailValue = 0;
var regLogValue = 0;
var regPassValue = 0;
var regRepValue = 0; /////////////////////

var registredTitle = document.querySelector(".registred-title"); ///

var entrError = document.querySelector("#entrance-error");
var regTitle = document.querySelector(".entr-title"); ////

regMail.addEventListener("blur", function () {
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

  if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1 && regMailValue == 1) {
    registrSend.classList.add("active");
  } else {
    registrSend.classList.remove("active");
  }
}); ///

regLogin.addEventListener("blur", function () {
  regLogValue = 0;
  regErrLog.classList.remove("error-true");
  regLogin.style.borderBottom = "2px solid red";
  var logValue = regLogin.value.length;

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

    if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1 && regMailValue == 1) {
      registrSend.classList.add("active");
    } else {
      registrSend.classList.remove("active");
    }
  }
}); //

regPass.addEventListener("blur", function () {
  regPassValue = 0;
  var passValue = regPass.value.length;
  regPass.style.borderBottom = "2px solid red";
  regErrPas.classList.remove("error-true");

  if (passValue == 0) {
    regErrPas.textContent = "Обязательное поле";
  } else {
    if (passValue >= 5 && passValue <= 15) {
      if (/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/.test(regPass.value)) {
        regPassValue = 1;
        regErrPas.classList.add("error-true");
        regPass.style.borderBottom = "2px solid green";
        regErrPas.textContent = "✓";
      } else {
        regErrPas.textContent = "Некорректный пароль";
        confirm("Пароль должен содержать: только латинские буквы, минимум 1 букву в верхнем  и нижнем регистре, минимум 1 цифру");
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

    if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1 && regMailValue == 1) {
      registrSend.classList.add("active");
    } else {
      registrSend.classList.remove("active");
    }
  }
});
regRepeat.addEventListener("blur", function () {
  regRepValue = 0;
  regRepeat.style.borderBottom = "2px solid red";
  regErrRep.classList.remove("error-true");
  var repValue = regRepeat.value.length;

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

        if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1 && regMailValue == 1) {
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
}); ///////

registrSend.addEventListener("click", function _callee(e) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          e.preventDefault();

          if (!(regLogValue == 1 && regPassValue == 1 && regRepValue == 1 && regMailValue == 1)) {
            _context6.next = 8;
            break;
          }

          _context6.next = 4;
          return regeneratorRuntime.awrap(createUser(regLogin.value, regPass.value));

        case 4:
          res = _context6.sent;

          if (res.detail) {
            regErrLog.style.color = "red";
            regLogin.style.borderBottom = "2px solid red";
            regErrLog.style.fontSize = "14px";
            regErrLog.textContent = "Такой логин уже есть";
          } else {
            registredTitle.style.display = "block";
            registrForm.style.display = "none";
            already.style.display = "none";
            setTimeout(function () {
              registredTitle.style.display = "none";
              entrForm.style.display = "flex";
            }, 4000);
          }

          _context6.next = 9;
          break;

        case 8:
          alert("Значения невалидны");

        case 9:
        case "end":
          return _context6.stop();
      }
    }
  });
}); //

var entrLogVal = 0;
var entrPasVal = 0;
var errorEntrLog = document.querySelector("#error-entr-log");
var errorEntrPas = document.querySelector("#error-entr-pas");
entrLogin.addEventListener("blur", function () {
  var entrLogValue = entrLogin.value;
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
entrPass.addEventListener("blur", function () {
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

var entrFormOpening = function entrFormOpening() {
  formWrap.style.transform = "rotateY(180deg)";
  setTimeout(function () {
    registrForm.style.display = "none";
    already.style.display = "none";
    entrForm.style.display = "flex";
    title.style.transform = "rotateY(180deg)";
    logo.style.transform = "rotateY(180deg)";
  }, 500);
};

entrLink.addEventListener("click", entrFormOpening);
entrBtn.addEventListener("click", function _callee2(e) {
  var guest, token, signWrapper;
  return regeneratorRuntime.async(function _callee2$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          e.preventDefault();
          guest = entrLogin.value;
          _context7.next = 4;
          return regeneratorRuntime.awrap(loginUser());

        case 4:
          token = _context7.sent;
          signWrapper = document.querySelector("#sign-wrapper");

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
            regTitle.textContent = "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ".concat(guest);
            setTimeout(function () {
              signWrapper.style.display = "none";
            }, 3000);
          }

          entrLogin.value = "";
          entrPass.value = "";

        case 9:
        case "end":
          return _context7.stop();
      }
    }
  });
});