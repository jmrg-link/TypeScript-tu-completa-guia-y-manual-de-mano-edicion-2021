// Funciones Basicas
function sumar(a:number , b:number ):number{
    return a + b
}
const contar = ( heroes:string[] ):number => {
    return heroes.length
}

const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"]
contar(superHeroes)

// Parametros por defecto
const llamarBatman = (llamar:boolean = true):void => {
    if (llamar){
        console.log('Batiseñal activated');
    } else {
        console.log('No hay Batiseñal');
    }
}
llamarBatman()

// Rest ?
const unirheroes = (...personas: string[]):string => {
    return personas.join(', ')
}


// Tipo funcion
const noHaceNada = ( numero:number , texto:string , booleano:boolean, arreglo:string[]) = {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let myFunction: (q:number,w:string,r:boolean,t:string[])=> void
myFunction = noHaceNada

