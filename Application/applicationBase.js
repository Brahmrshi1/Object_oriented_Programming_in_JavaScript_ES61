import { Titlebar } from './UI/titlebar.js'


export class ApllicationBase {
    constructor(title) {
        this.title = title;
        this.titlebar = new Titlebar(this.title);
        this.roouteMap = {};
        this.deafultRoute = null;
    }

    activeRoute(route) {
        let content = this.titlebar.element.find('.page-content')
        content.empty();
        this.roouteMap[route].appendElement(content);
    }
    addRoute(id, pageObjects, deafultRoute = false) {

        this.titlebar.addLink(id, '');
        this.roouteMap[id] = pageObjects;
        if (deafultRoute) {
            this.deafultRoute = id;
        }

    }
    show(element) {
        this.titlebar.appendElement(element);

        this.titlebar.element.find('.mdl-navigation__link').click((event) => {
            let route = event.target.innerHTML;
            this.activeRoute(route.trim());
        });


        if (this.deafultRoute) {
            this.activeRoute(this.deafultRoute)
        }
    }


}