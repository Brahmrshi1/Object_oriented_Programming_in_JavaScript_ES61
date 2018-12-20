import{DataTable}from'./UI/dataTable.js'
import{application}from'./services.js'
import{Page}from'./page.js'

export class CarPage extends Page {
    constructor(){
        super('cars');

    };
    createeLEMENTS(){
        super.createeLEMENTS();
        
        let headers = 'License Make Model Miles'.split(' ');
        let t = new DataTable(headers, application.dataService.cars);
        t.appendElement(this.element);

    }

    getElementString(){
        return '<div style="margin: 20px;"><h3>Cars</h3></div>';

    }

}