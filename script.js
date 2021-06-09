
// Selectors
const btnScrollTo = document.querySelector('.hero__icon-scroll');
const btnNotify = document.querySelector('.notify__btn');
const notifyForm = document.querySelector('.notify');
const notifyEmail = document.querySelector('.notify__email');
const notifyStatus = document.querySelector('.notify__status');
const footer = document.querySelector('.footer');

// State
let notifyClicked = false;

// Functions
const validEmail = mail => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/.test(mail);

const validateEmail = function() {
    if (!validEmail(notifyEmail.value)) {
        if (!notifyClicked) return;
        notifyEmail.classList.add('invalid');
        notifyEmail.classList.remove('valid');

        notifyStatus.textContent = notifyEmail.value ? 'Oops! That doesn\'t look like an email address' : 'Oops! Please add your email';
        notifyStatus.classList.remove('notify__status--hidden');
    }
    else {
        notifyEmail.classList.remove('invalid')
        notifyEmail.classList.add('valid')
        notifyStatus.classList.add('notify__status--hidden');
    }
}

// Event listeners
btnScrollTo.addEventListener('click', e => {
    e.preventDefault();
    footer.scrollIntoView({behavior: 'smooth'});
});

btnNotify.addEventListener('click', e => {
    e.preventDefault();
    notifyClicked = true;
    
    if (validEmail(notifyEmail.value)) {
        notifyForm.remove();
        footer.insertAdjacentHTML('beforeend', `<p class="notify__submitted">Email is registered. Thank you!</p>`)
    }
    else {
        validateEmail();
    }
})

notifyEmail.addEventListener('keyup', validateEmail);