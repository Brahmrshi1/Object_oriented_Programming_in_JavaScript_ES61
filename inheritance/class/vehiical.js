// For inheritance use
export  class vehical {
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
