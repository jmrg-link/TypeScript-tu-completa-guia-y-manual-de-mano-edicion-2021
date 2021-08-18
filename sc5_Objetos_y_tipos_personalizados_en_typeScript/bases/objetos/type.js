"use strict";
(function () {
    var flash = {
        name: 'barry Allen',
        age: 24,
        power: ['super velocidad', 'viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        power: ['super fuerza', 'super velocidad'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash);
})();
