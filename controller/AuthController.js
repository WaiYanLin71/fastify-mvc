export const login = (req, reply) => {
    return reply.view('auth/login')
}

export const authenticated = (req, reply) => {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_USER_EMAIL;
    const adminPassword = process.env.ADMIN_USER_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
        return reply.cookie('admin', adminEmail, {
            httpOnly: true,
            path: '/',
        }).status(200)
            .send({ messages: 'success' })
    }
    return reply.status(422).send({ mseeages: 'fail' })

}   