import React, {Component} from 'react';
import TreeViewActive from "./TreeViewActive";

class TreeViewText extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const value = this.props.node.textContent;
        const node = this.props.node;
        return (
            <TreeViewActive cssClass="_text_" model={this.props.model} node={node}>
                {value}
            </TreeViewActive>
        )
    }
}


export default TreeViewText;
