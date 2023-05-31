import user from './v1/user.js'
import auth from './v1/auth.js'
import csv from './v1/csv.js'

export default (fastify) => {
    fastify.register(auth, { prefix: 'v1/auth' })

    fastify.register((fastify, opts, done) => {
        fastify.addHook('preHandler', (req, reply, done) => {
            if(!reply.locals.auth?.user) {
                return reply.status(422).clearCookie('admin').redirect('/v1/auth/login')
            }
            done();
        })
        fastify.register(user, { prefix: 'v1/users' })
        fastify.register(csv, { prefix: 'v1/csv' })
        done();
    })
}
