import React, {Component} from 'react';

const estilContent = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
};

class Content extends Component {

  render(){
    return (
      <div>
        <h1 style={estilContent}>Style Objecte</h1>
        {/* 
          CSS inline a través d'objecte.
        */}
      </div>
    );
  }
}

export default Content;