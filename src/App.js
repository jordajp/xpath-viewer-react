import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import XMLEditor from './XMLEditor';
import XPathForm from './XPathForm';
import AppModel from './AppModel';
import DevTools from 'mobx-react-devtools';
import TreeView from "./TreeView";

const appStore= new AppModel();

console.log(appStore);


class App extends Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <h1>An XPath tester</h1>
            </header>
             <DevTools />
            <section className="App-Editor">
                <XMLEditor model={appStore}/>
            </section>
            <section className="xpath-viewer">
                <XPathForm model={appStore}/>
                <TreeView model={appStore}/>
            </section>
        </div>;
    }
}

export default App;
