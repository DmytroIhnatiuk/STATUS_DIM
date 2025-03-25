import dropdown from '../modules/dropdown.js'

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

		new Form('.form-add').init()
	} catch (e) {
		console.log(e)
	}
})
