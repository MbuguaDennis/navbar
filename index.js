document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navList = document.querySelector('.main__nav__list');

    hamburgerIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});