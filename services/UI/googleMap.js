import {BaseElement}from'./baseElement.js'
export class GoogleMaps extends BaseElement{
    constructor(centerOfMap, data) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }
    createeLEMENTS(){
    super.createeLEMENTS();
    setTimeout(() => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: this.centerOfMap
        });
        
        for (let vehicle of this.data) {
            let [lat, long] = vehicle.latLong.split(' ');
            console.log('lat:' + lat);
            let myLatLng = new window.google.maps.LatLng(lat, long);
        
            var marker = new window.google.maps.Marker({
                position: myLatLng,
                map: map
            });
            
            marker.setMap(map);
        }
        
    }, 0);

    }
   
    getElementString() {
        return `<div style="width:800px; height: 400px;" id="map"></div>`;
    }
       
}