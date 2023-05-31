import { authenticated, login, logout } from "../../controller/AuthController.js";

export default (fastify, opts, done) => {
    fastify.addHook('preHandler', (req, reply, done) => {
        if(reply.locals.auth?.user && req.method == 'GET') return reply.redirect('/v1/users')
        done();
    })
    
    fastify.get('/login', login)
    fastify.post('/login', authenticated)
    fastify.post('/logout', logout)
    done();
}