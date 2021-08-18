( () => {

    const addNumber    = (a:number,b:number) => a + b
    const saveTheWorld = () => `El mundo esta salvado`
    const greet        = (name: string) => `hola ${name}`

    // let myFunction:Function
    // solo es precio definir el tipo en los parametros de la funcion
    let myFunction:(y:string) => string
    //! extension better-comments

    //* myFunction= 10
    //* console.log(myFunction);
    
    // la funcion addNumber tiene dos parametros a y b de tipo number para realizar en la funcion una suma.
    // myFunction = addNumber
    // console.log(myFunction(1,2));
    
    myFunction = greet
    console.log(myFunction('Jesus'));
    
    //? myFunction = saveTheWorld
    //? console.log(myFunction());

})()