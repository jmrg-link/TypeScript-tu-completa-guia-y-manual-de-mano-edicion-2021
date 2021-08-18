"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "Nombre : " + firstName + " , apellido: " + (lastName || 'no lastName');
    };
    var name = fullName('tony');
    console.log({ name: name });
})();
