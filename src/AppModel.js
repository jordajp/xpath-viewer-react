import {  observable, computed, action, autorun ,decorate } from "mobx";
import XSLTransformer from './XSLTransformer';
import XMLParser from './XMLParser';

const xmlParser = new XMLParser();

class AppModel {

    xmlContent = '';
    xpathExpression = '';
    toXmlWithIds = null;
    toTreeView = null;
    currentNode = null;
    xpathResultNodes = [];
    xpathResultValue = null;

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

    get xmlError() {
        let [err,doc] = xmlParser.parseContent(this.xmlContent);
        const xpathExp = this.xpathExpression;
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

    get xpathResult() {
        let result = {
          "error": null,
          "nodes": [],
          value: null
        };
        if (this.xpathExpression === '' || this.xmlDom === null) {
            return result;
        }
        let contextNode = (this.currentNode === null ? this.xmlDom : this.currentNode);
        let xpathResult = null;
        try {
             xpathResult = this.xmlDom.evaluate(this.xpathExpression,contextNode,null,XPathResult.ANY_TYPE,null);
        } catch (e) {
            console.log(e)
            result.error = "XPATH error: " + e.message;
            return result;
        }
        if (xpathResult.resultType === XPathResult.UNORDERED_NODE_ITERATOR_TYPE) {
            let cNode = xpathResult.iterateNext();
            while (cNode) {
                result.nodes.push(cNode);
                cNode = xpathResult.iterateNext();
            }
        } else {
            switch (xpathResult.resultType) {
                case XPathResult.BOOLEAN_TYPE:
                    result.value = xpathResult.booleanValue;
                    break;
                case XPathResult.NUMBER_TYPE:
                    result.value = xpathResult.numberValue;
                    break;
                case XPathResult.STRING_TYPE:
                    result.value = xpathResult.stringValue;
                    break;
                default:
                    // ne devrait pas arriver...
                    result.value = null;
            }
        }
        return result;
    }
}


decorate(AppModel, {
    xmlContent: observable,
    currentNode: observable,
    xmlDom: computed,
    xpathExpression: observable,
    xmlError: computed,
    xpathResult: computed,
});

export default AppModel;