import $ from 'jquery' 
import {Car} from './class/car.js'
import {Drone} from './class/drone.js'
import {FleetDataService} from './service/fleetservices.js'
import {fleet} from './fleetdata.js'
import {Button}from'./UI/button.js'
import{Image}from'./UI/image.js'
import{Titlebar}from'./UI/titlebar.js'
import{DataTable}from'./UI/dataTable.js'
import{GoogleMaps}from'./UI/googleMap.js'

// let    dataService = new FleetDataService();
// dataService.loadData(fleet);

// // let car = dataService.getCarByLicense('AT9900');
// // console.log(car);
// //  console.log(dataService.cars);

// // for (let car of dataService.cars)
// //      console.log(car.license);

// // let cars = dataService.getCarSortedByLicense();
// let cars = dataService.filterCarDataByMake('e') 
// for(let license of cars)
//  console.log(license)


//  for (let e of dataService.errors)
//     console.log(e.msg);


// let b = new Button('Click Me ');
// b.appendElement($('body'));

// let i = new Image('../images/img.jpg');
// i.appendElement($('body'));

// let tb = new Titlebar('OUR APPLICATION');
// tb.addLink('Home','');
// tb.addLink('Car','');
// tb.addLink('Drone','');
// tb.addLink('Maps','');
// tb.appendElement($('body'));

// let headers = "License Make Model Miles".split(' ');
// let    dataService = new FleetDataService();
//  dataService.loadData(fleet);
// let dt=new DataTable(headers,dataService.cars);
// dt.appendElement($('body'));


let dataService = new FleetDataService();
dataService.loadData(fleet);

let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMaps(centerOfMap, dataService.drones);
map.appendElement($('body'));