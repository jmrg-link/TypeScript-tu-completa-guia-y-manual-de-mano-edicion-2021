(()=>{

    type Hero = {
        name: string,
        age?: number,
        power:string[],
        getName?: () => string
    }

    let flash:Hero = {
        name:'barry Allen',
        age:24,
        power:['super velocidad','viajar en el tiempo'],
        getName(){
            return this.name
        }
    }

    let superman:Hero = {
        name:'Clark Kent',
        age:60,
        power:['super fuerza','super velocidad'],
        getName(){
            return this.name
        }
    }

    

    console.log(flash );

})()