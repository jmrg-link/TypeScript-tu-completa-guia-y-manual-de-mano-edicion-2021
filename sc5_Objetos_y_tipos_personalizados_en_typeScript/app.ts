type Coche = {
    carroceria: string
    modelo: string
    antibalas: boolean
    pasajeros: number
    disparar?:()=>void
}
// Objetos
const batimovil:Coche = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  type Villano = {
    nombre:string,
    edad: number,
    mutante: boolean
  }
  
  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos:Villano[] = [{
    :false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  const charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  const apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique;
  
  mystique = charles;
  mystique = apocalipsis;
  