var swiper = new Swiper(".mySwiper", {

    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 0,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    spaceBetween: 10,
    mousewheelControl: true,
    centeredSlides: false,
    mousewheel: {
        enabled: true,
        sensitivity: 4,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            spaceBetween: 30,

        },
    },
});

window.onload = function () {
    initializeSlider(1); // 1. swiper-slide için başlangıç işlemi
    initializeSlider(2); // 2. swiper-slide için başlangıç işlemi
    initializeSlider(3); // 3. swiper-slide için başlangıç işlemi
    initializeSlider(4); // 4. swiper-slide için başlangıç işlemi
}

function initializeSlider(sliderNumber) {
    var slider = document.querySelector('.swiper-slide:nth-child(' + sliderNumber + ')');
    if (slider) {
        var colorOptions = slider.querySelectorAll('input[name="color"]');
        colorOptions.forEach(function (radio) {
            if (radio.checked) {
                changeImage(radio);
            }
            radio.addEventListener('change', function () {
                changeImage(this);
            });
        });
    }
}

function changeImage(radio) {
    var newSrc = radio.value;
    var productImage = radio.closest('.swiper-slide').querySelector('.product-image');
    if (productImage) {
        productImage.src = newSrc;
    } else {
        console.error("Ürün resmi bulunamadı.");
    }
}

