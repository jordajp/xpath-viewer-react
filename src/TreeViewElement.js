import React, {Component} from 'react';
import {observer} from "mobx-react";

const TreeViewElement = observer(
    class TreeViewElement extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const nodeName = this.props.nodeName;
            return (
                <div className="_element_"  id={nodeName}>
                    <span className="_open_tag_">&lt;{nodeName}{this.props.attributes.length > 0 ? this.props.attributes  : ''}&gt;</span>
                    {this.props.children}
                    <span className="_close_tag_">&lt;/{nodeName}&gt;</span>
                </div>
            )
        }
    }
)


export default TreeViewElement;