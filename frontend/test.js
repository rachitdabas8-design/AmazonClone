import React from "react";
import { useState } from "react";

function AboutMe(){
  const [count , setCount] = useState(0);

  const clickButton = () => {
    setCount(count + 1);
  }
  return(
    <div>
      <h1>my name is rachit.</h1>
      <button onClick={clickButton}>
        click Me
      </button>
      <h2>{count}</h2>
      <h3>{count % 2 === 0 ? "Even NUmber" : "odd number"}</h3>
    </div>
    
  )
}
