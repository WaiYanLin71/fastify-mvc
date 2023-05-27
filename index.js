import Fastify from 'fastify'
import fs from 'fs';
import connectDatabase from './database.js'
import * as dotenv from 'dotenv'
import AjvComplier, { StandaloneValidator } from '@fastify/ajv-compiler';
import ajvFormat from 'ajv-formats';
import router from './routes/index.js';
import kernel from './middleware/kernel.js';
import errorHandler from './exception/errorHandler.js';
dotenv.config();
const factoryValidator = AjvComplier()
const factorySerializer = AjvComplier({ jtdSerializer: true })
global.mix = (path) => {
    const versionFile = JSON.parse(fs.readFileSync('./mix-manifest.json'))
    return versionFile[path].replace(/^\/public/, '');
}

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
            buildValidator: factoryValidator,
            buildSerializer: factorySerializer
        }
    }
})

kernel(fastify)
router(fastify)
errorHandler(fastify)(Fastify)

const startServer = () => {
    fastify.listen({ port: 3000 }, function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        } else console.log('App is running at port 3000')
    })
}

connectDatabase((error) => {
    if (!error) startServer()
    else console.log(error)
})

// import Ajv from 'ajv';
// import fs from 'fs';
// const ajv = new Ajv({
//     removeAdditional: 'all',
//     useDefaults: true,
//     coerceTypes: 'array',
//     // any other options
//     // ...
// })

// const factory = StandaloneValidator({
//     readMode: false,
//     storeFunction(routeOpts, schemaValidationCode) {
//         fs.writeFileSync(path.join(__dirname, 'c.js'), schemaValidationCode)
//     }
// })

// fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
//     return ajv.compile(schema)
// })
