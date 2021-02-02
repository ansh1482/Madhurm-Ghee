import React from 'react';
import ProductCard from './components/product-card/product-card';
import img from './assets/1.gif';
import FormInput from './components/formInput/formInput';
import WelcomeScroll from './components/welcome-scroll';
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
        {/* <WelcomeScroll />
        <ProductCard productName='Madhurm Desi Ghee' productImage={img} />
        <ProductCard productName='Bal Gopal Desi Ghee' productImage={img} />
        <ProductCard productName='test 2' productImage={img} />
        <ProductCard productName='test 2' productImage={img} />
        <ProductCard productName='test 2' productImage={img} />
        <ProductCard productName='test 2' productImage={img} />
        <FormInput type='text' name='test' label='Name' />
        <ProductCard productName='test 2' productImage={img} /> */}
      </div>
    );
  }
}

export default App;
