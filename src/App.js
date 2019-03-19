import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="johndoe@gmail.com"
            phone="123-456-7890"
          />
          <Contact
            name="Emm Olivo"
            email="emm@gmail.com"
            phone="135-523-3663"
          />
        </div>
      </div>
    );
  }
}

export default App;
