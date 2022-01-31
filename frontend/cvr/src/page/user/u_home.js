import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import {postCV} from '../../api/api_calls';

class HomeUser extends React.Component {

    state = {
        cv_name: null,
        cv_surname: null,
        cv_email: null,
        cv_number: null,
        cv_education: null,
        cv_work_experience: null,
        cv_professional_experience: null
    }


    onChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        this.setState({
            [field]: value
        });
    }


    onSubmit = async event => {
        event.preventDefault();

        const { cv_name, cv_surname, cv_email, cv_number, cv_education, cv_work_experience, cv_professional_experience } = this.state;

        if (cv_name == null || cv_surname == null || cv_email == null || cv_number == null || cv_education == null || cv_work_experience == null || cv_professional_experience == null) {
            alert("lütfen boş alanları doldurun!!!");
        }else{
            const educationArry = cv_education.split(",");
            const workExperienceArry = cv_work_experience.split(",");
            const professionalExperience = cv_professional_experience.split(",");
    
            const body = {
                cv_name: cv_name,
                cv_surname: cv_surname,
                cv_email: cv_email,
                cv_number: cv_number,
                cv_education: educationArry,
                cv_work_experience: workExperienceArry,
                cv_professional_experience: professionalExperience
            }

            try{
               const response = await postCV(body);
               if(response.status == 200){
                   alert("saccessful");
               }else{
                   alert("something went wrong");
               }
            }
            catch(err){
                const message ="error : " + err.toString(); 
                alert(message);
            }
        }
    }



    render() {



        return (


            <div class="container">
                <div class="row custom-card">
                    <div class="col-12">
                        <div>
                            <h6>Create CV</h6>
                        </div>
                        <hr />
                    </div>
                    <div class="col-12 d-flex justify-content-center row">
                        <div class="col-12">
                            <img src={logo} width={128} alt="" />
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input name="cv_name" class="form-control" onChange={this.onChange} placeholder="Beytullah"></input>
                        </div>
                        <br />
                        <div class="form-group">
                            <label>Surname</label>
                            <input name="cv_surname" class="form-control" onChange={this.onChange} placeholder="Topuz"></input>
                        </div>
                        <br />
                        <div class="form-group">
                            <label>Email*</label>
                            <input name="cv_email" class="form-control" onChange={this.onChange} placeholder="email@example.com"></input>
                        </div>
                        <br />
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input name="cv_number" class="form-control" onChange={this.onChange} placeholder="555 555 55 55 "></input>
                        </div>
                        <br />
                        <hr />
                        <div>
                            <h6> Education </h6>

                            <div class="form-group">
                                <label>Education</label>
                                <input name="cv_education" class="form-control" onChange={this.onChange} placeholder="Yılzıdteknik"></input>
                            </div>
                            <br />
                            <div class="form-group">
                                <label>Work experience</label>
                                <input name="cv_work_experience" class="form-control" onChange={this.onChange} placeholder="js ,python "></input>
                            </div>
                            <br />
                            <div class="form-group">
                                <label>Professional experience</label>
                                <input name="cv_professional_experience" class="form-control" onChange={this.onChange} placeholder="vbt yazılım ,tein yazılım  "></input>
                            </div>

                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default HomeUser;