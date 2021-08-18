(() => {
    const fullName = (firstName:string , lastName?:string, upper:boolean = false): string => {
        if (upper ){
            return `Nombre : ${firstName} , apellido: ${lastName  || 'no lastName'}`.toUpperCase()
        } else {
            return `Nombre : ${firstName} , apellido: ${lastName  || 'no lastName'}`
        }

    }

    const name = fullName('tony' , 'stark' , true)
    console.log({ name });

})()