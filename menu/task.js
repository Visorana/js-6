let menuLinks = document.querySelectorAll('.menu__link');
let menuSubs = document.querySelectorAll('.menu_sub');

menuLinks.forEach.call(menuLinks, (menuLink) => {
    menuLink.addEventListener('click', (e) => {
        hasNextSibling = menuLink.nextElementSibling;
        if (hasNextSibling && hasNextSibling.classList.contains('menu_active')) {
            e.preventDefault();
            hasNextSibling.classList.remove('menu_active');
        } else if (hasNextSibling) {
            e.preventDefault();
            menuSubs.forEach((sub) => {
                sub.classList.remove('menu_active');
            }); 
            e.preventDefault();
            hasNextSibling.classList.add('menu_active');
        } else {
            menuSubs.forEach((sub) => {
                sub.classList.remove('menu_active');
            }); 
        } 
    });
});