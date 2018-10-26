import React from 'react';
import TreeViewElement from  './TreeViewElement';
import TreeViewAttribute from  './TreeViewAttribute';
import TreeViewText from "./TreeViewText";

const processElement = function processElement(node,model) {
    let children = null;
    let attributes = null;
    let childrenComp = [];
    let attrComp = [];
    if (node.hasAttributes()) {
        attributes = node.attributes;
        for (let i=0 ; i < attributes.length ; i++) {
            console.log("process " + attributes[i].name);
            attrComp.push(React.createElement(TreeViewAttribute, {node: attributes[i], model: model}))
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
                childrenComp.push(React.createElement(TreeViewText, {node: children[i],  model: model}));
            } else if (nType === Node.ELEMENT_NODE) {
                childrenComp.push(processElement(children[i],model))
            } else {
                // ignore it
            }
        }
    }
    return React.createElement(TreeViewElement, {node: node, attributes: attrComp,  model: model},childrenComp)

}

export default processElement;