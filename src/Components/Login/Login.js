import React, { useRef } from "react";
import axios from 'axios';
import logouts from '../../assets/images/logouts.jpg';
import { Messages } from 'primereact/messages';
import '../../Components/Login/Login'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };

    this.messagesRef = React.createRef();

    this.handlerUser = this.handlerUser.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  handlerUser(event) {
    this.setState({ user: event.target.value });
  }

  handlerPassword(event) {
    this.setState({ password: event.target.value });
  }

  async validateUser() {
    const { user, password } = this.state;

    try {
      const response = await axios.get(`/api/validateUser/${user}`); // Cambiado para llamar al backend

      const userData = response.data;
      if (userData) {
        const userExists = Object.keys(userData).some(
          key => userData[key].User.toLowerCase() === user.toLowerCase()
        );
        if (userExists) {
          const userObject = Object.values(userData).find(
            userObj => userObj.User.toLowerCase() === user.toLowerCase()
          );
          if (userObject.Password === parseInt(password, 10)) {
            localStorage.setItem('user', user);
            localStorage.setItem('password', password);
            window.location.reload();
          } else {
            this.messagesRef.current.show({ severity: 'error', summary: 'Error', detail: 'Contraseña incorrecta.' });
          }
        } else {
          this.messagesRef.current.show({ severity: 'error', summary: 'Error', detail: 'Usuario no encontrado.' });
        }
      } else {
        this.messagesRef.current.show({ severity: 'error', summary: 'Error', detail: 'Error al obtener datos del servidor.' });
      }
    } catch (error) {
      console.error('Error:', error);
      this.messagesRef.current.show({ severity: 'error', summary: 'Error', detail: 'Error al buscar.' });
    }
  }

  render() {
    return (
      <div className="login-container App-header App">
        <div className="logo-container">
          <img className="logo" src={logouts} alt="logo" />
        </div>
        <div className="form-container">
          <div className="input-container">
            <input onChange={this.handlerUser} className="input-field" placeholder="Ingrese su Matricula" />
          </div>
          <div className="input-container">
            <input onChange={this.handlerPassword} className="input-field" type="password" placeholder="Ingrese su Contraseña" />
          </div>

          <button onClick={this.validateUser} className="btn btn-primary ">
            Accept
          </button>
        </div>
        <div>
          <Messages className="alert" ref={this.messagesRef} />
        </div>
      </div>
    );
  }
}

export default Login;
