class Car{
    constructor(name,year){
        this.carname=name;
        this.carage=year;
    }
    getCarYear(){
        let carCAge=new Date();
        let getCAge=carCAge.getFullYear()-this.carage;
        
        return ("My car has " +getCAge+" Years old");
    }
}

class BMW extends Car{
    constructor(name,year){
        super(name,year);
    }
    showAge(){
        return this.getCarYear();
    }
}

const bmw=new BMW('BMW',2015);

console.log(bmw.showAge());