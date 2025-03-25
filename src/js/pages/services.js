import accordion from '../modules/accordion.js'

window.addEventListener('DOMContentLoaded', () => {
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
