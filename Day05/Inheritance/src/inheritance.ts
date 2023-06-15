class Car{
    protected color:string;   
    constructor(color:string){
        this.color=color
    }
}

class Tata extends Car{
    private price:number
    constructor(color:string,price:number){
        super(color)
        this.price=price
    }

    display(){
        console.log(`Color: ${this.color}      Price ${this.price}`);

    }
}


const jaguar:Tata = new Tata("black",120000000)

jaguar.display();