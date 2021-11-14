import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Successful Submission" />
                    <h1>Thank You!</h1>
                    <p>A confirmation will be sent to the email address you have provided.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;