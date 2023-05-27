import v1UserRoute from './v1/user.js'
import v1AuthRoute from './v1/auth.js'
import { decryptToken } from '../helper/jwt.js';

export default (fastify) => {
    fastify.get('/', (req, reply) => {
        return reply.redirect('/v1/users')
    });
    fastify.addHook('preHandler', async (req, reply) => {
        let user = false;
        if ((/^\/v1\/(?!auth\b)[^/]+$/).test(req.url)) {
            if (req.cookies?.admin) {
                try {
                    user = await decryptToken(req.cookies.admin)
                } catch (error) {
                    await reply.status(400)
                        .clearCookie('admin')
                        .redirect('/v1/auth/login')
                }
            }
        }
        reply.locals = {
            user,
            request: {
                query: req.query
            }
        }
    })

    fastify.register(v1UserRoute, { prefix: 'v1/users' })
    fastify.register(v1AuthRoute, { prefix: 'v1/auth' })
}
