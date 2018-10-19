import React from 'react';
import TreeViewElement from  './TreeViewElement';
import TreeViewAttribute from  './TreeViewAttribute';

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
        for (let i=1 ; i < children.length ; i++) {
            childrenComp.push(processElement(children[i]))
        }
    }
    return React.createElement(TreeViewElement, {nodeName: node.tagName, attributes: attrComp},childrenComp)

}

export default processElement;