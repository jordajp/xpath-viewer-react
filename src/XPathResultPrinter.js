import React, {Component} from 'react';
import {Message} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import {observer} from "mobx-react";


const XPathResultPrinter = observer(
    class XPathResultPrinter extends Component {
        render() {
            return (
                <Message warning className="xpath-error-message">
                    <Message.Header>XPath Result</Message.Header>
                    <p>{this.props.model.xpathResult.value}</p>
                </Message>
            )
        }

    }
)

export default XPathResultPrinter;