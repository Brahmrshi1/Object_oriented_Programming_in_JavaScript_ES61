import{vehical} from'./vehiical.js'



// For inheritance only
export class car extends vehical {
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
