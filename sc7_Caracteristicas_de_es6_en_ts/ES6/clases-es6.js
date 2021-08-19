(()=>{

    class Avenger {
        name;
        power;
    
    constructor(name = 'no name',power = 500){
        this.name = name;
        this.power = power;
    }
}

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name,power,flying=true){
            super(name,power)
            this.flying = flying
        }
    }

    const hulk = new Avenger('Hulk', 9000)
    const vision = new Avenger('Vision',50000)
    const wolverine = new Avenger('Wolverine',50000)
    const falcon = new FlyingAvenger('Falcon',8000)
    console.group('Avengers')
    console.log(hulk);
    console.log(vision)
    console.log(wolverine)
    console.groupEnd()

    console.group('Avengers Flyings')
    console.log(falcon)
    console.groupEnd()

})()