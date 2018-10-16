import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Label} from 'semantic-ui-react';

const TreeView = observer(
    class TreeView extends React.Component {

        render() {
            const { store } = this.props;
            console.log("tree-content: " + this.props)
            return (
                <div>
                    <Label empty={true} color={this.props.model.isWellFormed ? 'green' : 'red'}></Label>
                    <div className="tree-view">{this.props.model.xmlContent}</div>
                </div>
            )
        }
    }
)

export default TreeView;