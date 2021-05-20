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

//Email

//Listen for a click to submit
document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();

	//Get Input Values
	let email = document.querySelector('.email').value;
	let message = document.querySelector('.message').value;

	document.querySelector('.contact-form').reset();

	sendEmail(email, message);
}

//Send Email info
function sendEmail(email, message) {
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'tahjaecampbell15@gmail.com',
		Password: 'buksuglhbovlkyap',
		To: 'tahjaecampbell15@gmail.com',
		From: `${email}`,
		Subject: 'Feedback for Portfolio Website',
		Body: `Message: ${message}`
	}).then((message) => alert('Comment sent successfully'));
}
