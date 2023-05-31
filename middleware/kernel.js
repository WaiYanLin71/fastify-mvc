import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static';;
import ejs from 'ejs';
import path from 'path';
import { dirname, basename } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))
import fastifyView from '@fastify/view'
import { authenticated } from './authMiddleware.js';

export default (fastify) => {

    fastify.register(cors).register(fastifyCookie, {
        secret: "my-secret",
        parseOptions: {}
    }).register(fastifyView, {
        engine: {
            ejs
        },
        root: path.resolve('views'),
        includeViewExtension: true,
    }).register(fastifyStatic, {
        root: path.resolve('public'),
    }).addHook('preHandler', authenticated)
        .get('/', (req, reply) => reply.redirect('/v1/users'))
}
