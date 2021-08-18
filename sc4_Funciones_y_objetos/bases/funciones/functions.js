"use strict";
(function () {
    var hero = 'Flash';
    var returnName = function () {
        return hero;
    };
    var activateBatiSeñal = function () {
        return 'Batiseñal activated';
    };
    console.log(typeof activateBatiSeñal() + ' = ' + activateBatiSeñal());
    var heroName = returnName();
    console.log("" + heroName);
})();
