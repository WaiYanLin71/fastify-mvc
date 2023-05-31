import JWTService from "../services/jwt-service.js";

export const authenticated = async (req, reply) => {
    let user = false
    if (req.cookies?.admin) {
        const jwt = new JWTService({ token: req.cookies.admin })
        user = await jwt.decrypt()
            .then(res => res.payload)
            .catch(() => false);
            
    }
    reply.locals = {
        auth: {
            user
        },
        request: {
            query: req.query
        }
    }
}

export const isLogin = (req, reply, done) => {
    ;
    if (req.cookies.admin && req.method === 'GET') return reply.redirect('/v1/users')
    done();
}