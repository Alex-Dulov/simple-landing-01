import Swiper from "swiper";
import SwiperCore, {Navigation, Scrollbar, Pagination, Autoplay} from "swiper/core";
import { Fancybox } from "@fancyapps/ui";

SwiperCore.use([Navigation, Scrollbar, Pagination, Autoplay]);

new Swiper(".js-steps-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    watchOverflow: true,
    navigation: {
        nextEl: ".js-steps-next",
        prevEl: ".js-steps-prev",
    },
    pagination: {
        el: ".js-steps-pagination",
        clickable: true,
    },
    breakpoints: {
        1096: {
            slidesPerView: 5,
        },
    },
});

new Swiper(".js-members-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".js-members-next",
        prevEl: ".js-members-prev",
    },
    pagination: {
        el: ".js-members-pagination",
        type: "fraction",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1096: {
            slidesPerView: 3,
        },
    },
});


new Swiper(".js-archive-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".js-archive-next",
        prevEl: ".js-archive-prev",
    },
    pagination: {
        el: ".js-archive-pagination",
        type: "fraction",
    },
});

Fancybox.defaults.l10n = {
    CLOSE: "Закрыть",
    NEXT: "Далее",
    PREV: "Назад",
    MODAL: "Вы можете закрыть это модальное содержимое с помощью клавиши ESC",
    ERROR: "Что-то пошло не так, повторите попытку позже",
    IMAGE_ERROR: "Изображение не найдено",
    ELEMENT_NOT_FOUND: "Элемент HTML не найден",
    AJAX_NOT_FOUND: "Ошибка загрузки AJAX: не найдено",
    AJAX_FORBIDDEN: "Ошибка загрузки AJAX: запрещено",
    IFRAME_ERROR: "Ошибка загрузки страницы",
    TOGGLE_ZOOM: "Переключить уровень масштабирования",
    TOGGLE_THUMBS: "Переключить миниатюры",
    TOGGLE_SLIDESHOW: "Включить слайд-шоу",
    TOGGLE_FULLSCREEN: "Включить полноэкранный режим",
    DOWNLOAD: "Скачать",
    ITERATEZOOM: "Переключить уровень масштабирования",
};

Fancybox.bind("[data-fancybox='gallery']", {
});
