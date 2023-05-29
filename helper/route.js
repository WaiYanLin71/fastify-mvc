const route = {
    get(url, handler, schemea = {}) {
        return {
            method: 'GET',
            url,
            handler,
            schemea 
        }
    },
    post(url, handler, schemea = {}) {
        return {
            method: 'POST',
            url,
            handler,
            schemea
        }
    }
}

export default route