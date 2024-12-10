
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [state,setState] = useState(0)
  onClick=(e)=>{
    let count = state
    count++
    setState({state:count})
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {state} times</p>
        <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default App
