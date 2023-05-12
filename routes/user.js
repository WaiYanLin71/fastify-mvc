import { create, index, store } from "../controller/UserController.js";
import route from "../helper/route.js";

export default [
    route.get('/users/create', create),
    route.post('/users', store),
    route.get('/users', index)
    // route.get('/users/:id', create),
]