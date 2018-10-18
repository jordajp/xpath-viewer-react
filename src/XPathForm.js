import React, {Component} from 'react';
import {Button, Input} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
import {observer} from "mobx-react";
//import xpath;

const XPathForm = observer(
    class XPathForm extends Component {
        constructor(props) {
            super(props);
        }

        onPress = () => {
            console.log("press");
        }

        render() {
            return (
                <form>
                    <Input className="xpath-form-input" placeholder="Enter XPath 1.0 expression"/>
                    <Button disabled={this.props.model.xmlError === null ? false : true} circular={true} content={"Submit"} onClick={() => this.onPress()}></Button>
                </form>
            )
        }
    }
)
export default XPathForm