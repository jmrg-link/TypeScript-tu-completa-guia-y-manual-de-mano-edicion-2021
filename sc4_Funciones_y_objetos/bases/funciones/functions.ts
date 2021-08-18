(()=>{
    const hero: string = 'Flash'
    
    const returnName = ():string =>{
        return hero
    }

    const activateBatiSeñal = ():string => {
        return 'Batiseñal activated'
    } 

    console.log(typeof activateBatiSeñal() + ' = ' + activateBatiSeñal())

    const heroName = returnName()
    console.log(`${heroName}`);
    
})()