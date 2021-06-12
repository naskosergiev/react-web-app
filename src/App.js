import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from "react-particles-js";
import "./App.css";

const particlesOptions = {
  particles:{
                  number: {
                    value: 200,
                    density: {
                      enable: true,
                      value_area: 1000
                    }
                  }
                
              
            
          }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <Particles
          className="particals"
          params={particlesOptions}
          
        />
      </div>
    );
  }
}

export default App;
