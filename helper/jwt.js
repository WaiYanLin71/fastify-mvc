import * as jose from 'jose'

export const createToken = async (data) => {
    const secret = jose.base64url.decode(process.env.JWT_SECRET.toString())
    const jwt = await new jose.EncryptJWT(data)
        .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('24h')
        .encrypt(secret)

    return jwt;
}


export const decryptToken = async (jwt) => {
    const secret = jose.base64url.decode(process.env.JWT_SECRET.toString())
    
    const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secret, {
        issuer: 'urn:example:issuer',
        audience: 'urn:example:audience',
    })

    return { payload, protectedHeader }
}