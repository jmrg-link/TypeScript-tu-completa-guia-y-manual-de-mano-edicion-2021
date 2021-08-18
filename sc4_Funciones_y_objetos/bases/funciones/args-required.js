"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('tony', 'stark');
    console.log({ name: name });
})();
