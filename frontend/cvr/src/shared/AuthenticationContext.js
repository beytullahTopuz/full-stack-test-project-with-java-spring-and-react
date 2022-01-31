import React, { Component } from "react";

export const Authentication = React.createContext();

class AuthenticationContext extends Component {

    state = {
        isLogdIn: false,
        useremail: undefined,
        username: undefined,
        usersurname: undefined,
        usertype: undefined,
        userpassword: undefined
    }

    onLoginSuccess = authState => {
        this.setState({
            useremail: authState.useremail,
            username: authState.username,
            usersurname: authState.usersurname,
            usertype: authState.usertype,
            userpassword: authState.userpassword,
            isLogdIn: true
        });
    }
    onLogoutSuccess = useremail => {
        this.setState({
            useremail: undefined,
            isLogdIn: false
        });
    }

    render() {
        return (
            <Authentication.Provider value={{
                state: { ...this.state },
                onLoginSuccess: this.onLoginSuccess,
                onLogoutSuccess: this.onLogoutSuccess
            }}>
                {this.props.children}
            </Authentication.Provider>
        );
    }
}

export default AuthenticationContext;