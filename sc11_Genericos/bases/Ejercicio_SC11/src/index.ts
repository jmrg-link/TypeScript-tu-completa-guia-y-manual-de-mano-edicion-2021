import { Sprites } from './interfaces/pokemon';
import { getPokemon } from './generics/getPokemon';

getPokemon(4)
    .then(pokemon => console.info(pokemon.sprites.front_default))
    .catch(error => console.error(error))
    .finally(()=> console.log('Fin de getPokemon'))