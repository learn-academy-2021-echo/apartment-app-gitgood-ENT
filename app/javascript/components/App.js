import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import './App.css'

class App extends React.Component {
  render () {
    return (
      <Router>
          <Header {...this.props} />
            <div className="notfooter">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/apartment-index" component={ApartmentIndex} />
              </Switch>
            </div>
          <Footer />
        </Router>
    );
  }
}

export default App
