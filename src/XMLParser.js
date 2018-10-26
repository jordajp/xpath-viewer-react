
export default class XMLParser{
    content = null
    err = null

    /**
     * Parse the content and return DOM or error information
     *
     * @param content
     * @return [err, dom]
     */
    parseContent(content) {
        const xmlParser = new DOMParser();
        const serializer = new XMLSerializer();
        let doc = xmlParser.parseFromString(content, "application/xml");
        let node = doc.children.item(0);
        if (node.namespaceURI === 'http://www.mozilla.org/newlayout/xml/parsererror.xml') {
            return [serializer.serializeToString(node),null]
        } else {
            return [null,doc]
        }
    }

}