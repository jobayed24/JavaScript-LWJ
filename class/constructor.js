class Car{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return 'I have a '+this.carname;
    }
}

class BMW extends Car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present()+" it is "+this.model;
    }
}

const lbmw=new BMW('BMW','23P');

console.log(lbmw.show())