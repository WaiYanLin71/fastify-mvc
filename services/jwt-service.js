import * as jose from 'jose'

class JWTService {
    secret;
    data;
    token;
    constructor({ data = {}, secret, token = '' }) {
        this.token = token;
        this.secret = jose.base64url.decode(process.env.JWT_SECRET || secret)
        this.data = data;
    }

    async encrypt() {
        const jwt = await new jose.EncryptJWT(this.data)
            .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
            .setIssuedAt()
            .setIssuer('urn:example:issuer')
            .setAudience('urn:example:audience')
            .setExpirationTime('24h')
            .encrypt(this.secret)
        return jwt;
    }

    async decrypt() {
        const { payload, protectedHeader } = await jose.jwtDecrypt(this.token, this.secret, {
            issuer: 'urn:example:issuer',
            audience: 'urn:example:audience',
        })
        return { payload, protectedHeader }
    }
}

export default JWTService;