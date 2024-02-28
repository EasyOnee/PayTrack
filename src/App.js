import logo from './logo.svg';
import './App.css';
import './Components/Login';
import './Components/Principal';
import Login from './Components/Login';
import Principal from './Components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
 

var x= localStorage.getItem('user');
function App() {

  let actual;
  if (x == null) {
    actual = <Login></Login>;
  }else
  {
    actual = <Principal></Principal>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {actual}
      </header>
    </div>
  );
}

export default App;