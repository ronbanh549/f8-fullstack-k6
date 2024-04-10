var openLogin = document.querySelector(".open-login");
var modalAuth = document.querySelector(".modal-auth");
var modalOverlay = modalAuth.querySelector(".overlay");

var tabNavItems = modalAuth.querySelectorAll(".tab-nav a");

var loginForm = modalAuth.querySelector(".login-form");

var closeModal = function () {
  modalAuth.classList.remove("show");
};
openLogin.addEventListener("click", function () {
  modalAuth.classList.add("show");
});

modalOverlay.addEventListener("click", closeModal);

tabNavItems.forEach(function (navItem) {
  navItem.addEventListener("click", function () {
    var activeTab = modalAuth.querySelector(".tab-nav a.active");
    activeTab.classList.remove("active");
    this.classList.add("active");
    var hash = this.getAttribute("href");

    var tabPanel = modalAuth.querySelector(".tab-content .tab-panel" + hash);
    var tabPanelActive = modalAuth.querySelector(
      ".tab-content .tab-panel.active"
    );
    tabPanelActive.classList.remove("active");
    tabPanel.classList.add("active");
  });
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var emailEl = this.querySelector(".email");
  var passwordEl = this.querySelector(".password");

  var email = emailEl.value;
  var password = passwordEl.value;

  var errors = {};

  if (!email.trim()) {
    errors.email = "Vui long nhap email";
  }

  if (!password.trim()) {
    errors.password = "Vui long nhap password";
  }

  if (!Object.keys(errors).length) {
    loginForm.querySelector(".msg").innerText = `Đăng nhập thành công`;
  } else {
    //   Chon tat ca cac form-group
    var formGroupList = loginForm.querySelectorAll(".form-group");
    formGroupList.forEach(function (element) {
      var fieldName = element.querySelector(".field-item").classList[1];
      element.classList.remove(".has-error");
      element.querySelector(".error").innerText = "";
      if (errors[fieldName]) {
        element.classList.add("has-error");
        element.querySelector(".error").innerText = errors[fieldName];
      }
    });
  }
});
