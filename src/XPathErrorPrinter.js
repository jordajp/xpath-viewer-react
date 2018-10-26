import React, {Component} from 'react';
import {Message} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import {observer} from "mobx-react";


const XPathErrorPrinter = observer(
    class XPathErrorPrinter extends Component {
        render() {
            return (
                <Message warning className="xpath-error-message">
                    <Message.Header>XPath Error</Message.Header>
                    <p>{this.props.model.xpathResult.error}</p>
                </Message>
            )
        }

    }
)

export default XPathErrorPrinter;