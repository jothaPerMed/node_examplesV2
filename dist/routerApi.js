'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('./routes/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
    app.use('/auth', _auth2.default);
    app.use('/user', _user2.default);
};