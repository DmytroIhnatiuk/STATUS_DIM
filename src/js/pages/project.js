import {
	sliderProjectLg,
	sliderMorePhoto,
	project,
	projects,
} from '../modules/sliders.js'
import accordion from '../modules/accordion.js'
import initTabs from '../modules/tabs.js'

window.addEventListener('DOMContentLoaded', () => {
	try {
		accordion('.accordion', '.accordion-header', '.accordion-content')
		project()
		projects()
		sliderProjectLg()
		sliderMorePhoto()
		initTabs()
	} catch (e) {
		console.log(e)
	}
})
