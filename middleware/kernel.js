import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static';;
import ejs from 'ejs';
import path from 'path';
import { dirname, basename } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
import fastifyView from '@fastify/view'

export default (fastify) => {

    fastify.register(cors);

    fastify.register(fastifyCookie, {
        secret: "my-secret",
        parseOptions: {}
    })

    fastify.register(fastifyView, {
        engine: {
            ejs
        },
        root: path.resolve('views'),
        includeViewExtension: true,
    });
    fastify.register(fastifyStatic, {
        root: path.resolve('public'),
    })
    
    fastify.get('/',(req, reply) => reply.redirect('/v1/users'))
}
