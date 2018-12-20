import {BaseElement} from './baseElement.js';

export class Image extends BaseElement {
    constructor(filename) {
        super();
        this.filename = filename;
    }
    getElementString() {
        return `
        <img src="${this.filename}" style="width:30%;">
    `;
    }


}