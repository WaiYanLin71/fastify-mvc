const userStoreValidation = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 5 },
            email: { type: "string", format: 'email' },
            password: { type: 'string', minLength: 10 },
        },
        required: ['name', 'email', 'password'],
    }
}

export default userStoreValidation