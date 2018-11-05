import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import XMLEditor from './XMLEditor';
import XPathForm from './XPathForm';
import AppModel from './AppModel';
import DevTools from 'mobx-react-devtools';
import TreeView from "./TreeView";
import XMLErrorPrinter from  "./XMLErrorPrinter";
import XPathErrorPrinter from  "./XPathErrorPrinter";
import XPathResultPrinter from  "./XPathResultPrinter";

const appStore= new AppModel();

console.log(appStore);


class App extends Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <h1>An XPath tester</h1>
            </header>
             <DevTools />
            <section className="xml-view">
                <section className="App-Editor">
                    <XMLEditor model={appStore}/>
                    <XMLErrorPrinter model={appStore}/>
                </section>
                <section className="App-Tree-View">
                    <XPathForm model={appStore}/>
                    <TreeView model={appStore}/>
                </section>
            </section>

            <section className="xpath-viewer">

                <XPathErrorPrinter model={appStore}/>
                <XPathResultPrinter model={appStore}/>
            </section>
        </div>;
    }
}

export default App;
