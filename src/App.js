import './App.css';
import { ReactComponent as SmallArrow } from "./arrow.svg";
import { useEffect } from "react";

const Checkbox = props => (
  <div onClick={() => {
    props.one(props.value)
  }}>
    <input type="checkbox" name={props.value} className="check"/>
    <label for={props.value}>{props.value}</label>
  </div>
)


function App() {
  const onlyOne = (checkbox) => {
    var checkboxes = document.getElementsByClassName('check');
    console.log(checkbox);
    [...checkboxes].forEach((item) => {
        if (item.name !== checkbox) item.checked = false
    })
  }

  const minimize = () => {
    // Add condition remove condition
    document.getElementById("box_body").style.height = document.getElementById("box_body").style.height === "10px" ? null : "10px";
    document.getElementById("box_control").style.transform = document.getElementById("box_control").style.transform === "rotateX(180deg)" ? null : "rotateX(180deg)";
  }

  (async () => {
    await new Promise(r => setTimeout(r, 2000));
    document.title = "youu"
  })();

  return (
    <>
      <div id="box_body" className="box_body">
        <div id="box_control" className="box_control" onClick={minimize}>
          <SmallArrow/>
        </div>
        <div id="box_content">
          <p >Did you find the website helpful?</p>
          <div id="box_options">
            {["Yes", "No"].map(value => <Checkbox value={value} one={onlyOne}/>)}
          </div>
          <div style={{paddingTop : 50, display: "flex", justifyContent : "flex-end"}}>
            <button>Submit</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
