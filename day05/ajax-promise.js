function get(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            resolve(req.responseText);
        };
        req.onerror = (err) => {
            reject(err);
        };
        req.open('get', url, true);
        req.send();
    })
}

module.exports = {
    'get': get,
};