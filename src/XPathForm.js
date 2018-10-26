import React, {Component} from 'react';
import {Button, Input} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import {observer} from "mobx-react";
//import xpath;

const XPathForm = observer(
    class XPathForm extends Component {
        constructor(props) {
            super(props);
            this.state = {xpathvalue: ''};
            this.handleChange = this.handleChange.bind(this);
        }

        onPress = () => {
            console.log("press");
        }

        handleChange(event) {
            this.props.model.xpathExpression = event.target.value;
        }

        render() {
            const xpathvalue = this.props.model.xpathExpression;
            return (
                <form>
                    <Input focus className="xpath-form-input" name="xpath-input" placeholder="Enter XPath 1.0 expression" value={xpathvalue} onChange={this.handleChange} disabled={this.props.model.xmlError === null ? false : true} >
                    </Input>

                </form>
            )
        }
    }
)
export default XPathForm