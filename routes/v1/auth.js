import { authenticated, login } from "../../controller/AuthController.js";

export default (fastify, opts, done) => {
    fastify.addHook('preHandler', async (req, reply) => {  
        if (req.cookies.admin) {
            await reply.redirect('/v1/users')
        }
      });
    fastify.get('/auth/login', login)
    fastify.post('/auth/login', authenticated)
    done();
}