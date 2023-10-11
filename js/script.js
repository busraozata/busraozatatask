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
        var productImage = slider.querySelector('.product-image');

       
        colorOptions.forEach(function (radio) {
            if (radio.checked) {
                changeImage(radio);
            }
            radio.addEventListener('change', function () {
                changeImage(this);
            });
            radio.addEventListener('mouseover', function () {
                if (!radio.checked) {
                    radio.checked = true;
                    changeImage(radio, productImage);
                }
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

document.addEventListener("DOMContentLoaded", function () {
    var accordionTitles = document.querySelectorAll(".accordion-title");

    accordionTitles.forEach(function (title) {
        title.addEventListener("click", function () {
            var content = title.nextElementSibling;
            var icon = title.querySelector("i");

            if (content.style.display === "block") {
                content.style.display = "none";
                icon.classList.remove("fa-caret-up");
                icon.classList.add("fa-caret-down");
            } else {
                var allContents = document.querySelectorAll(".accordion-content");
                var allIcons = document.querySelectorAll(".accordion-title i");

                allContents.forEach(function (item) {
                    item.style.display = "none";
                });

                allIcons.forEach(function (item) {
                    item.classList.remove("fa-caret-up");
                    item.classList.add("fa-caret-down");
                });

                content.style.display = "block";
                icon.classList.remove("fa-caret-down");
                icon.classList.add("fa-caret-up");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    var header = document.querySelector("#header");

    var headroom = new Headroom(header, {
        tolerance: {
            down: 5,
            up: 5
        },
        offset: 200
    });

    headroom.init();

});




document.addEventListener("click", (evnt) => {
    if (evnt.target?.closest?.('a[href^="#/"]')) {
        evnt.preventDefault();
        alert("Thank you for clicking, but that's a demo link.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    new Mmenu("#menu-area", { slidingSubmenus: false }, {});
});