import React, { Component } from "react";
// import logo from '../img/download.png';
import { Grid, Row, Col, Checkbox, Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import '../css/style.css';

 export default class Login extends Component {
    render() {
      return (
        <div className="Login-Bg">
        {/* <img src={logo} alt="logo" className="CompanyLogo" width="165" height="70" /> */}

        <Grid>
            <Row className="show-grid">
                <Col xs={12} md={7}></Col>
                <Col xs={12} md={5} className="LoginPage">
                    <h3>APPLICANT LOGIN</h3>
                    <Col xs={12} md={12} className="input-fileds">
                        <TextField hintText="Enter your Email id" floatingLabelText="Email Id" type="email" />
                    </Col>
                    <Col xs={12} md={12} className="input-fileds">
                        <TextField hintText="Enter your Password id" floatingLabelText="Password" type="password" />
                    </Col>
                    <Col xs={12} md={5} ClassName="kepSign">
                        <Checkbox inline>Keep me sign in</Checkbox>
                    </Col>
                    <Col xs={12} md={7}>
                        <p className="forgotpwd">ForgotPassword?</p>
                    </Col>
                    <Col xs={12} md={12}>
                        <Col md={3}></Col>
                        <Col md={4}>
                            <Button className="LoginButton"  >LOGIN</Button>
                        </Col>
                        <Col md={4}></Col>
                    </Col>
                    {/* <a href="/RegistrationPage"> Reg</a> */}
                </Col>
            </Row>
        </Grid>
    </div>
      );
    }
  }
