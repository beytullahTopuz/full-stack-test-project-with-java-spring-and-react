import React from "react";
import logo from '../assets/logo.png';
import { HashRouter, Link } from "react-router-dom";
import { Authentication } from '../shared/AuthenticationContext';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class TopBar extends React.Component {
  
    render() {

      return(
        <Authentication.Consumer>

        {
            value => {
              

                const { state, onLogoutSuccess } = value;
                const isLogdIn = state.isLogdIn;
                const username = state.username;
                const usertype = state.usertype;


              
                let links = (
                    <div style={{display: 'flex', justifyContent: 'flex-end', backgroundColor: '#009688', color: 'white'}}>
                        <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="uregister" >User Register </Link>
                        <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="ulogdin" >User Login  </Link>
                        <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="aregister" >Admin Register </Link>
                        <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="alogdin" >Admin Login  </Link>
                    </div>
                );
                console.log(username);
                if (isLogdIn == true) {
              
                    links = (
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="ulogdin" onClick={onLogoutSuccess} > Logout </Link>
                            <a className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" > {state.useremail} </a>
                        </div>
                    );
                }

                return (
                    <div>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <style dangerouslySetInnerHTML={{ __html: "\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Lato\", sans-serif}\n.w3-bar,h1,button {font-family: \"Montserrat\", sans-serif}\n.fa-anchor,.fa-coffee {font-size:200px}\n" }} />

                        <div className="w3-top">

                            <div className="w3-bar w3-light w3-card w3-left-align w3-large" style={{backgroundColor: '#009688', color: 'white'}}>

                                <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white"> <img src={logo} width={24} alt="" /></a>
                                <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">CVR</a>
                                {links}
                            </div>

                        </div>
                    </div>
                );
            }
        }
    </Authentication.Consumer>
      );





    }
}

export default TopBar;