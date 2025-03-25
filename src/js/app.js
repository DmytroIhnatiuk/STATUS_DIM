import { getElement, getElements } from './core/index.js'

window['FLS'] = true
// Підключення основного файлу стилів
import '../scss/style.scss'
import * as flsFunctions from './core/functions.js'
import { scrollToAnchor } from './modules/scrollToAnchor.js'
import { headerFixed } from './modules/index.js'
import burger from './modules/burger.js'
import accordion from './modules/accordion.js'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import 'swiper/css/thumbs'
import AOS from 'aos'
import modalsEvents from './modules/modalsEvents.js'
import { aboutSlider } from './modules/sliders.js'
import Form from './modules/Form.js'
import { modal } from './modules/modal.js'
import './libs/dynamic_adapt.js'

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp()
/* Додавання класу touch для HTML якщо браузер мобільний */
flsFunctions.addTouchClass()
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();

/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
flsFunctions.fullVHfix()

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// accordion('.accordion', '.accordion-header', '.accordion-content')
accordion('.accordion', '.accordion-header', '.accordion-content')
window.addEventListener('DOMContentLoaded', () => {
	try {
		AOS.init({
			once: true,
		})
		scrollToAnchor()
		headerFixed()
		burger()
		aboutSlider()
		initTabs()
		getElements('[data-modal]').forEach(el => {
			el.addEventListener('click', e => {
				modalsEvents(el)
				modal.openModal()
			})
		})
		new Form('.form-footer').init()
		if (getElement('.form')) {
			new Form('.form').init()
		}
	} catch (e) {
		console.log(e)
	}
	try {
		let accordionInitialized = false
		let resizeTimeout

		function initAccordionOnSmallScreens() {
			if (window.innerWidth < 640 && !accordionInitialized) {
				accordion(
					'.accordion-services',
					'.accordion-header',
					'.accordion-content'
				)
				accordionInitialized = true
			} else if (window.innerWidth >= 640) {
				accordionInitialized = false
			}
		}

		function handleResize() {
			clearTimeout(resizeTimeout)
			resizeTimeout = setTimeout(() => {
				document.querySelectorAll('.accordion-content').forEach(content => {
					content.style.maxHeight = null
				})
				initAccordionOnSmallScreens()
			}, 200) // Оптимизация для предотвращения лишних вызовов
		}

		initAccordionOnSmallScreens()
		window.addEventListener('resize', handleResize)
	} catch (e) {
		console.log(e)
	}
})
