import dropdown from '../modules/dropdown.js'
import accordion from '../modules/accordion.js'
import { project } from '../modules/sliders.js'

window.addEventListener('DOMContentLoaded', () => {
	const filterBtn = document.querySelector('.filter-btn')
	const filterBlocks = document.querySelectorAll(
		'.filter-btn, .projects-filter'
	)

	if (window.innerWidth < 1024) {
		filterBtn.addEventListener('click', function () {
			filterBlocks.forEach(block => block.classList.toggle('active'))
		})
	}

	try {
		dropdown()
		accordion('.accordion', '.accordion-header', '.accordion-content')
		project()
	} catch (e) {
		console.log(e)
	}
})
