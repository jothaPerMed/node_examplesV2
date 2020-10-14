'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('../middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();
router.get('/', (req, res, next) => {
    res.statusCode(200).json({
        name: 'Jose Gabriel',
        lastname: 'Perea Medina'

    });
}).put('/', _middleware.auth, (req, res, next) => {

    res.status(201).json(req.body);
});

exports.default = router;