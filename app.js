const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('open');
}


const sections = document.querySelectorAll('.anchor');
const listItems = document.querySelectorAll('#nav-menu li');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 175) { // -X: offset, to highlight links earlier
            currentSection = section.getAttribute('id');
        }
    })

    listItems.forEach(li => {
        li.classList.remove('current');
        if(li.firstElementChild.getAttribute('href') == '#'+currentSection) {
            li.classList.add('current');
        }
    })
})


function closeMobileMenu() {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.remove('open');
}


function expandText() {
    this.style.display = 'none';
    this.nextElementSibling.style.display = 'block';
}

function toggleTheme() {
    if(this.firstElementChild.classList.contains('fa-moon')) {
        this.firstElementChild.classList.remove('fa-moon');
        this.firstElementChild.classList.add('fa-sun');
        document.documentElement.style.setProperty('--colorLight', '#00072b');
        document.documentElement.style.setProperty('--colorDark', '#ffd800');
    } else {
        this.firstElementChild.classList.remove('fa-sun');
        this.firstElementChild.classList.add('fa-moon');
        document.documentElement.style.setProperty('--colorLight', '#fff');
        document.documentElement.style.setProperty('--colorDark', '#131313');
    }
}