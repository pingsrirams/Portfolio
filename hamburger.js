// Hamburger Menu Open & Close
var menuIcon = document.querySelector('.menu-toggler');
var navbar = document.querySelector('.top-nav');
// var navLinks = document.querySelector('.nav-link');

menuIcon.addEventListener('click', function () {
	// alert('here1');
	this.classList.toggle('open');
	navbar.classList.toggle('open');
});
navbar.addEventListener('click', function () {
	// alert('here2');
	menuIcon.classList.remove('open');
	navbar.classList.remove('open');
	// navLinks.display = none;
});