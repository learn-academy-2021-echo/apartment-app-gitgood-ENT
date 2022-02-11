import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import './App.css'

import apartments from './mockData';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: apartments
    }
  }
  render () {
    console.log(this.state.apartments);
    return (
      <Router>
          <Header {...this.props} />
            <div className="notfooter">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route 
                  path="/apartment-index" 
                  render={(props) => <ApartmentIndex apartments={this.state.apartments} />}
                />
              </Switch>
            </div>
          <Footer />
        </Router>
    );
  }
}

export default App
