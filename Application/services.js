import $ from 'jquery'
import { FleetDataService } from './service/fleetservices.js'
import { fleet } from './fleetdata.js'
import { ApllicationBase } from './applicationBase.js'
import{HomePage}from'./homePage.js'
import{CarPage}from'./carpage.js'
import { MapPage } from './mapPage.js';
import { DronePage } from './dronePage.js';

export class App extends ApllicationBase {
    constructor() {
        super('Fleet ManageR');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home',new HomePage(),true);
        this.addRoute('Car',new CarPage(), false);
        this.addRoute('Drone',new DronePage(),false);
        this.addRoute('Maps',new MapPage(),false);

    }
}

export let application = new App();
application.show($('body'));