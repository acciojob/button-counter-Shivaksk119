
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setState] = useState(0)
  onClick=(e)=>{
    setState(count+1)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button Clicked {count} times</p>
        <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default App
