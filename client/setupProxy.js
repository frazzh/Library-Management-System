const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api',
        {
            target: 'http://3.238.17.119:5000/',
            secure: false
        }
    ));
}