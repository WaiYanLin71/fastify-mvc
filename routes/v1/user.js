import { create, destroy, index, store, update } from "../../controller/UserController.js"
import  validate from "../../validator/user/index.js";
import userStoreValidation from "../../validator/userStoreValidation.js"

export default (fastify, opts, done) => {
  fastify.addHook('preHandler', async (req, reply) => {  
    if (!req.cookies.admin) return reply.redirect('/v1/auth/login')
  });
  fastify.get('/', index)
  fastify.get('/create', create)
  fastify.post('/', { schema: userStoreValidation }, store)
  fastify.delete('/:id', destroy);
  fastify.patch('/:id', { schema: validate.updateUser } , update)
  done();
}