const titles = document.querySelectorAll(".banner-text h1");
let i = 0;

function change() {
    titles[i].classList.remove("active");
    i++;
    if (i >= titles.length) i = 0;
    titles[i].classList.add("active");
}

setInterval(change, 3000);


const clients = document.querySelectorAll(".client-box");
let a = 0;

function clientChange() {
    clients[a].classList.remove("active");
    a++;
    if (a >= clients.length) a = 0;
    clients[a].classList.add("active");
}

setInterval(clientChange, 3000);

const up = document.querySelector("#up");
up.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const navbar = document.querySelector(".navbar")
const sections = document.querySelectorAll("section");
const about = document.querySelector("#about");
const navlinks = document.querySelectorAll(".navbar-menu li a");
let link = "";
window.onscroll = () => {
    if (window.scrollY >= 700) navbar.classList.add("active");
    else navbar.classList.remove("active");

    sections.forEach(sec => {
        if (window.scrollY > sec.offsetTop) {
            link = sec.getAttribute("id");
        }
    })
    navlinks.forEach(navlink => {
        navlink.classList.remove('selected');
        if (navlink.getAttribute("href") == "#" + link) {
            navlink.classList.add("selected");
        }
    })
}
