document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(changeSlide, 2000);
});
