'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
/**MIDDLEWARES */
app.disable('x-powered-by');
app.set('env', 'development');
app.use((0, _morgan2.default)('common'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));
/**END MIDDLEWARES */

/**Hacer uso del directorio de vistas para el renderizado */
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'pug');

(0, _router2.default)(app); //--->EJECUTANDO LAS RUTAS


//Utilizacion de middleware para buscar la pagina si no existiera mostraria un 404
app.use((require, response, next) => {
    response.render('404', {
        title: 'Error Pagina No Existe',
        mensaje: `La ruta que busca da a una pagina no existente `
    });
});
/**
 * Utilizar Ficheros estaticos parar leerlos segun su extension e importarlos
 */
app.use('/static', _express2.default.static(_path2.default.join(__dirname, 'public')));

//En 4º lugar vamos a decirle a express que escuche en el puerto 9000 .
app.listen('9000', () => {
    console.log("Servidor Run.. PORT=>9000");
});