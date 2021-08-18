"use strict";
(function () {
    var myCustomVariable = "Jesus";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wein',
        age: 43,
        power: ['ninguno']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
