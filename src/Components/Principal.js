import React from "react";

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.colseSesion = this.colseSesion.bind(this);
  }

  colseSesion() {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    window.location.reload();
  }

  render() {
    var user = localStorage.getItem('user');
    var pass = localStorage.getItem('password');
    return (
      <div>
        <h1>The BestOne</h1>
        <h3>User: {user}</h3>
        <h3>Password: {pass}</h3>
        <br></br>
        <div>
          <button onClick={this.colseSesion} style={{ width: "100%", fontSize: "larger" }}>
            Exit
          </button>
        </div>
      </div>
    );
  }
}

export default Principal;
