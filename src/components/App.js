import React, { Component } from "react";
import Login from "./Login";
// import Header from "./Header";
// import Footer from "./Footer"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export default class App extends Component {

  render() {
    return (
      <div>
      <MuiThemeProvider>
{/* <Header/> */}
 <Login/> 
{/* <Footer/> */}
      </MuiThemeProvider>
      </div>
    );
  }
}
