const hamburgerMenu = document.querySelector('.navbar-toggler');
const menuIsActive = () => {
	hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)