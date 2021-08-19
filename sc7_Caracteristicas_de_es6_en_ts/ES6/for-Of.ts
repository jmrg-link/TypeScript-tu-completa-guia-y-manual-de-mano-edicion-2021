(()=> {

    type Avenger = {
        name:string,
        weapon:string
    }

    const captainAmerica:Avenger = {
        name: 'Capiutan America',
        weapon: 'Shield - Helmet'
    }
    const ironman:Avenger = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    }
    const thor:Avenger = {
        name: 'Thor',
        weapon: 'Mjholnir'
    }
    const avengers = [ ironman , thor , captainAmerica ]

    for (const avenger of avengers) {
        console.log(avenger);
        
    }


})()