const updateUser = {
    body: {
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 5 },
            email: { type: "string", format: 'email' },
        },
        required: ['name', 'email'],
    }
}

export default { updateUser }
