import React from 'react';
import { getAllCv } from '../../api/api_calls';
import { Link } from 'react-router-dom';

class HomeAdmin extends React.Component {

    state = {
        cvList: []
    }
    componentDidMount() {
        return getAllCv().then(res => {
            this.setState({
                cvList: res.data
            });
        });
    }




    render() {


        const cvList = this.state.cvList;
        return (
            
            <div style={{padding: '50px', marginTop: '50px', overflow: 'auto'}}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div className='card-header text-center'>
                    CV LIST
                </div>
                <div className="list-group-item list-group-item-action p-4">

                                        <div className="row">
                                            <div className="col-sm">
                                                <h4>Name</h4>
                                            </div>
                                            <div className="col-sm">
                                                <h4>Surname</h4>
                                            </div>
                                            <div className="col-sm">
                                                <h4>Email</h4>
                                            </div>
                                            <div className="col-sm">
                                                <h4>Phone</h4>
                                            </div>
                                        </div>
                                    </div>

                {
                    cvList.map(function (cv, index) {
                        const link = "/cvdetail/" + cv.id;
                        return (
                            <Link to={link}  style={{textDecoration: 'none'}}>

                                <div key={cv.id} className='card'>


                                    <div className="list-group-item list-group-item-action p-4">

                                        <div className="row">
                                            <div className="col-sm">
                                                <i className="fa fa-user w3-margin-right w3-large w3-text-teal" />
                                                {cv.cv_name}
                                            </div>
                                            <div className="col-sm">
                                                {cv.cv_surname}
                                            </div>
                                            <div className="col-sm">
                                            <i className="fa fa-envelope w3-margin-right w3-large w3-text-teal" />
                                                {cv.cv_email}
                                            </div>
                                            <div className="col-sm">
                                            <i className="fa fa-phone w3-margin-right w3-large w3-text-teal" />
                                                {cv.cv_number}
                                            </div>
                                            
                                        </div>
                                    </div>


                                </div>

                            </Link>

                        );
                    })
                }
                   <footer className="w3-container w3-teal w3-center w3-margin-top">
          <p>Powered by Beytullah Topuz</p>
        </footer>
            </div>
        );
    }
}

export default HomeAdmin;