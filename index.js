const nameInput = document.querySelector('input[name="name"]')
const form = document.querySelector('form')
const thankYou = document.querySelector('.thank-you')

let isFormValid = false;

const validateInputs = () => {
    nameInput.classList.remove('invalid');
    nameInput.nextElementSibling.classList.add('hidden')
    isFormValid = true;
    if(!nameInput.value) {
        nameInput.classList.add('invalid')
        nameInput.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove('hidden')
    }
} )

nameInput.addEventListener('input', () => {
    validateInputs();
})