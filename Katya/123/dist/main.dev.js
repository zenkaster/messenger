"use strict";

var container = document.querySelector(".container");
var burger = document.querySelector(".chats-profile");
var burgerActive = document.querySelector(".active-chats-profile");
var inpSearch = document.querySelector("#inp-search");
var searchActive = document.querySelector(".active-chats-search");
document.addEventListener('click', function (e) {
  var target = e.target;
  console.log(target);

  if (target.closest('.chats-profile')) {
    burgerActive.classList.toggle("hide");
  }

  if (target.closest("#inp-search")) {
    searchActive.classList.toggle("hide");
  }
});
var url = "http://172.28.0.202:8000";
var endCreateUser = "/users";
var endCreateChat = "/create_chat";
var endLogin = "/users/login";
var endSendMess = "/send_message"; /////////////////////

var entrLink = document.querySelector("#entrance");
var registrSend = document.querySelector("#registr-send");
var registrForm = document.querySelector(".registration-form");
var entrForm = document.querySelector(".entrance-form");
var wrapper = document.querySelector(".wrapper");
var already = document.querySelector(".already-block"); /////////////////////

var regLogin = document.querySelector("#registr-login");
var regPass = document.querySelector("#registr-password");
var regRepeat = document.querySelector("#registr-repeat"); //entr

var entrLogin = document.querySelector("#entrance-login");
var entrPass = document.querySelector("#entrance-password");
var entrBtn = document.querySelector("#entr-send"); //error

var regErrLog = document.querySelector("#error-reg-log");
var regErrPas = document.querySelector("#error-reg-pas");
var regErrRep = document.querySelector("#error-reg-rep"); /////////////////////

var regLogValue = 0;
var regPassValue = 0;
var regRepValue = 0; /////////////////////

var registredTitle = document.querySelector(".registred-title"); ///

var entrError = document.querySelector("#entrance-error");
var regTitle = document.querySelector(".entr-title"); ////

var createUser = function createUser(login, password) {
  var data, req;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url + endCreateUser, {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: login,
              password: password
            })
          }));

        case 2:
          data = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(data.json());

        case 6:
          req = _context.sent;
          console.log(req);
          return _context.abrupt("return", req);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](3);
          console.error(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 11]]);
}; ///z5


var loginUser = function loginUser() {
  var data, resp;
  return regeneratorRuntime.async(function loginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
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
          data = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(data.json());

        case 6:
          resp = _context2.sent;

          if (!resp.access_token) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", resp.access_token);

        case 9:
          return _context2.abrupt("return", resp.detail);

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 12]]);
}; //


regLogin.addEventListener("blur", function () {
  var logValue = regLogin.value.length;

  if (logValue >= 3 && logValue <= 15) {
    regLogValue = 1;
    regLogin.style.borderBottom = "2px solid green";
    regErrLog.textContent = "✓";
    regErrLog.style.color = "green";
    regErrLog.style.fontSize = "20px";
  } else {
    regLogValue = 0;
    regErrLog.style.fontSize = "14px";
    regErrLog.style.color = "red";
    regLogin.style.borderBottom = "2px solid red";
    regErrLog.textContent = "Кол-во символов: от 3 до 15";
  }

  if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1) {
    registrSend.classList.add("active");
  } else {
    registrSend.classList.remove("active");
  }
});
regPass.addEventListener("blur", function () {
  regPassValue = 0;
  var passValue = regPass.value.length;

  if (passValue >= 5 && passValue <= 15) {
    regPassValue = 0;
    regPass.style.borderBottom = "2px solid green";
    regErrPas.style.color = "green";

    if (/^[0-9]+$|^[a-z]+$/.test(regPass.value) || /^[0-9a-z]+$/.test(regPass.value)) {
      regPassValue = 1;
      regErrPas.textContent = "Простой пароль ✓";
    } else {
      regErrPas.textContent = "Сложный пароль ✓";
      regPassValue = 1;
    }
  } else {
    regPassValue = 0;
    regErrPas.style.fontSize = "14px";
    regErrPas.style.color = "red";
    regPass.style.borderBottom = "2px solid red";
    regErrPas.textContent = "Кол-во символов: от 5 до 15";
  }

  if (regRepeat.value.length >= 5) {
    if (regRepeat.value === regPass.value) {
      regRepeat.style.borderBottom = "2px solid green";
      regErrRep.textContent = "Пароли совпадают ✓";
      regErrLog.style.fontSize = "14px";
      regErrRep.style.color = "green";
      regRepValue = 1;
    } else {
      regRepValue = 0;
      regErrRep.style.fontSize = "14px";
      regErrRep.style.color = "red";
      regRepeat.style.borderBottom = "2px solid red";
      regErrRep.textContent = "Пароли не совпадают";
    }
  }

  if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1) {
    registrSend.classList.add("active");
  } else {
    registrSend.classList.remove("active");
  }
});
regRepeat.addEventListener("blur", function () {
  var repValue = regRepeat.value.length;

  if (repValue >= 5 && repValue <= 15) {
    if (regRepeat.value == regPass.value) {
      regRepeat.style.borderBottom = "2px solid green";
      regErrRep.textContent = "Пароли совпадают ✓";
      regErrRep.style.color = "green";
      regRepValue = 1;
    } else {
      regRepValue = 0;
      regErrRep.style.fontSize = "14px";
      regErrRep.style.color = "red";
      regRepeat.style.borderBottom = "2px solid red";
      regErrRep.textContent = "Пароли не совпадают";
    }
  } else {
    regRepValue = 0;
    regErrRep.style.fontSize = "14px";
    regErrRep.style.color = "red";
    regRepeat.style.borderBottom = "2px solid red";
    regErrRep.textContent = "Кол-во символов: от 5 до 15";
  }

  if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1) {
    registrSend.classList.add("active");
  } else {
    registrSend.classList.remove("active");
  }
}); ///////

registrSend.addEventListener("click", function _callee(e) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          e.preventDefault();

          if (!(regLogValue == 1 && regPassValue == 1 && regRepValue == 1)) {
            _context3.next = 8;
            break;
          }

          _context3.next = 4;
          return regeneratorRuntime.awrap(createUser(regLogin.value, regPass.value));

        case 4:
          res = _context3.sent;

          if (res.detail) {
            regErrLog.style.color = "red";
            regLogin.style.border = "2px solid red";
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

          _context3.next = 9;
          break;

        case 8:
          alert("Значения невалидны");

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
});
entrLink.addEventListener("click", function () {
  registrForm.style.display = "none";
  already.style.display = "none";
  entrForm.style.display = "flex";
});
entrBtn.addEventListener("click", function _callee2(e) {
  var guest, token;
  return regeneratorRuntime.async(function _callee2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          e.preventDefault();
          guest = entrLogin.value;
          _context4.next = 4;
          return regeneratorRuntime.awrap(loginUser());

        case 4:
          token = _context4.sent;

          if (token == "Incorrect username or password") {
            entrLogin.style.border = "2px solid red";
            entrPass.style.border = "2px solid red";
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
              wrapper.style.display = "none";
            }, 3000);
          }

          entrLogin.value = "";
          entrPass.value = "";

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
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