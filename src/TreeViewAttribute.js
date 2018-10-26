import React, {Component} from 'react';
import TreeViewActive from "./TreeViewActive";


class TreeViewAttribute extends Component {

    render() {
        let cssClass = '_element_name_';
        const value = this.props.node.value;
        return (
            <TreeViewActive cssClass={cssClass} node={this.props.node} model={this.props.model}>
                <span> {this.props.node.name}</span>
                <span className="_attribute_equal">=</span>
                <span className="_attribute_quote">"</span>{value}<span className="_attribute_quote">"</span>
            </TreeViewActive>
        )
    }
}


export default TreeViewAttribute;
