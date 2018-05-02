import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';

const muiTheme = getMuiTheme({
    palette: {
      textColor: cyan500,
    },
    appBar: {
      height: 50,
    },
});

export class Home extends React.Component {

    state = {
        open: false,
    };

    // handleOpen = () => {
    //     this.setState({open: true});
    // };
    
    // handleClose = () => {
    //     this.setState({open: false});
    // };

    handleToggle = () => {
        this.setState({open: !this.state.open})
    };

    render() {

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
        ];

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {/* <RaisedButton label="Dialog" onClick={this.handleOpen} /> */}
                    <RaisedButton
                        label="Toggle Drawer"
                        onClick={this.handleToggle}
                    />
                    {/* <Dialog
                        title="Dialog With Actions"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                        The actions in this window were passed in as an array of React objects.
                    </Dialog> */}
                    <Drawer open={this.state.open}>
                        <ul>
                            <li>test</li>
                        </ul>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}