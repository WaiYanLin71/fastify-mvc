import { authenticated, login, logout } from "../../controller/AuthController.js";

export default (fastify, opts, done) => {
    fastify.addHook('preHandler', async (req, reply) => { 
        if (req.cookies.admin && req.url === '/v1/auth/login') {
            await reply.redirect('/v1/users')
        }
      });
    fastify.get('/auth/login', login)
    fastify.post('/auth/login', authenticated)
    fastify.post('/auth/logout', logout)
    done();
}