import React, {Component} from 'react';
import {observer} from "mobx-react";

const TreeViewActive = observer(
    class TreeViewActive extends Component {

        toggleCurrent() {
            if (this.props.model.currentNode === this.props.node) {
                this.props.model.currentNode = null;
            } else {
                this.props.model.currentNode = this.props.node;
            }
        }

        render() {
            const cssClass = this.props.cssClass;
            const isCurrent = (this.props.model.currentNode === this.props.node ? true : false);
            let className = cssClass;
            if (isCurrent) {
                className += ' _current_node_';
            }
            if (this.props.model.xpathResult.nodes.includes(this.props.node)) {
                className += " _addressed_node_";
            }
            return (
                <span className={className} onClick={() => this.toggleCurrent()}>{this.props.children}</span>
            )
        }
    }
)
export default TreeViewActive;