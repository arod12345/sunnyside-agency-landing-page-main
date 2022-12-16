const hamburger = document.querySelector('.ham');
const nav = document.querySelector('.navigation');
const closeNav = document.querySelector('.close');


hamburger.addEventListener('click', () => {
    nav.style.display = 'flex';
    closeNav.style.display = 'block';
    closeNav.style.zIndex = '9999';
    hamburger.style.display = 'none';
    nav.style.transition = '1s ease-out';
});

closeNav.addEventListener('click', () => {
    nav.style.display = 'none';
    hamburger.style.display = 'block';
    closeNav.style.display = 'none';
});