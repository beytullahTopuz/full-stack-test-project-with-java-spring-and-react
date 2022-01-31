import React from 'react';
import { signup } from "../../api/api_calls";
import Input from "../../companents/Input";
import {Authentication} from '../../shared/AuthenticationContext';



class UserRegisterPage extends React.Component {

    static contextType = Authentication;

    
    
    state = {
        user_name: null,
        user_surname: null,
        user_email: null,
        user_password: null,
        pandingApiCall: false,
        errors:{}
    }

    onChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const errors = {...this.state.errors};

       
       
        errors.name = undefined;
    
        console.log(value);
        this.setState({
            [field]: value,
            errors
        });
    }


    onClickSignUp = async event => {
        event.preventDefault();

        const { user_name, user_surname, user_email, user_password } = this.state;

        const onLoginSuccess = this.context.onLoginSuccess;
       
        const body = {
            username: user_name,
            usersurname: user_surname,
            useremail: user_email,
            userpassword: user_password,
            usertype: "standart_user"
        }


        this.setState({pandingApiCall: true});
        try {
            const res = await signup(body);
            if(res.status == 200){
                console.log("user createed");

                const authState = {
                    useremail: user_email ,
                    username: res.data.username,
                    usersurname: res.data.usersurname,
                    usertype: "standart_user",
                    userpassword: user_password,
                }
             //   console.log(authState);
                onLoginSuccess(authState);
              this.props.history.push('/uhome');       
            }
        }catch(err){
           // console.log(err.response.data);
           if(err.response.data.validationError){
            this.setState({errors: err.response.data.validationError});
           }
            
        }
        this.setState({pandingApiCall: false});

    }

    render() {
        const {errors} = this.state;
        const {email, name, surname, password} = errors;
        return (
            <div>
               
                <div className="w-100 d-flex justify-content-center align-items-center row" style={{ height: "600px"}}>
                    <div className="row w-50"  style={{ textAlign: "start" }}>
                    <div className='card' style={{ borderRadius: "20px", padding: "40px", backgroundImage: "linear-gradient(to right, #5C9F97 , #97B088)" }} >
                        <h1 className="col-12" style={{ color: "white" }}>User Register</h1>
                        <form className="needs-validation">
                            <Input name="user_name" label="Name" error={name} onChange={this.onChange} placeholder="Beytullah"/>
                           <br/>
                            <Input name="user_surname" label="Surname" error={surname} onChange={this.onChange} placeholder="topuz"/>
                           <br/>
                            <Input name="user_email" label="Email" error={email} onChange={this.onChange} placeholder="email@example.com"/>
                            <br/>
                            <Input name="user_password" label="Password" error={password} onChange={this.onChange} placeholder="**********"/>
                       
                           <br></br>
                            <div class="text-end">
                            <button 
                            type="submit" className="btn btn-info btn-lg"
                            onClick={this.onClickSignUp}
                            disabled={this.state.pandingApiCall}
                            >Register</button>
                              </div>
                            
                        </form>
                        </div>
                    </div>
                </div>

            </div>
        );

    }



}
export default UserRegisterPage;


/*

onClick={this.onClickSignUp}

*/