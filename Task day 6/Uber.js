class UberPrice{
    constructor(kilometer,price=100){
        this.kilometer = kilometer,
        this.price = price      
     }
        get PriceValue() 
        {
            return this.kilometer * this.price ;
        }
        
    }
    const UberCar1 = new UberPrice(5);
    const UberCar2 = new UberPrice(5, 200);
    
    console.log(UberCar1.PriceValue);
    console.log(UberCar2.PriceValue);
//const Uber1=new UberPrice(10);
//const Uber2=new UberPrice(10,70);
//console.log(Uber1);
//console.log(Uber2);
