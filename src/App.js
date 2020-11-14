import React from 'react';
import styles from './App.module.css';
import Layout from './componenets/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div className="App">
        <Layout>
          <BurgerBuilder/>
        </Layout>
    </div>
  );
}
// The module extension when used can help us in using the css outside the components.
export default App;
/*This layout component is created so that if some other component needs to be added then it can be done easily afterwards */
