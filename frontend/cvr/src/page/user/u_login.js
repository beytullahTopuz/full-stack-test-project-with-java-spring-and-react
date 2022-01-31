//import axios from "axios";
import React from 'react';
import { login } from '../../api/api_calls';
import { Authentication } from '../../shared/AuthenticationContext';



class UserLoginPage extends React.Component {
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
        //  console.log(creds);

        try {
            const res = await login(creds);
            if (res.status == 200) {
                console.log("login success");

                const authState = {
                    useremail: user_email,
                    username: res.data.username,
                    usersurname: res.data.usersurname,
                    usertype: "standart_user",
                    userpassword: user_password,
                }
                //  console.log(authState);
                onLoginSuccess(authState);
                this.props.history.push('/uhome');
            }
        } catch (err) {
            console.log(err);
            alert("Login failed \n" + err);
            console.log("login failed");
        }

    }

    render() {
        return (
            <>



                <div className="w-100 d-flex justify-content-center align-items-center row" style={{ height: "600px" }}>
                    <div className="row w-50" style={{ textAlign: "start" }}>
                        <div className='card' style={{ borderRadius: "20px", padding: "40px", backgroundImage: "linear-gradient(to right, #5C9F97 , #97B088)" }} >

                            <h1 className="col-12" style={{ color: "white" }}> User Login</h1>
                            <form>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input name="user_email" class="form-control" onChange={this.onChange} placeholder="email@example.com"></input>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input name="user_password" class="form-control" onChange={this.onChange} type={"password"} placeholder="********"></input>
                                </div>

                                <br></br>
                                <div class="text-end">
                                    <button type="submit" className="btn btn-info btn-lg" onClick={this.onClictlogin}>Login</button>
                                </div>
                            </form>


                        </div>

                    </div>
                </div>

            </>

        );
    }



}
export default UserLoginPage;