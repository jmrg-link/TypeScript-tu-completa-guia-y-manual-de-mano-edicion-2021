(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Contructor avenger llamado');
        }

        private getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){
           super(name,realName)
           console.log('constructor xmen llamado');
        }
        getFullNameDesdeXmen(){
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('wolverine','logan',true)
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen()
    
})()