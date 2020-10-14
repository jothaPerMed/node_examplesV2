'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _home = require('./routes/home.js');

var _home2 = _interopRequireDefault(_home);

var _user = require('./routes/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    app.use('/', _home2.default);
    app.use('/', _user2.default);
};