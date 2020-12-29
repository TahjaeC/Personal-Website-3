// Scroll Effect for Navigation Bar
window.addEventListener("scroll", function () {
	let header = document.querySelector("nav");
	let PageScroll = window.scrollY > 10;
	header.classList.toggle("scrolling", PageScroll);
});
