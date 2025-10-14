import { saveState, getData } from "../controllers/app.controllers.js";

function appRoute(app) {
    app.post('/save', saveState),
    app.get('/user/:id', getData)
}

export default appRoute;