import { Page } from "./page.js";
import{GoogleMaps}from'./UI/googleMap.js'
import{application}from'./services.js'
export class MapPage extends Page{
 constructor(){
     super('Map');
 }
 createeLEMENTS(){
     super.createeLEMENTS();
   
     let centerOfMap = {lat: 40.783661, lng: -73.965883}; 
     let map = new GoogleMaps(centerOfMap, application.dataService.cars);
     map.appendElement(this.element);

 }

 getElementString(){
    return '<div style="margin: 20px;"><h3>Map</h3></div>';
 }
}