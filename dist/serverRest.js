'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routerApi = require('./routerApi');

var _routerApi2 = _interopRequireDefault(_routerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _server;
const server = {
    start() {
        const app = (0, _express2.default)();
        (0, _config2.default)(app);

        //============Rutas
        (0, _routerApi2.default)(app);
        //========End Rutas


        _server = app.listen('9000', () => {
            if (process.env.NODE_ENV !== 'test') {
                console.log("SERVER API IS RUN--->>>");
            }
        });
    },
    close() {
        _server.close();
    }
};
exports.default = server;

if (!module.parent) {
    server.start();
}