import React, {Component} from 'react';

import TreeViewActive from "./TreeViewActive";

class TreeViewElement extends Component {
    render() {
        const nodeName = this.props.node.nodeName;
        let cssClass = '_element_name_';
        return (
            <div className="_element_" id={nodeName}>
                    <span className="_open_tag_">
                        <TreeViewActive cssClass={cssClass} node={this.props.node}
                                        model={this.props.model}>&lt;{nodeName}</TreeViewActive>{this.props.attributes.length > 0 ? this.props.attributes : ''}&gt;</span>
                {this.props.children}
                <span className="_close_tag_">&lt;/{nodeName}&gt;</span>
            </div>
        )
    }
}


export default TreeViewElement;