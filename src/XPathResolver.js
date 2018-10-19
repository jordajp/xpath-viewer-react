
export default class XPathResolver {

    constructor(doc,xpath,contextNode){
        this.xpath = xpath;
        this.doc = doc;
        this.contextNode = contextNode;
    }
}