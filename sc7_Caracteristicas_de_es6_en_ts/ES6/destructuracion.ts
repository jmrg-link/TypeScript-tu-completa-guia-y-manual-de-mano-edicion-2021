(()=>{

    type Avengers= {
        vision  : string
        ironman : string
        nick    : string
        activos : boolean
        poder   : number
    }
    const avengers:Avengers = {
        nick:'Samuel L.Jackson',
        ironman:'Robert Downey Jr.',
        vision:'Paul Bettany',
        activos:true,
        poder:1500
    }

    const { poder, vision } = avengers

    console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironman , ...rest} : Avengers) => {
        console.log(avengers.ironman, rest);   
    }
    printAvenger(avengers)

    //P2
    const avengersArr:[string , string , boolean , number, string] = ['Cap. America', 'Ironman' , true , 1500 ,'Hulk']

    const ironman:string = avengersArr[1]
    console.log({ironman});

    const [ , , , , hulk] = avengersArr
    console.log({hulk});


})()