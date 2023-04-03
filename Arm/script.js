const entranceBtn = document.querySelector(".entrance");
const registrBtn = document.querySelector(".registration");

const regForm = document.querySelector(".registration-form");
const entForm = document.querySelector(".entrance-form");

const container = document.querySelector(".container");
entranceBtn.addEventListener("click", (e) => {
  container.style.display = "none";
  entForm.style.display = "flex";
});
registrBtn.addEventListener("click", (e) => {
  container.style.display = "none";
  regForm.style.display = "flex";
});
