(() => {
    const fullName = (firstName:string , lastName?:string): string => {
        return `Nombre : ${firstName} , apellido: ${lastName  || 'no lastName'}`
    }

    const name = fullName('tony')
    console.log({ name });
    

})()