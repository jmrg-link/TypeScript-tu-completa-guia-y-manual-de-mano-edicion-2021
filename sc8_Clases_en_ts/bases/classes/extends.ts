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
        get fullName(){
            return `${this.name} - ${this.realName}`
        }
        set fullName(name:string){
            if(name.length < 5 ){
                throw new Error(`El fullName:${name} debe ser mayor de 5 letras`)
            }
            this.name = name
        }
        // getFullNameDesdeXmen(){
        //     console.log(super.getFullName());
        // }
    }

    const wolverine = new Xmen('wolverine','logan',true)
    //console.log(wolverine.fullName);
    wolverine.fullName = 'jesus'
    //console.log(wolverine.fullName);
    //wolverine.getFullNameDesdeXmen()


})()