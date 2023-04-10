const url = "http://172.28.0.202:8000";
const endCreateUser = "/users";
const endCreateChat = "/create_chat";
const endLogin = "/users/login";
const endSendMess = "/send_message";

/////////////////////

const entrLink = document.querySelector("#entrance");
const registrSend = document.querySelector("#registr-send");
const registrForm = document.querySelector(".registration-form");
const entrForm = document.querySelector(".entrance-form");
const wrapper = document.querySelector(".wrapper");
const already = document.querySelector(".already-block");

/////////////////////

const regLogin = document.querySelector("#registr-login");
const regPass = document.querySelector("#registr-password");
const regRepeat = document.querySelector("#registr-repeat");

//entr

const entrLogin = document.querySelector("#entrance-login");
const entrPass = document.querySelector("#entrance-password");
const entrBtn = document.querySelector("#entr-send");

//error

const regErrLog = document.querySelector("#error-reg-log");
const regErrPas = document.querySelector("#error-reg-pas");
const regErrRep = document.querySelector("#error-reg-rep");

/////////////////////

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
    // console.log(resp);
    if (resp.access_token) {
      return resp.access_token;
    }
    return resp.detail;
  } catch (err) {
    console.log(err);
  }
};
//
regLogin.addEventListener("blur", () => {
  const logValue = regLogin.value.length;
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
regPass.addEventListener("blur", () => {
  regPassValue = 0;
  const passValue = regPass.value.length;
  if (passValue >= 5 && passValue <= 15) {
    regPassValue = 0;
    regPass.style.borderBottom = "2px solid green";
    regErrPas.style.color = "green";
    if (
      /^[0-9]+$|^[a-z]+$/.test(regPass.value) ||
      /^[0-9a-z]+$/.test(regPass.value)
    ) {
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

regRepeat.addEventListener("blur", () => {
  const repValue = regRepeat.value.length;
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
});

///////

registrSend.addEventListener("click", async (e) => {
  e.preventDefault();
  if (regLogValue == 1 && regPassValue == 1 && regRepValue == 1) {
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

entrLink.addEventListener("click", () => {
  registrForm.style.display = "none";
  already.style.display = "none";
  entrForm.style.display = "flex";
});
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
