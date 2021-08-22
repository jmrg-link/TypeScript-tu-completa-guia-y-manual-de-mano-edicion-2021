//import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
import * as funcionesGenericas from '../generics/generics'
import { Hero , Villain } from '../interfaces/index'


const deadpool = {
    name:'DeadPool',
    realName:'Wade Winston Wilson',
    dangerLevel:500
}

console.log(    funcionesGenericas.genericFunctionArrow<Villain>(deadpool).name    )



/*
//! printObject
// Recibe :any arguments
// printObject(123)
// printObject(new Date())
// printObject({a:1,b:2,c:3})
// printObject(' hola mundo ')
//! genericFunction
console.log(    funcionesGenericas.genericFunction(3.141618).toFixed(2)    );
const name:string = 'Jesus'
console.log(    funcionesGenericas.genericFunction(name).toLowerCase()     );
//! genericFunctionArrow
const fecha:Date = new Date()
console.log(    funcionesGenericas.genericFunctionArrow(fecha).getDate()        );
*/

// error intenta procesar un string con toFixed() al no ser un number falla
// console.log(    genericFunction('Hola Mundo').toFixed(2)    );
