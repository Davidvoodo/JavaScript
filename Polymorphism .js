class Animal{
    constructor(name){
        this.name=name; 
    }

    eats(){
        console.log(this.name + ' '  +'eats food');
    }
}

class Aligator extends Animal{

    eats(){
        super.eats();
        //console.log(this.name + ' '  +'eats fishes');
    }

}
let murpahy = new Aligator('Murpay');
murpahy.eats();