import user from './v1/user.js'
import auth from './v1/auth.js'
import csv from './v1/csv.js'
import { decryptToken } from '../helper/jwt.js';

export default (fastify) => {
    fastify.addHook('preHandler', async (req, reply) => {
        let user = false;
        if ((/^\/v1\/(?!auth\b)[^/].*$/).test(req.url)) {
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
            auth:{
                user
            },
            request: {
                query: req.query
            }
        }
    })
    fastify.register(user, { prefix: 'v1/users' })
    fastify.register(auth, { prefix: 'v1/auth' })
    fastify.register(csv, {prefix: 'v1/csv' })
}
