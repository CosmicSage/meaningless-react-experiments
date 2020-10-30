import logo from './logo.svg';
import './App.css';
import { ReactComponent as SmallArrow } from "./arrow.svg";
function App() {
  const minimize = () => {
    document.getElementById("box_body").style.height = document.getElementById("box_body").style.height === "10px" ? null : "10px";
    document.getElementById("box_control").style.transform = document.getElementById("box_control").style.transform === "rotateX(180deg)" ? null : "rotateX(180deg)";
  }
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
        <div id="box_body" className="box_body">
        <div id="box_control" className="box_control" onClick={minimize}>
          <SmallArrow/>
        </div>

        <p>logogo</p>
        </div>
      </header>
    </div>
  );
}

export default App;
