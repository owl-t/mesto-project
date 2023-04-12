const form = document.querySelector(".form");
document.querySelector(".form__close-button").onclick = function () {
  form.style.display = "none";
};

document.querySelector(".profile__edit-button").onclick = function () {
  form.style.display = "flex";
};
