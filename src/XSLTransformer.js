import axios from 'axios';

import XMLParser from './XMLParser';
const xmlParser = new XMLParser();


export default class XSLTransformer {

    ready = false;
    url = null;
    transformer = null;

    constructor(url) {
        this.url = "/xslt/" + url;
        axios.get(this.url,
            {
                headers: {'X-Requested-With': 'XMLHttpRequest'},
            })
            .then( res => {
                console.log(`Loading ${this.url}`)
                this.transformer = new XSLTProcessor();
                try {
                    console.log(res);
                    const [err,dom] = xmlParser.parseContent(res.data);
                    this.transformer.importStylesheet(dom);
                    this.ready = true;

                } catch (e) {
                    console.log(`While parsing xslt ${this.url}: ${e}`);
                    this.ready = false;
                }

            })
            .catch( err => {
                console.log(`While loading ${this.url}: ${err}`)
        });
    }

    /**
     * Apply XSLT transformation and return the
     * @param DOMDocument doc
     * @return {DOMDocument | null}
     */
    transform(doc) {
        if (! this.ready) {
            console.log("XSLT not loaded");
            return null;
        } else {
            return this.transformer.transformToDocument(doc)
        }
    }
}