window.sr = ScrollReveal();
sr.reveal('.animate', { duration: 700 });

var mobileMenu = document.querySelector('.mobile-menu-popup');	
document.querySelector('.header-menu-link').addEventListener('click', function() {
	mobileMenu.classList.add('open');
});

document.querySelector('.mobile-menu-popup-close').addEventListener('click', function() {
	mobileMenu.classList.remove('open');
});