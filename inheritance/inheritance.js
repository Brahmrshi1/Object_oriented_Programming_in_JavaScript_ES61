class vehical {
    constructor(licnum) {
        
        this.licnum = licnum;
        this.gpsEnable= true;
    }
    start(){
        console.log("starting vehical Now")
    }

    
    static getCompany(){
        console.log("This is my company");

    }
}
class car extends vehical {
    constructor(licnum) {
        super(licnum);
        // this.gpsEnable= false;
    }


    start(){
        super.start();
        console.log("starting car Now")
    }

    static getCompany(){
        super.getCompany();
        console.log("This is my company of car");
    }


}

let c = new car(2156);
// console.log(c instanceof car);
console.log(c.licnum);
console.log(c.gpsEnable);
c.start();
car.getCompany();