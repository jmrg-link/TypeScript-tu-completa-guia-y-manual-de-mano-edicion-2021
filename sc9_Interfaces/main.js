"use strict";
(() => {
    let flash = {
        name: 'barry Allen',
        age: 24,
        power: ['super velocidad', 'viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        power: ['super fuerza', 'super velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutante {
        mutantPower() {
            return this.name + '' + this.realName;
        }
    }
});
(() => {
    const client = {
        name: "Jesus",
        age: 37,
        address: {
            id: "125axz",
            zip: 28000,
            city: "Madrid",
            country: "Spain",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Patricia",
        age: 35,
        address: {
            id: "521zxa",
            zip: 28000,
            city: "Madrid",
            country: "Spain",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFucntions;
    addNumbersFucntions = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map