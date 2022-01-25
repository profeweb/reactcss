import React, {Component} from 'react';

class Header extends Component {

  render(){
    return (
      <div>
        <h1 style={{color: "red", backgroundColor: "lightblue"}}>Style Inline</h1>
        {/* 
            CSS inline a través de l'atribut style.
            Vius! Propietats CSS estil camelCase.
        */}
      </div>
    );
  }
}

export default Header;