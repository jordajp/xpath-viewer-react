import {  observable, computed, action, autorun ,decorate } from "mobx";
import XSLTransformer from './XSLTransformer';
import XMLParser from './XMLParser';

const xmlParser = new XMLParser();

class AppModel {

    xmlContent = '';
    xpathExpression = '';
    toXmlWithIds = null;
    toTreeView = null;

    constructor() {
        this.toXmlWithIds = new XSLTransformer('id_setter.xsl');
        this.toTreeView = new XSLTransformer('to_html_xpath.xsl');
    }
    get tryCompute() {
        if (this.isWellFormed) {
            return "xml is well formed";
        } else {
            return "xml is not well formed";
        }
    }

    get treeView() {
        if (this.xmlError != null) {
            return '';
        } else {
            let [err,xmldoc] = xmlParser.parseContent(this.xmlContent);
            console.log(`the dom : ${this.xmlDom}`)
            const docWithId = this.toXmlWithIds.transform(this.xmlDom);
            var oSerializer = new XMLSerializer();
            const treeHtml = this.toTreeView.transform(docWithId);
            return oSerializer.serializeToString(treeHtml);
        }
    }

    get xmlError() {
        let [err,doc] = xmlParser.parseContent(this.xmlContent);
        this.doc = (doc ? doc : null);
        return err;
    }

    get xmlDom() {
        if (this.xmlContent) {
            return this.doc;
        } else {
            return null;
        }
    }


}


decorate(AppModel, {
    xmlContent: observable,
    xmlDom: computed,
    xpathExpression: observable,
    xmlError: computed,
    treeView: computed,
});

export default AppModel;