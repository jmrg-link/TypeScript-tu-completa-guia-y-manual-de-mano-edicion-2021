(()=>{
    interface Xmen {
        name:string
        realName:string
        mutantPower(id:number):string
    }
    interface Human {
        age:number
    }
    class Mutante implements Xmen , Human{
        public age:number
        public name:string
        public realName:string

        mutantPower(){
            return this.name +  '' + this.realName
        }
    }

    
})