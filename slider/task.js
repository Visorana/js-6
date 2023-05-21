let arrowNext = document.querySelector('.slider__arrow_next');
let arrowPrev = document.querySelector('.slider__arrow_prev');
let sliderDots = document.querySelectorAll('.slider__dot');
let sliderItems = document.querySelectorAll('.slider__item');


function showActiveSlide(index) {
    let currIndex = [...sliderItems].findIndex(slider =>
        slider.classList.contains('slider__item_active'));
    sliderItems[currIndex].classList.remove('slider__item_active');
    sliderDots[currIndex].classList.remove('slider__dot_active');
    if (index < 0) {
        index = sliderItems.length - 1;
    } else if (index > (sliderItems.length - 1)) {
        index = 0;
    }
    sliderItems[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

arrowNext.onclick = () => {
    currIndex = [...sliderItems].findIndex(slider =>
        slider.classList.contains('slider__item_active'));
    showActiveSlide(currIndex + 1);
}

arrowPrev.onclick = () => {
    currIndex = [...sliderItems].findIndex(slider =>
        slider.classList.contains('slider__item_active'));
    showActiveSlide(currIndex - 1);
}

sliderDots.forEach.call(sliderDots, (dot) => {
    dot.addEventListener('click', () => {
        showActiveSlide([...sliderDots].indexOf(dot));
    })
})