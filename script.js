//Navigation Scroll
const nav = document.querySelector('nav');
const firstSection = document.querySelector('.landing-info');

const sectionOneOptions = {
	rootMargin: '-700px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(function (
	entries,
	sectionOneObserver
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			nav.classList.add('nav-on-scroll');
		} else {
			nav.classList.remove('nav-on-scroll');
		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(firstSection);

//Navigation Menu
const toggleNav = document.getElementById('toggle-btn');
const navLinks = document.getElementById('dropdown');
const navLink = document.getElementById('link');

function nameToggle() {
	navLinks.classList.toggle('active');
	if (toggleNav.name === 'menu-outline') {
		toggleNav.name = 'close-outline';
	} else if (toggleNav.name === 'close-outline') {
		toggleNav.name = 'menu-outline';
	}
}

toggleNav.addEventListener('click', nameToggle);
