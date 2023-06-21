const form = document.querySelector('.container__form');
const input = document.querySelector('.container__input');
const btn = document.querySelector('.container__btn');
const feedback = document.querySelector('.feedback');

form?.addEventListener('submit', e => {
	e.preventDefault();

	validateEmail();

	function validateEmail() {
		if (input.value === '') {
			feedback.innerHTML = "You did'nt add your email";

			input.style.borderColor = 'crimson';
			feedback.style.display = 'block';
			return false;
		} else if (
			!input?.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
		) {
			const html = `
     Please provide a valid email address
    `;

			feedback.innerHTML = html;
			feedback.style.display = 'block';
			input.style.borderColor = 'crimson';
			return true;
		} else {
			feedback.innerHTML = '';

			input.style.borderColor = 'lime';
			return true;
		}
	}
});
