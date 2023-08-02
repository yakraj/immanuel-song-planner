let userdetails;
const serverURL = "https://6lccq8-3001.csb.app/";
const LoginHandler = () => {
  fetch("https://6lccq8-3001.csb.app/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone: window.phone, password: window.pass }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data[0].name) {
        loginform.style.display = "none";
        songform.innerHTML = replaceform;
        storeuserDetails(data[0]);
      }
      userdetails = data[0];
    });
};
const RegisterHandler = () => {
  fetch("https://6lccq8-3001.csb.app/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: window.name,
      phone: window.phone,
      password: window.pass,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data[0].name) {
        loginform.style.display = "none";
        songform.innerHTML = replaceform;
        userdetails = data[0];
      }
    });
};
const storeuserDetails = (data) => {
  localStorage.setItem("userCrediantials", JSON.stringify(data));
};

const getUserDetails = () => {
  let data = JSON.parse(localStorage.getItem("userCrediantials"));
  if (data.phone) {
    userdetails = data;
    loginform.style.display = "none";
    songform.innerHTML = replaceform;
  }
};

window.onload = function () {
  getUserDetails();
};
