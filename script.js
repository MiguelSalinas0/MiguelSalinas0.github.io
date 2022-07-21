const hamburgerMenu = document.querySelector('.navbar-toggler');
const menuIsActive = () => {
	hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)

$(document).ready(function () {
	$('.ir-arriba').click(function () {
		$('body, html').animate({
			scrollTop: '0px'
		}, 250);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.ir-arriba').slideDown(250);
		} else {
			$('.ir-arriba').slideUp(250);
		}
	});
});