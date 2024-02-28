import './App.css';
import './Components/Login/Login';
import './Components/Adeudos/Adeudos';
import Login from './Components/Login/Login';
import Adeudos from './Components/Adeudos/Adeudos';
import 'bootstrap/dist/css/bootstrap.min.css';

//tema
import "primereact/resources/themes/lara-light-indigo/theme.css";

//núcleo
import "primereact/resources/primereact.min.css";

//iconos
import "primeicons/primeicons.css";



var x= localStorage.getItem('user');
function App() {

  let actual;
  if (x == null) {
    actual = <Login></Login>;
  }else
  {
    actual = <Adeudos></Adeudos>;
  }

  return (
    <div>
      <header>
        {actual}
      </header>
    </div>
  );
}

export default App;