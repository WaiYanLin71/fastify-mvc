import fastifyView from '@fastify/view'
import Fastify from 'fastify'
import connectDatabase from './database.js'
import v1UserRoute from './routes/v1/user.js'
import v1AuthRoute from './routes/v1/auth.js'
import fs from 'fs';
import ejs from 'ejs';
import path from 'path';
import fastifyStatic from '@fastify/static';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { StandaloneValidator } from '@fastify/ajv-compiler';
import ajvFormat from 'ajv-formats';
import * as dotenv from 'dotenv'
import fastifyCookie from '@fastify/cookie';
dotenv.config();



const __dirname = dirname(fileURLToPath(import.meta.url))
const factory = StandaloneValidator({
    readMode: false,
    storeFunction(routeOpts, schemaValidationCode) {
        fs.writeFileSync(path.join(__dirname, 'c.js'), schemaValidationCode)
    }
})

const fastify = Fastify({
    logger: true,
    ajv: {
        customOptions: {
            allErrors: true,
            formats: [[ajvFormat, { mode: 'fast' }]]
        },
    },
    schemaController: {
        compilersFactory: {
            buildValidator: factory
        }
    }
})

fastify.register(fastifyCookie, {
    secret: "my-secret", // for cookies signature
    hook: 'onRequest', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
    parseOptions: {}  // options for parsing cookies
})



fastify.register(fastifyView, {
    engine: {
        ejs
    },
    root: path.join(__dirname, 'public'),
    includeViewExtension: true,
});


fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
})

fastify.addHook('preHandler', function (req, reply, done) {
    reply.locals = {
        user: false // it will be available in all views
    }
    done()
})

fastify.register(v1UserRoute, { prefix: '/v1' })
fastify.register(v1AuthRoute, { prefix: '/v1' })


fastify.ready().then(() => {
    console.log('App is wating to connect database.')
})

fastify.setErrorHandler(function (error, request, reply) {

    if (error.validation) {
        const messages = error.validation.map((er) => {
            return {
                [(er.instancePath ? er.instancePath : er.params.missingProperty).replace('/', '')]: er.message
            }
        })
        return reply.status(422).send({ messages });
    }
    if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
        // Log error
        this.log.error(error)
        // Send error response
        reply.status(500).send({ ok: false })
    } else {
        // fastify will use parent error handler to handle this
        reply.send(error)
    }
})

const startServer = () => {
    fastify.listen({ port: 3000 }, function (err, address) {
        if (err) {
            // fastify.log.error(err)
            process.exit(1)
        }
    })
}

connectDatabase((error) => {
    if (!error) {
        startServer()
    } else {
        console.log(error)
    }
})
