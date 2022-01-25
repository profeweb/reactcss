import React, {Component} from 'react';
import estilFooter from './Footer.css';

class Footer extends Component {

  render(){
    return (
      <div>
        <h1 className={estilFooter.bigblue}>Style Mòdul</h1>
        {/* 
            CSS  a través de mòdul.
            Vius! Cal importar el mòdul.
        */}
      </div>
    );
  }
}

export default Footer;