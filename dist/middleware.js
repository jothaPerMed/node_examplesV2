'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auth = undefined;

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const auth = exports.auth = (req, res, next) => {

    if (!req.headers.authorization) {
        // Si no tiene cabecera de Authorization -> jwt jksajkdbajbdjabdjba 
        return res.status(401) // codigo no autorizado
        .send({
            message: 'No authorized'
        });
    }
    ///Ej: jwt jbkjdsbkjdABDHJBNDasaD31a5sd4dA6574D654
    const token = req.headers.authorization.split(' ')[1];
    const payload = _jwtSimple2.default.decode(token, req.app.locals.config.TOKEN);

    req.user = payload.email;
    next();
}; //NECESARIO -> npm i --save jwt-simple