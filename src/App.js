import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.compohent';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SingInSignUp from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
   super();
   this.state = {
    currentUser: null
   }
  }
   unsubscribeFromAuth = null;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged( user =>{
      this.setState({currentUser: user});
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sing-in' component={SingInSignUp} />
        </Switch>
      </div>
    );
  }
 
}
export default App;