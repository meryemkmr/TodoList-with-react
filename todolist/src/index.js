import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus'
import BaseLayout from './components/layout/BaseLayout'
import Nomatch from './components/Nomatch';
import Blogs from './components/Blogs'
import Forms from './components/Forms'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'


ReactDOM.render(
  
    <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route exact path ="/" component = {App}/>
      <Redirect from = "/aboutus" to= "/"/>
      <Route path ="/aboutus" component = {Aboutus}/>
      <Route path ="/contactus" component = {Contactus}/>
      <Route path ="/blogs" component = {Blogs}/>
      <Route path ="/blogs/blogID" component = {Blogs}/>
      <Route path ="/forms" component = {Forms}/>
      
     
      <Route  component = {Nomatch}/>
    </Switch>
    </BaseLayout>
    </BrowserRouter>
  ,
  document.getElementById('root')
);


