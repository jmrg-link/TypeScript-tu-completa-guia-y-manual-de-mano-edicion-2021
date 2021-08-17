"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = ['batman', 'superman'];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var superFuerza;
    (function (superFuerza) {
        superFuerza[superFuerza["Acuaman"] = 0] = "Acuaman";
        superFuerza[superFuerza["Batman"] = 1] = "Batman";
        superFuerza[superFuerza["Flash"] = 5] = "Flash";
        superFuerza[superFuerza["Superman"] = 100] = "Superman";
    })(superFuerza || (superFuerza = {}));
    var fuerzaFlash = superFuerza.Flash;
    var fuerzaSuperman = superFuerza.Superman;
    var fuerzaBatman = superFuerza.Batman;
    var fuerzaAcuaman = superFuerza.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = (poder.length);
    console.log(largoDelPoder);
})();
