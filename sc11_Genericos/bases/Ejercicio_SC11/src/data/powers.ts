// exportamos la interfaz
export interface Power{
    id:number
    desc:string
}

const powers: Power[]= [
    {
        id:1,
        desc:'Money'
    },
    {
        id:2,
        desc:'Drugs'
    }
]

// exportamos por defecto powers
export default powers