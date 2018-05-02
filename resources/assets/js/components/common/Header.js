import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Header extends React.Component {
    render() {
        return (
            
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </MuiThemeProvider>

            </div>
        );
    }
}