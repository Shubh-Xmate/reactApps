import React, {useState} from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick()
  {
    console.log("I got clicked");
  }

  function hovering()
  {
    setMouseOver(true);
  }

  function outing()
  {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick = {handleClick} style = {{backgroundColor : (isMouseOver) ? "white" : "black"}} onMouseOver = {hovering} onMouseOut = {outing}>Submit</button>
    </div>
  );
}

export default App;
