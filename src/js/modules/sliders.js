import Swiper from 'swiper'
import {
	Autoplay,
	Navigation,
	Pagination,
	EffectFade,
	Thumbs,
} from 'swiper/modules'
import { getElement, getElements } from '../core/index.js'

function advantages() {
	if (!getElement('[data-swiper="advantages"]')) return
	function updateSwiperSlides() {
		// Знаходимо контейнер .swiper-wrapper всередині секції .advantages
		const wrapper = document.querySelector('.advantages .swiper-wrapper')
		if (!wrapper) return // Перевірка наявності елемента

		const slides = wrapper.children

		if (window.innerWidth < 1024) {
			// Додаємо клас .swiper-slide при ширині менше 1024px
			Array.from(slides).forEach(slide => {
				slide.classList.add('swiper-slide')
			})
		} else {
			// Видаляємо клас .swiper-slide при ширині 1024px або більше
			Array.from(slides).forEach(slide => {
				slide.classList.remove('swiper-slide')
			})
		}
	}

	new Swiper('[data-swiper="advantages"]', {
		modules: [Navigation],
		slidesPerView: 1,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
			},
		},
		loop: true,
		navigation: {
			nextEl: '.advantages-next',
			prevEl: '.advantages-prev',
		},
	})
	updateSwiperSlides()
	window.addEventListener('resize', updateSwiperSlides)
}
function aboutSlider() {
	if (!getElement('[data-swiper="aboutSlider"]')) return
	new Swiper('[data-swiper="aboutSlider"]', {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
		loop: true,
		navigation: {
			nextEl: '.aboutSlider-next',
			prevEl: '.aboutSlider-prev',
		},
	})
}

function projects() {
	if (!getElement('[data-swiper="projects"]')) return
	new Swiper('[data-swiper="projects"]', {
		modules: [Navigation],
		slidesPerView: 1.2,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 1.8,
			},
			1024: {
				slidesPerView: 3,
			},
		},

		navigation: {
			nextEl: '.projects-next',
			prevEl: '.projects-prev',
		},
	})
}

function project() {
	if (!getElement('[data-swiper="project"]')) return
	new Swiper('[data-swiper="project"]', {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 20,
		allowTouchMove: false,
		navigation: {
			nextEl: '.project-next',
			prevEl: '.project-prev',
		},
	})
}

function sliderMorePhoto() {
	if (!getElement('[data-swiper="sliderMorePhoto"]')) return
	new Swiper('[data-swiper="sliderMorePhoto"]', {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
		},
		pagination: {
			el: '.sliderMorePhoto-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.sliderMorePhoto-next',
			prevEl: '.sliderMorePhoto-prev',
		},
	})
}

function sliderProjectLg() {
	if (!getElement('[data-swiper="sliderProjectLg"]')) return
	const sliderNav = new Swiper('[data-swiper="sliderProjectLgNav"]', {
		slidesPerView: 4,
		spaceBetween: 10,
	})

	new Swiper('[data-swiper="sliderProjectLg"]', {
		modules: [Navigation, Thumbs],
		slidesPerView: 1,
		spaceBetween: 20,

		navigation: {
			nextEl: '.sliderProjectLg-next',
			prevEl: '.sliderProjectLg-prev',
		},
		thumbs: {
			swiper: sliderNav,
		},
	})
}

export {
	projects,
	advantages,
	aboutSlider,
	project,
	sliderProjectLg,
	sliderMorePhoto,
}
