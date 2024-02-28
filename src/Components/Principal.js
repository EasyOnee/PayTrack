import React from "react";
import logouts from '../assets/images/logouts.jpg';
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
      <div id="body-pd">
        <header className="header" id="header">
          <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
          <div className="header_img"> <img src={logouts} alt=""/> </div>
        </header>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div> 
              <a href="#" className="nav_logo"> 
                <i className='pi-money-bill'></i> 
                <span className="nav_logo-name">BBBootstrap</span> 
              </a>
              <div className="nav_list"> 
                <a href="#" className="nav_link active"> 
                  <i className='bx bx-grid-alt nav_icon'></i> 
                  <span className="nav_name">Dashboard</span> 
                </a> 
                <a href="#" className="nav_link"> 
                  <i className='bx bx-user nav_icon'></i> 
                  <span className="nav_name">Users</span> 
                </a> 
                <a href="#" className="nav_link"> 
                  <i className='bx bx-message-square-detail nav_icon'></i> 
                  <span className="nav_name">Messages</span> 
                </a> 
                <a href="#" className="nav_link"> 
                  <i className='bx bx-bookmark nav_icon'></i> 
                  <span className="nav_name">Bookmark</span> 
                </a> 
                <a href="#" className="nav_link"> 
                  <i className='bx bx-folder nav_icon'></i> 
                  <span className="nav_name">Files</span> 
                </a> 
                <a href="#" className="nav_link"> 
                  <i className='bx bx-bar-chart-alt-2 nav_icon'></i> 
                  <span className="nav_name">Stats</span> 
                </a> 
              </div>
            </div> 
            <a href="#" className="nav_link"> 
              <i className='bx bx-log-out nav_icon'></i> 
              <span className="nav_name">SignOut</span> 
            </a>
          </nav>
        </div>
        <div className="height-100 bg-light">
          <h4>Main Components</h4>
        </div>
      </div>
    );
  }
}

export default Principal;
{/* <Button onClick={this.colseSesion} label="Exit" severity="warning" rounded />
 */} 