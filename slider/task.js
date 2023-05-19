let arrowNext = document.querySelector('.slider__arrow_next');
let arrowPrev = document.querySelector('.slider__arrow_prev');
let sliderDots = document.querySelectorAll('.slider__dot');
let buttons = document.querySelectorAll('.slider__arrow_next, .slider__arrow_prev, .slider__dot');
let sliderItems = document.querySelectorAll('.slider__item');


buttons.forEach.call(buttons, (button) => {
    button.addEventListener('click', () => {
        activeSlide = document.querySelector('.slider__item_active');
        activeSlide.classList.remove('slider__item_active');
        removeSliderDots();
        sliderDots[[].slice.call(sliderItems).indexOf(activeSlide)].classList.add('slider__dot_active');
    });
});

arrowNext.onclick = () => {
    if (activeSlide.nextElementSibling) {    
        activeSlide.nextElementSibling.classList.add('slider__item_active');
    } else {
        sliderItems[0].classList.add('slider__item_active');
    }
}

arrowPrev.onclick = () => {
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add('slider__item_active');
    } else {
        [].slice.call(sliderItems).pop().classList.add('slider__item_active');
    }
}

sliderDots.forEach.call(sliderDots, (dot) => {
    dot.addEventListener('click', () => {
        removeSliderDots();
        sliderItems[[].slice.call(sliderDots).indexOf(dot)].classList.add('slider__item_active');
    });
    
});

removeSliderDots = () => {
    sliderDots.forEach((dot) => {
        dot.classList.remove('slider__dot_active');
    }); 
}