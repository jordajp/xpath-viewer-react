import React, {Component} from 'react';
import {observer} from "mobx-react";

const TreeViewAttribute = observer(
    class TreeViewAttribute extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const nodeName = this.props.nodeName;
            const value = this.props.value;
            return (
                <span className="_attribute_" id={nodeName}>
                    <span> </span>
                    <span className="_attribute_name_">{nodeName}</span>
                    <span className="_attribute_equal">=</span>
                    <span className="_attribute_quote">"</span>{value}<span className="_attribute_quote">"</span>
                </span>
            )
        }
    }
)

export default TreeViewAttribute;
