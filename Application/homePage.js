import { BaseElement } from './UI/baseElement.js'
import { Button } from './UI/button.js'
import { Image } from './UI/image.js'
import { application } from './services.js'
import { Page } from './page.js';


export class HomePage extends Page {
    constructor() {
        super('Home ');
    }

    createeLEMENTS() {

        super.createeLEMENTS();

        let i = new Image('../images/img.jpg');
        i.appendElement(this.element);



        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);
        b.appendElement(this.element)
        b.element.click(() => application.activeRoute('Car'));



        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendElement(this.element)
        b.element.click(() => application.activeRoute('Drone'));
    }

    getElementString() {
        return '<div style="text-align: center;"></div>';
    }
}
