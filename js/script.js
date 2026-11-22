// toggle clas active

// kita ambil dulu elemet navbarnya
const navbar = document.querySelector(".menus");
// ketika tombol hamburger menu di klil, maka munculkan menusnya
document.querySelector("#hamburger").onclick = () => {
  navbar.classList.toggle("active");
};
