var modalBtn = document.querySelector('#front-btn');
var modalBg = document.querySelector('.fmodal-bg');
var modalClose = document.querySelector('.fmodal-close');

modalBtn.addEventListener('click', function () {
	// alert("here1");
	modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function () {
	// alert("here2");
	modalBg.classList.remove('bg-active');
});

window.onclick = function (event) {
	// alert("here3");
	if (event.target == modalBg) {
		modalBg.classList.remove('bg-active');
		e.preventDefault();
		return;
	}
};