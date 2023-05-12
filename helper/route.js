const route = {
    get(url, handler, scheme = {}) {
        return {
            method: 'GET',
            url,
            handler,
            scheme
        }
    },
    post(url, handler, scheme = {}) {
        return {
            method: 'POST',
            url,
            handler,
            scheme
        }
    }
}

export default route