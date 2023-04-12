"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var createUser = function createUser(login, password) {
  var data, req;
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
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
}; ///


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
        regErrLog.textContent = "Только латинские символы";
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
      regErrPas.classList.add("error-true");
      regPass.style.borderBottom = "2px solid green";

      if (/^[0-9]+$|^[a-z]+$/.test(regPass.value) || /^[0-9a-z]+$/.test(regPass.value)) {
        regPassValue = 1;
        regErrPas.textContent = "Простой пароль ✓";
        regErrPas.style.fontSize = "16px";
      } else {
        regPassValue = 1;
        regErrPas.textContent = "Сложный пароль ✓";
        regErrPas.style.fontSize = "16px";
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
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          e.preventDefault();

          if (!(regLogValue == 1 && regPassValue == 1 && regRepValue == 1 && regMailValue == 1)) {
            _context3.next = 8;
            break;
          }

          _context3.next = 4;
          return regeneratorRuntime.awrap(createUser(regLogin.value, regPass.value));

        case 4:
          res = _context3.sent;

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
}); //

var entrLogVal = 0;
var entrPasVal = 0;
entrLogin.addEventListener("blur", function () {
  var entrLogValue = entrLogin.value;

  if (entrLogValue.length > 0) {
    if (entrLogValue.length >= 3 && entrLogValue.length <= 15) {
      if (/^[a-zA-Z]+$/.test(entrLogValue)) {
        if (/^[A-Z].*$/.test(entrLogValue)) {
          regLogin.style.borderBottom = "2px solid green";
          regErrLog.classList.add("error-true");
          regErrLog.textContent = "✓";
        } else {
          regErrLog.textContent = "Первый символ - заглавная буква";
        }
      } else {
        regErrLog.textContent = "Только латинские символы";
      }
    }
  }
});
entrPass.addEventListener("blur", function () {});

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
}); // regMail.addEventListener("blur", () => {
//   regMailValue = 0;
//   regErrMail.classList.remove("error-true");
//   regMail.style.borderBottom = "2px solid red";
//   if (regMail.value.length == 0) {
//     regErrMail.textContent = "Обязательное поле";
//   } else {
//     if (/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/.test(regMail.value)) {
//       if (regMail.value.length > 4) {
//         regErrMail.textContent = "✓";
//         regErrMail.classList.add("error-true");
//         regMailValue = 1;
//         regMail.style.borderBottom = "2px solid green";
//       } else {
//         regErrMail.textContent = "Слишком короткий email";
//       }
//     } else {
//       9;
//       regErrMail.textContent = "Неккоретный email";
//     }
//   }
//   if (
//     regLogValue == 1 &&
//     regPassValue == 1 &&
//     regRepValue == 1 &&
//     regMailValue == 1
//   ) {
//     registrSend.classList.add("active");
//   } else {
//     registrSend.classList.remove("active");
//   }
// });