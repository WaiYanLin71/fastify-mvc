import { create, destroy, index, store } from "../../controller/UserController.js"
import userStoreValidation from "../../validator/userStoreValidation.js";

export default (fastify, opts, done) => {
  fastify.addHook('onRequest', (req, reply, done) => {  
    console.log(req.cookies)
    if (!req.cookies.admin) {
      return reply.redirect('/v1/auth/login')
    }
    done();
  });
  fastify.get('/users', index)
  fastify.get('/users/create', create)
  fastify.post('/users', { schema: userStoreValidation }, store)
  fastify.delete('/users/:id', destroy)
  done();
}