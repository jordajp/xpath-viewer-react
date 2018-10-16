import React, {Component} from 'react';
import {render} from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import './semantic/dist/semantic.min.css';
import 'brace/mode/xml';
import 'brace/theme/github';


class XMLEditor extends Component {

        constructor(props) {
            super(props);
            console.log("model : " + this.props);
        }

        onChange = (newValue) => {
            console.log("Edit: " + newValue);
            const store = this.props.model;
            console.log("store:" + store );
            store.xmlContent = newValue;
            store.isWellFormed = store.parseContent(newValue)
        }

        render() {
            return (
                <div>

                    <AceEditor
                        mode="xml"
                        theme="github"
                        onChange={this.onChange}

                        name={"xml-editor"}
                        editorProps={{
                            $blockScrolling: true
                        }}
                    />

                </div>

            )
        }
    }
export default XMLEditor;
