import $ from 'jquery';
export class BaseElement{
 constructor(){
     this.element = null;  //jQuery element
 }


appendElement(el){
    this.createeLEMENTS();
    el.append(this.element);

}

 createeLEMENTS(){
 let s = this.getElementString();
 this.element = $(s);     
 }
 getElementString(){
     throw' heelo ';

 }
}