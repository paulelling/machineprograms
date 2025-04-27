import logo from './logo.svg';
import './App.css';

function App() {

  var user = fetch("http://localhost:8080/user?id=1")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("firstNameLabel").innerHTML = data["firstName"]
    })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <label id="firstNameLabel"></label>
        </p>
      </header>
    </div>
  );
}

export default App;
