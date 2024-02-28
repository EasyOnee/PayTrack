import React from "react";
import axios from 'axios';
import logouts from '../assets/images/logouts.jpg';
import Button from 'react-bootstrap/Button';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      message: "",
    };

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
      const response = await axios.get(
        `https://loggin-5d879-default-rtdb.firebaseio.com/LuisCarlosPerzaArballo.json`
      );

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
            this.setState({ message: "Contraseña incorrecta." });
          }
        } else {
          this.setState({ message: "Usuario no encontrado." });
        }
      } else {
        this.setState({ message: "Error al obtener datos del servidor." });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ message: "Error al buscar." });
    }
  }

  render() {
    return (
      <div className="login-container">
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

          <button onClick={this.validateUser} className="btn btn-primary btn-lg">
            Accept
          </button>
          <div className="error-message">{this.state.message}</div>
        </div>
      </div>
    );
    
  }
}

export default Login;
