import { Car } from '../class/car.js';
import { Drone } from '../class/drone.js';
import {DataEror} from'./dataerror.js';

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':

                if (this.validateCarData(data)) {
                    let car = this.loadCar(data);
                    if (car) 
                    this.cars.push(car);
                }
                else {
                    let e = new DataEror('Invalid vehicle type', data);
                    this.errors.push(e);
                     }
                break;       
                case 'drone':
                    this.drones.push(data);
                    break;

                default:
                    let e = new DataEror('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;


            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        }
        catch (e) {
            this.errors.push(new DataEror('error loading car', car));

        }
        return null;
    }

 
    getCarByLicense(license){
        return this.cars.find(function(car){
            return car.license==license;
        })
    }

    getCarSortedByLicense(){
        return this.cars.sort(function(car1,car2){
            if(car1.license < car2.license){
                return -1;
            }

            if(car1.license > car2.license)
            {return 1;}
            return 0;
        })
    }

    filterCarDataByMake(filter){
        return this.cars.filter(car=> car.make.indexOf(filter)>=0);
    }

    validateCarData(car) {
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataEror(`invalid field ${field}`, car));
                hasErrors = true;
        
            }
            return car;

        }
        
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataEror('invalid milage', car));
            hasErrors = true;
        }
        return !hasErrors;
    }
}