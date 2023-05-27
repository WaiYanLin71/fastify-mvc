import { createToken } from "../helper/jwt.js";

export const login = (req, reply) => {
    return reply.view('auth/login')
}

export const authenticated = async (req, reply) => {
    const { email, password } = req.body;
    const adminEmail = process.env.ADMIN_USER_EMAIL;
    const adminPassword = process.env.ADMIN_USER_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
        const token = await createToken({ email, password });
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 24);
        await reply.cookie('admin', token, {
            httpOnly: true,
            path: '/',
            secure: true,
            expires: expirationDate,
        }).status(200)
            .send({ messages: 'success' })
    }
    await reply.status(422).send({ mseeages: 'fail' })
}

export const logout = async (req, reply) => {
    try {
        await reply.clearCookie('admin')
            .status(200)
            .send({ messages: 'success' })
    } catch (error) {
        console.log(error)
    }
} 