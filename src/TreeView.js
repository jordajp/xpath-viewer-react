import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Label} from 'semantic-ui-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const TreeView = observer(
    class TreeView extends React.Component {

        render() {
            const { store } = this.props;
            console.log("tree-content: " + this.props)
            return (
                <div>
                    <Label empty={true} color={this.props.model.xmlError === null ? 'green' : 'red'}></Label>
                    <div id="xml-tree-view">{ ReactHtmlParser(this.props.model.treeView) }</div>
                </div>
            )
        }
    }
)

export default TreeView;