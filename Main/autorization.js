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
//

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
        regErrLog.textContent = "Только латинские символы";
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
      regErrPas.classList.add("error-true");
      regPassValue = 1;
      regPass.style.borderBottom = "2px solid green";

      if (
        /^[0-9]+$|^[a-z]+$/.test(regPass.value) ||
        /^[0-9a-z]+$/.test(regPass.value)
      ) {
        regErrPas.textContent = "Простой пароль ✓";
        regErrPas.style.fontSize = "16px";
      } else {
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
  regPassValue = 0;
  regRepeat.style.borderBottom = "2px solid red";
  regErrRep.classList.remove("error-true");
  const repValue = regRepeat.value.length;
  if (regRepeat.value == 0) {
    regErrRep.textContent = "Обязательное поле";
  } else {
    if (repValue >= 5 && repValue <= 15) {
      if (regRepeat.value == regPass.value) {
        regErrRep.classList.add("error-true");
        regRepeat.style.borderBottom = "2px solid green";
        regErrRep.style.fontSize = "16px";

        regErrRep.textContent = "Пароли совпадают ✓";
        regRepValue = 1;
      } else {
        regErrRep.textContent = "Пароли не совпадают";
      }
    } else {
      regErrRep.textContent = "Кол-во символов: от 5 до 15";
    }
    if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1) {
      registrSend.classList.add("active");
    } else {
      registrSend.classList.remove("active");
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
      wrapper.style.display = "none";
    }, 3000);
  }
  entrLogin.value = "";
  entrPass.value = "";
});