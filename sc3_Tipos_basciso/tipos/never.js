"use strict";
(function () {
    // never no es undefined ni void never es never
    // no tiene que tener un punto de retorno la funcion acabar en error
    var error = function (message) {
        throw new Error(message);
    };
    error("hola");
})();
