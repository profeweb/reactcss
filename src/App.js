import React, {Component} from 'react';

// Estil CSS
import './App.css';

import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

class App extends Component {

  constructor(props){
    super();
  }

  render(){
    return (
      <div>
        <Header/>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;