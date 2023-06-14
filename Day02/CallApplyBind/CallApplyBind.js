function car(regNum, brand){
    this.regNum = regNum;
    this.brand = brand;
}

car.prototype.carDetails = function(){
    return {
        "Registration no" : this.regNum,
        "Brand" : this.brand
    }
}

function getOwnersVehicleDetail(owner,city){
    console.log({...this.carDetails(),...owner,city});
}

function person(name,year){
        this.name=name;
        this.year=year;
    }
    
    const shiv = new person("shivam","2022");
    const aryn = new person("aryn","2001");
    const jay = new person("jay","2013");
    
    const audi = new car("up32dn","audi");
    const neo = new car("up34xs","tata");
    const thar = new car("up36pq","mahindra");
    //call example
    getOwnersVehicleDetail.call(audi,shiv,"LKO")
    //apply
    getOwnersVehicleDetail.apply(neo,[aryn,"AMD"])
    //bind
    detailOfJaysVehicle=getOwnersVehicleDetail.bind(thar,jay,"CHN")

    detailOfJaysVehicle();


