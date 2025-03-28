import {
	advantages,
	projects,
	project,
	sliderProjectLg,
	sliderMorePhoto,
} from '../modules/sliders.js'
import Form from '../modules/Form.js'
import initTabs from '../modules/tabs.js'

window.addEventListener('DOMContentLoaded', () => {
	try {
		projects()
		advantages()
		project()
		sliderProjectLg()
		initTabs()
		sliderMorePhoto()
		new Form('.form-add').init()
		new Form('.form-calc').init()
	} catch (e) {
		console.log(e)
	}
})
