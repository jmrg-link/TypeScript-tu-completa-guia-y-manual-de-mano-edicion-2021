(()=>{
    const fullName = (firstName: string, ...restAllNames:string[]):string => {
        return `${firstName} ${restAllNames.join(' ')}`
    }
    const superman = fullName('Clark' , 'Joseph' , 'Kent')
    console.log({superman});
    
})()