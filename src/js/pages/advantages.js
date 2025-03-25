import {advantages} from "../modules/sliders.js";

import Form from "../modules/Form.js";

window.addEventListener('DOMContentLoaded', () => {
    try {
        advantages()
    } catch (e) {
        console.log(e)
    }
})