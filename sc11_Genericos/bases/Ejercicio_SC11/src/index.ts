/*
* -> comments:  import * as HeroClasses from './classes/Hero';
* -> comments:  import powers , { Power } from './data/powers';

* -> import {Hero} from './classes/Hero' : importacion usando destructuring 
* -> import {Hero as SuperHero} : importancion renombrando Hero as SuperHero
* -> import * as HeroClasses from './classes/Hero' : importacion de todos los modulos exportados de classesHero
*
*/

import { Hero } from './classes/Hero'
import  powers  from './data/powers'





const ironman = new Hero ('Ironman', 1, 55)


console.log(ironman)
console.log(ironman.power)




// const objeto = new <Modulo>.<clase>(datos de la clase)
// const ironman = new HeroClasses.Hero('Ironman',1500,42)
// console.log(ironman);














