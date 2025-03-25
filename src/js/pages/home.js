import {
	advantages,
	projects,
	project,
	sliderProjectLg,
	sliderMorePhoto,
} from '../modules/sliders.js'
import initYoutube from '../modules/initYoutube.js'
import Form from '../modules/Form.js'
import initTabs from '../modules/tabs.js'

window.addEventListener('DOMContentLoaded', () => {
	try {
		projects()
		advantages()
		project()
		initYoutube()
		sliderProjectLg()
		initTabs()
		sliderMorePhoto()

		new Form('.form-add').init()
	} catch (e) {
		console.log(e)
	}
})
