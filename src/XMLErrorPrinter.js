import React, {Component} from 'react';
import {Message} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import {observer} from "mobx-react";


const XMLErrorPrinter = observer(
    class XmlErrorPrinter extends Component {
        render() {
            return (
                <Message warning className="xml-error-message">
                    <Message.Header>XML Error</Message.Header>
                    <p>{this.props.model.xmlError}</p>
                </Message>
            )
        }

    }
)

export default XMLErrorPrinter;