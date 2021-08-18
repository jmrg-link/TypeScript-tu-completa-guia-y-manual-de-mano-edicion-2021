"use strict";
(function () {
    var fullName = function (firstName) {
        var restAllNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restAllNames[_i - 1] = arguments[_i];
        }
        return firstName + " " + restAllNames.join(' ');
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
