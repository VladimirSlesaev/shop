import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.compohent';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SingInSignUp from './pages/sing-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sing-in' component={SingInSignUp} />
      </Switch>
    </div>
  );
}
export default App;