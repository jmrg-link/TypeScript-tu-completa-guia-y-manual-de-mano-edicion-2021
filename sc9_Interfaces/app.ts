// Crear interfaces

interface Auto {
  encender:boolean
  velocidadMaxima:number
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason{
  reir?   :boolean
  comer?  :boolean
  llorar? :boolean
}

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface MiFunc{
  (ciudadanos:string[] ):number
}

const ciudadGotica:MiFunc = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}
interface PeopleInterface {
  nombre:string
  edad:number
  sexo:string
  estadoCivil:string
  imprimirBio():void
}
// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PeopleInterface{
  public nombre : string
  public edad : number
  public estadoCivil : string
  public sexo : string

  imprimirBio(){
    return  `$Tu nombre es :${this.name}, tienes :${this.edad} y tu sexo es :${this.sexo} actualmente estas :${this.estadoCivil}  `
  }
}

