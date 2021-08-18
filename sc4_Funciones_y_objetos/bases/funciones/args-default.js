"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return ("Nombre : " + firstName + " , apellido: " + (lastName || 'no lastName')).toUpperCase();
        }
        else {
            return "Nombre : " + firstName + " , apellido: " + (lastName || 'no lastName');
        }
    };
    var name = fullName('tony', 'stark', true);
    console.log({ name: name });
})();
