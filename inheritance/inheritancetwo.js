import { Car } from './class/car.js'
import { Drone } from './class/drone.js'


// inheritance modul
let c = new Car(2156);
 console.log(c instanceof car);
console.log(c.licnum);
console.log(c.gpsEnable);
c.start();
car.getCompany();


let d = new Drone(3156);
console.log(d instanceof Drone);
console.log(d.licnum);
console.log(d.gpsEnable);
d.start();
Drone.getCompany();