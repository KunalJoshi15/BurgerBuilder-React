import React from 'react';
import styles from './App.module.css';
import Layout from './componenets/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route,Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
function App() {
  return (
    <div className="App">
        <Layout>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/" exact component={BurgerBuilder}/>
        </Layout>
    </div>
  );
}
// The module extension when used can help us in using the css outside the components.
export default App;
/*This layout component is created so that if some other component needs to be added then it can be done easily afterwards */
