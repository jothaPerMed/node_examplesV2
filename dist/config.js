'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// npm i --save cors
//npm i --save body-parser
const SETTINGS = (0, _dotenv.config)();

//console.log(SETTINGS)

//npm i --save dotenv

//npm i --save morgan

exports.default = app => {
    app.disabled('x-powered-by');
    app.set('env', SETTINGS.parsed.env);
    app.set('config', SETTINGS.parsed);
    app.locals.config = app.get('config');
    //console.log('config',app.locals.config)


    if (process.env.NODE_ENV !== 'test') {
        app.use((0, _morgan2.default)('combined'));
    }

    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({
        extended: false
    }));
    app.use((0, _cors2.default)());
};