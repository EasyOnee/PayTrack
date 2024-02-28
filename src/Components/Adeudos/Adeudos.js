import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaUserGraduate, FaMoneyBillAlt } from 'react-icons/fa'; // Importamos los iconos de FontAwesome


class Adeudos extends React.Component {
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
    return (
      <div className="container-fluid">
        <div className="row" >
          <div className="col-md-1 bg-dark" style={{ minHeight: "100vh" }}>

            {/* Sidebar */}
            <div className="sidebar d-flex flex-column justify-content-between">
              
              {/* Enlaces de navegación */}
              <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item>
                <Nav.Link href="/home" className="text-light d-flex flex-column align-items-center">
                  <FaHome size={28} />
                  <span style={{ fontSize: '12px' }}>Inicio</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="text-light d-flex flex-column align-items-center">
                  <FaUserGraduate size={28} />
                  <span style={{ fontSize: '12px' }}>Estudiantes</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="text-light d-flex flex-column align-items-center">
                  <FaMoneyBillAlt size={28} />
                  <span style={{ fontSize: '12px' }}>Finanzas</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

                        {/* Botón Cerrar Sesión */}
            <div className="sidebar-bottom text-center">
              <button className="btn btn-danger btn-sm" onClick={this.colseSesion}>Cerrar Sesión</button>
            </div>

            </div>
          </div>
          <div className="col-md-10">
            {/* Contenido de la página */} 

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Adeudos;