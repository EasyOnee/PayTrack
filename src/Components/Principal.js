import React from "react";                         
import { Button } from 'primereact/button';


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
        <Button onClick={this.colseSesion} label="Exit" severity="warning" rounded />
      </div>
    );
  }
}

export default Principal;
