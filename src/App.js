import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Element from "./components/Element";
function App() {
  const [show, setShow] = useState(false);

  const handleShow = async () => {
    await getData();
    setShow(true);
  };

  const [numbers, setNumbers] = useState([]);

  const getData = async () => {
    fetch("http://localhost:3001/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNumbers(data);
      });
  };
  return (
    <div className="App">
      <h1>Hello to my new App</h1>

      <button onClick={handleShow}>Fetch</button>
      {setShow ? numbers.map((i) => <Element data={i} key={i} />) : null}
    </div>
  );
}

export default App;
