import React, {Component} from 'react';
import {observer} from "mobx-react";

const TreeViewText = observer(
    class TreeViewText extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            const value = this.props.value;
            return (
                    <span className="_text_">{value}</span>
            )
        }
    }
)

export default TreeViewText;
