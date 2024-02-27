import React from "react";
import axios from 'axios';

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
      <div>
        <table border={1}>
          <tr>
            <td colSpan={2}>Login</td>
          </tr>
          <tr>
            <td>User:</td>
            <td>
              <input onChange={this.handlerUser} style={{ fontSize: "larger" }} />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input onChange={this.handlerPassword} style={{ fontSize: "larger" }} type="password" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={this.validateUser} style={{ width: "100%", fontSize: "larger" }}>
                Accept
              </button>
            </td>
          </tr>
        </table>
        <div style={{ color: "red" }}>{this.state.message}</div>
      </div>
    );
  }
}

export default Login;
