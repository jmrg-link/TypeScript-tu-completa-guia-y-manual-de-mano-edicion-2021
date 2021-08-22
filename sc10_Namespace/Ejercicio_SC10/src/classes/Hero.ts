import powers from "../data/powers"

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age:number
    ){}
    //! important: ! este signo le dice a typescript que confie en lo que el programador dice que tiene que regresar por lo que ts se cree lo que dice y devuelve el dato declarado despues del !.desc
    get power():string{ // string
        return powers.find(
            power => power.id === this.powerId)?.desc || 'not found'
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}
