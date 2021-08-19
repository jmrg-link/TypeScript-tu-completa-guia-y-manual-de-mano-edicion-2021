(()=>{
    type Hero = {
        name: string,
        age?: number,
        power:string[],
        getName?: () => string
    }
    let myCustomVariable: (string | number | Hero ) = "Jesus"
    console.log(typeof myCustomVariable);

    myCustomVariable = 20
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name:'Bruce Wein',
        age:43,
        power:['ninguno']
    }
    console.log(typeof myCustomVariable);
    console.log( myCustomVariable);
    

})()