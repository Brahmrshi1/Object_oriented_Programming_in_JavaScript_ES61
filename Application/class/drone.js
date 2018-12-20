import{Vehicle} from'./vehiical.js'

export class Drone extends Vehicle {

    constructor(license, model, latLong) {
        super(license, model, latLong);
        this.airTimeHours = null;
        this.base = null;
    }
}
// // For inhetiance only
// export class Drone extends vehical{
//     constructor(licnum) {
//         super(licnum);
//         // this.gpsEnable= false;
//     }


//     start(){
//         super.start();
//         console.log("starting dRONE Now")
//     }

//     static getCompany(){
//         super.getCompany();
//         console.log("This is my company of Drone");
//     }

// }