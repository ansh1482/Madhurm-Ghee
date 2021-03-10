import React from 'react';
import FootBar from './components/footbar/footbar';
import NavigationBar from './components/navigation-bar/navigation-bar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ContactPage from './pages/contact/contact';
import AboutPage from './pages/about/about';
import ProductPage from './pages/product/product';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavigationBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/product' component={ProductPage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        <FootBar />
      </div>
    );
  }
}

export default App;
