import { create, destroy, index, store } from "../../controller/UserController.js"
import userStoreValidation from "../../validator/userStoreValidation.js"

export default (fastify, opts, done) => {
  fastify.addHook('preHandler', async (req, reply) => {  
    if (!req.cookies.admin) {
       await reply.redirect('/v1/auth/login')
    }
  });
  fastify.get('/', index)
  fastify.get('/create', create)
  fastify.post('/', { schema: userStoreValidation }, store)
  fastify.delete('/:id', destroy)
  done();
}