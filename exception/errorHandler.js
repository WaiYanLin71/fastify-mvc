export default (fastify) => {
    return (Fastify) => {
        fastify.setErrorHandler((error, request, reply) => {
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
                // console.log(error.message)
                // Send error response
                reply.status(500).send({ ok: false })
            } else {
                // fastify will use parent error handler to handle this
                reply.send(error)
            }
            console.log(error)
        });
    }
};