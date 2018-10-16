import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';
//import xpath;

export default class XPathForm extends Component {
    constructor(props){
        super(props);
    }

    onPress = () => {
        console.log("Button pressed.")
    }
    render() {
        return(
                <form>
                    <input className="xpath-form-input"/>
                    <Button  circular={true} content={"Submit"} onClick={() => this.onPress()}></Button>
                </form>
        )
    }
}