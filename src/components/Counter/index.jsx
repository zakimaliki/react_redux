import React, { useState , useEffect } from "react";
import "./counter.css";
import styles from "./counter.module.css";

const Counter = () => {
  
  // const fontCustome = {
  //   fontSize :"100px",
  //   color : "red"
  // }

  // cannot render if it doesn't use state
  //   let count = 0;
  // const handlerIncrement=()=>{
  // count += 1;

  // use state
  const [count2x, setCount2x] = useState(0);
  const [count, setCount] = useState(0);

  // static value
  //   const handlerIncrement=()=>{
  //     setCount(
  //         count + 1
  //     )
  //   }

  // dynamic value
  const handlerIncrement = (val) => {
    setCount(count + val);
  };

  const handlerDecrement = (val) => {
    setCount(count - val);
  };

  // useEffect(()=>{
  //   alert("selmat datang")
  // },[])

  // useEffect(()=>{
  //   alert("selmat datang")
  // },[count])

  useEffect(()=>{
    setCount2x(count * 2)
  },[count])


  return (
    <div className="wrapper">
      <h1 style={{fontSize:'20px'}}> Feature Counter</h1>
      <p> 2 kali lipat count : {count2x}</p>

      {/* <h1 style={fontCustome}> Feature Counter</h1> */}
      <div className={styles.counterBlue}>
        {/* <button onClick={handlerIncrement}> + </button> */}
        <button onClick={() => handlerDecrement(5)}> - </button>
        <p>{count}</p>
        <button onClick={() => handlerIncrement(5)}> + </button>
      </div>
    </div>
  );
};

export default Counter;


