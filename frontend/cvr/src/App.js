import './App.css';
import React from 'react';

import UserLoginPage from './page/user/u_login';
import UserRegisterPage from './page/user/u_register';
import HomeUser from './page/user/u_home';
import HomeAdmin from './page/admin/a_home';

import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import RegisterAdminPage from './page/admin/a_.register';
import LoginAdminPage from './page/admin/a_login';
import DetayAdmin from './page/admin/cv_detail';
import TopBar from './companents/topBar';
import StartPage from './page/startpage';


class App extends React.Component {



  render(){
 
   

    return (
      <div className='App' >
        <Router>
          <TopBar/>
          <Switch>
            <Route exact path="/" component={StartPage} /> ({ /*  start page  */})
            <Route path="/uregister" component={UserRegisterPage} />    
            <Route path= "/ulogdin" component={UserLoginPage} />
            <Route path="/uhome" component={HomeUser} />
            <Route path="/ahome" component={HomeAdmin} />
            <Route path="/aregister" component={RegisterAdminPage} />
            <Route path="/alogdin" component={LoginAdminPage} />
            <Route path="/cvdetail/:id" component={DetayAdmin} />
          </Switch>
        </Router>
      </div>
    );
  }
 
}

export default App;
