"use strict";
(() => {
    const captainAmerica = {
        name: 'Capiutan America',
        weapon: 'Shield - Helmet'
    };
    const ironman = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjholnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
