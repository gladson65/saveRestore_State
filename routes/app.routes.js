import { saveState } from "../controllers/app.controllers.js";

function appRoute(app) {
    app.post('/save', saveState)
}

export default appRoute;