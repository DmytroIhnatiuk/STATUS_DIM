import { advantages } from '../modules/sliders.js'
import accordion from '../modules/accordion.js'

window.addEventListener('DOMContentLoaded', () => {
	try {
		advantages()

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
			}, 200)
		}

		initAccordionOnSmallScreens()
		window.addEventListener('resize', handleResize)
	} catch (e) {
		console.log(e)
	}
})
