import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Label} from 'semantic-ui-react';
import TreeViewElement from  './TreeViewElement';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import processElement from './processElement';

const TreeView = observer(
    class TreeView extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            const xmlDom = this.props.model.xmlDom;
            console.log("tree-content: " + this.props)
            if (xmlDom != null) {
                console.log("DOM :");
                console.log(xmlDom);
            }
            return (

                <div>
                    <Label empty={true} color={this.props.model.xmlError === null ? 'green' : 'red'}></Label>

                    <div id="xml-tree-view">
                        <TreeViewInner xmlDom={xmlDom} model={this.props.model}/>
                    </div>

                </div>
            )
        }
    }
)

function TreeViewInner(props) {
    let xmlDom = props.xmlDom;
    return (xmlDom != null ? processElement(xmlDom.documentElement,props.model) : 'empty')
}
export default TreeView;