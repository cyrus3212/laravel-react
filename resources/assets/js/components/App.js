import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Header } from './common/Header';
import { Home } from './pages/Home';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home/>
            </div>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
