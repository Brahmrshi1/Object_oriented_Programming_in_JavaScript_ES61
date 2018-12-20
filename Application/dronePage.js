import{DataTable}from'./UI/dataTable.js'
import{application}from'./services.js'
import{Page}from'./page.js'

export class DronePage extends Page {
    constructor(){
        super('Drone');

    };
    createeLEMENTS(){
        super.createeLEMENTS();
        
        let headers = 'License Model airTimeHours base'.split(' ');
        let t = new DataTable(headers, application.dataService.drones);
        t.appendElement(this.element);

    }

    getElementString(){
        return '<div style="margin: 20px;"><h3>Drones</h3></div>';

    }

}