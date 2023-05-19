let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modals = document.querySelectorAll('.modal');
let modalsClose = document.querySelectorAll('.modal__close');
let showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

showSuccess.addEventListener('click', () => {
    modalSuccess.classList.add('modal_active');
});

modalsClose.forEach.call(modalsClose, (button) => {
    button.addEventListener('click', () => {
        modals.forEach((modal) => {
            modal.classList.remove('modal_active');
        });
    });
});