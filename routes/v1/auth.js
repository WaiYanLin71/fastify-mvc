import { authenticated, login } from "../../controller/AuthController.js";

export default (fastify, opts, done) => {
    fastify.get('/auth/login', login)
    fastify.post('/auth/login', authenticated)
    done();
}