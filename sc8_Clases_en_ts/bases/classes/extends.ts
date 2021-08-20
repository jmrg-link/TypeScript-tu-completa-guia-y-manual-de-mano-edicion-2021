(()=>{
    class Avenger {
        constructor(
            public name    ?: string,
            public realName?: string
        ){
            console.log('Constructor Avenger Llamado')
        }
        private getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean = true
            
        ){
            super(name,realName)
            console.log('Constructor Xmen llamado...');
        }
        getFullNameDesdeXmen(){
                console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine','logan')
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    
    
})()