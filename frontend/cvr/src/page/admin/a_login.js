import React from 'react';
import { loginAdmin } from '../../api/api_calls';
import { Authentication } from '../../shared/AuthenticationContext';


class LoginAdminPage extends React.Component {

    static contextType = Authentication;

    state = {
        user_email: null,
        user_password: null
    }

    onChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        this.setState({
            [field]: value
        });
    }


    onClictlogin = async event => {
        event.preventDefault();

        const { user_email, user_password } = this.state;
        const onLoginSuccess = this.context.onLoginSuccess;

        const creds = {
            username: user_email,
            password: user_password
        }
        console.log(creds);

        try {
            const res = await loginAdmin(creds);
            if (res.status == 200) {
                console.log("login success");

                const authState = {
                    useremail: user_email,
                    username: res.data.username,
                    usersurname: res.data.usersurname,
                    usertype: "admin_user",
                    userpassword: user_password,
                }

                onLoginSuccess(authState);

                this.props.history.push('/ahome');
            }
        } catch (err) {

            alert("Login failed \n" + err);
            console.log("login failed");
        }

    }

    render() {
        return (

            <div>

                <div className="w-100 d-flex justify-content-center align-items-center row" style={{ height: "600px" }}>
                    <div className="row w-50" style={{ textAlign: "start" }}>
                        <div className='card' style={{ borderRadius: "20px", padding: "40px", backgroundImage: "linear-gradient(to right, #1A374D , #406882)" }} >

                            <h1 className="col-12 text-center" style={{ color: "white" }}> Admin Login</h1>
                            <br />
                            <form style={{ color: "white" }}>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input name="user_email" class="form-control" onChange={this.onChange} placeholder="email@example.com"></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label>Password</label>
                                    <input name="user_password" class="form-control" onChange={this.onChange} type={"password"} placeholder="********"></input>
                                </div>
                                <br />
                                <div>
                                    <label class="form-label">Create an account</label>
                                </div>
                                <br></br>
                                <div class="text-end">
                                    <button type="submit" className="btn btn-info btn-lg" onClick={this.onClictlogin}>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default LoginAdminPage;