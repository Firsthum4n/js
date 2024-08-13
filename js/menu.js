const button = document.querySelector('.button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    button.classList.toggle('active')
    menu.classList.toggle('active')
    button.setAttribute('aria-expanded', button.classList.contains('active') ? 'true' : 'false')
});
