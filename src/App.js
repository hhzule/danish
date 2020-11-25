import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import Quiz from './components/pages/Quiz';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route path="/quiz" component={Quiz} />
          <Route component={NotFoundPage} />
        </Switch>
        <div className="footer">
          <Footer />

        </div>
      </div>
    );
  }
}

export default App;
