import {Vehicle} from './vehiical.js'

export class Car extends Vehicle {
    
    constructor(license, model, latLong) {
        super(license, model, latLong);
        this.miles = null;
        this.make = null;
    }
}

// // For inheritance only
// export class car extends vehical {
//     constructor(licnum) {
//         super(licnum);
//         // this.gpsEnable= false;
//     }


//     start(){
//         super.start();
//         console.log("starting car Now")
//     }

//     static getCompany(){
//         super.getCompany();
//         console.log("This is my company of car");
//     }


// }
