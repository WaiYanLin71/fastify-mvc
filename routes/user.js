import { create } from "../controller/UserController.js";

const createUser = {
    method: 'GET',
    url:'/users/create',
    handler: create,
    scheme:{},
}

export default [
    createUser
]