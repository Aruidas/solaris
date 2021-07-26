const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("open");
}


const sections = document.querySelectorAll(".anchor");
const listItems = document.querySelectorAll("#nav-menu li");

window.addEventListener("scroll", ()=> {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - 50) { // -X: offset, to highlight links earlier
            currentSection = section.getAttribute("id");
        }
    })

    listItems.forEach(li => {
        li.classList.remove("current");
        if(li.firstElementChild.getAttribute("href") == "#"+currentSection) {
            li.classList.add("current");
        }
    })
})

function closeMobileMenu() {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("open");
}