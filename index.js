const menu = document.getElementById('menu');
const navLinks = document.querySelector('.navigation__links');
const close = document.getElementById('close');


const openMenu = () => {
    menu.style.display = 'none';
    close.style.display = 'block';
    navLinks.style.display = 'flex';
    navLinks.classList.remove('menu-closed');
    navLinks.classList.add('menu-opened');
    body.classList.add('blur');
};

const closeMenu = () => {
    menu.style.display = 'block';
    close.style.display = 'none';
    navLinks.classList.remove('menu-opened');
    navLinks.classList.add('menu-closed');
    body.classList.remove('blur');
};

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

// Fetch data from the JSON file
