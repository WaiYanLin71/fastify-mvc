import fastifyView from '@fastify/view'
import Fastify from 'fastify'
import connectDatabase from './database.js'
import userRoutes from './routes/user.js'
import ejs from 'ejs';
import path from 'path';
import fastifyStatic from '@fastify/static';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))

const fastify = Fastify({
    logger: true
})

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
  })

fastify.register(fastifyView, {
    engine: {
      ejs
    },
  });
  
fastify.register(function(app, _, done) {
    userRoutes.forEach((config) => {
        app.route(config)
    })
    done()
  }, { prefix: '/v1' }) 

connectDatabase((error) => {
    if (!error) {
        fastify.listen({ port: 3000 }, function (err, address) {
            if (err) {
                fastify.log.error(err)
                process.exit(1)
            }
        })
    } else {
        console.log(error)
    }
})
