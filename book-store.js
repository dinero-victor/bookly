searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header-3 .header-2").classList.add("active");
  } else {
    document.querySelector(".header-3 .header-2").classList.add("active");
  }
};

window.onscroll = () => {

  if (window.scrollY > 10) {
    document.querySelector(".header .header-2").style.top = "0";
  } else {
    document.querySelector(".header .header-2").style.top = "12%";
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header-3 .header-2").classList.add("active");
  } else {
    document.querySelector(".header-3 .header-2").classList.add("active");
  }
};

  const icon = document.querySelector('#heart');
// const link = document.querySelector('.header .header-1 .icon a')
icon.addEventListener('click', () => {
  icon.classList.toggle('green');
});

const icon2 = document.querySelectorAll('.featured .box-container .icons #heart');

icon2.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('green');
  });
})
// const link = document.querySelector('.header .header-1 .icon a')

