document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const mainContent = document.querySelector('.main');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    const menuItems = document.querySelectorAll('.menu-list li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    const colorItems = document.querySelectorAll('.colors .item');
    colorItems.forEach(colorItem => {
        colorItem.addEventListener('click', () => {
            colorItems.forEach(item => item.classList.remove('active'));
            colorItem.classList.add('active');
        });
    });

    const carouselItems = document.querySelectorAll('.colors .item');
    carouselItems.forEach(carouselItem => {
        const images = carouselItem.querySelectorAll('.additional-info img');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active');
        }

        carouselItem.addEventListener('click', () => {
            showNextImage();
        });
    });
});
