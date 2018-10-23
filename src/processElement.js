import React from 'react';
import TreeViewElement from  './TreeViewElement';
import TreeViewAttribute from  './TreeViewAttribute';
import TreeViewText from "./TreeViewText";

const processElement = function processElement(node) {
    let children = null;
    let attributes = null;
    let childrenComp = [];
    let attrComp = [];
    if (node.hasAttributes()) {
        attributes = node.attributes;
        for (let i=0 ; i < attributes.length ; i++) {
            console.log("process " + attributes[i].name);
            attrComp.push(React.createElement(TreeViewAttribute, {nodeName: attributes[i].localName, value: attributes[i].value}))
        }
    }
    if (node.hasChildNodes()) {
        children = node.childNodes;
        console.log(children.length + " nœuds fils.");
        for (let i=0 ; i < children.length ; i++) {
            let nType = children[i].nodeType;
            console.log("node type : " + nType);
            if (nType === Node.TEXT_NODE) {
                console.log("process text node");
                childrenComp.push(React.createElement(TreeViewText, {value: children[i].textContent}));
            } else if (nType === Node.ELEMENT_NODE) {
                childrenComp.push(processElement(children[i]))
            } else {
                // ignore it
            }
        }
    }
    return React.createElement(TreeViewElement, {nodeName: node.tagName, attributes: attrComp},childrenComp)

}

export default processElement;