import {  observable, computed, action, autorun ,decorate } from "mobx";

class AppModel {

    xmlContent = '';
    isWellFormed = false;
    constructor() {
        this.parser = new DOMParser();
        this.xmlContent = '';
    }

     parseContent(content) {
        console.log("parse : " + content);
        if (content === undefined) {
            return false;
        }
        let doc = this.parser.parseFromString(content, "application/xml");
        if (doc.getElementsByTagNameNS('parsererror', "http://www.mozilla.org/newlayout/xml/parsererror.xm")) {
            return true;
        } else {
            return true;
        }
    }

    toJS() {
        return {
            xmlContent: this.xmlContent,
            isWellFormed: this.isWellFormed
        }
    }
}


decorate(AppModel, {
    xmlContent: observable,
    isWellFormed: observable,
    tellme: action
});

export default AppModel;