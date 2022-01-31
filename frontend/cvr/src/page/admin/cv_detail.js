import React from 'react';
import { getOneCv } from '../../api/api_calls';


class DetayAdmin extends React.Component {

  state = {
    cv: {},
    hasCV: false
  }

  componentDidMount() {

    const id = this.props.match.params.id;


    return getOneCv(id).then(res => {

      if (res.status == 200) {
        console.log(res.data);
        this.setState({
          cv: res.data,
          hasCV: true
        });
      } else {
        this.setState({
          cv: res.data,
          hasCV: false
        });
      }

    });

  }



  render() {
    const cv = this.state.cv;
    let ui = (

      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        {/* The Grid */}
        <div className="w3-row-padding"  style={{marginTop: '100px'}}>
          {/* Left Column */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container row">
                <div class="col-12">
                    <img src="https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_user_old_people_senior_elderly-512.png" style={{ width: '50%' }} alt="Avatar" />
                </div>
                <div className="w3-container w3-text-black col-12">
                  <h2 className="display flex flex-direction">{cv.cv_name}</h2>
                </div>
              </div>
              <br />
              <div className="w3-container">
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Developer</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />{cv.cv_email}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />{cv.cv_number}</p>
                <hr />

                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Education</b></p>

                {
                  cv.cv_education?.map(function (value, index) {

                    return (
                      <div key={index} >
                        <p>{value}</p>


                      </div>
                    );
                  })
                }
                <br />
                <hr />


                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: '90%' }} />
                </div>



                <br />
              </div>
            </div><br />





          </div>
          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Professional Work Experience</h2>



              {
                cv.cv_professional_experience?.map(function (value, index) {

                  return (
                    <div key={index} >

                      <div className="w3-container">
                        <h5 className="w3-opacity"><b>{value}</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Dec - 2022</h6>
                        <hr />
                      </div>


                    </div>
                  );
                })
              }
            </div>






            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
              {
                cv.cv_work_experience?.map(function (value, index) {

                  return (
                    <div key={index} >

                      <div className="w3-container">

                        <h5 className="w3-opacity"><b> <span className="w3-tag w3-teal w3-round">{value}</span></b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />{index + 1}</h6>

                        <hr />
                      </div>


                    </div>
                  );
                })
              }



            </div>








           
          </div>
        </div>

      </div>
    );
    if (this.state.hasCV == false) {
      ui = (
        <div className="container d-flex justify-content-center align-items-center" style={{height: '675px'}}>
          <div className="p-5 mb-5 bg-danger text-dark" style={{borderRadius:'10px'}}>
            <h1 style={{color: "white"}}>CV Not Found!</h1>
          </div>
        </div>
      );
    }

    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{ __html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />


        {ui}

        <footer className="w3-container w3-teal w3-center w3-margin-top">
          <p>Powered by Beytullah Topuz</p>
        </footer>


      </div>
    );
  }
}

export default DetayAdmin;