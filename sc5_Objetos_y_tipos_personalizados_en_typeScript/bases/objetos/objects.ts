(()=>{
    let flash:{ name:string , age?:number , power:string[] , getName?: () => string } = {
        name:'barry Allen',
        age:24,
        power:['super velocidad','viajar en el tiempo']
    }

    let superman:{ name:string , age?:number , power:string[] , getName?: () => string } = {
        name:'Clark Kent',
        age:60,
        power:['super fuerza','super velocidad']
    }

    // flash = {
    //     name:'clark kent',
    //     age:60,
    //     power:['super fuerza','super velocidad'],
    //     getName(){
    //         return this.name
    //     }
    // }

    console.log(flash.getName());

})()