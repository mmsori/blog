import React, { Component , useState, useEffect} from 'react'


const MainPage = (props) => {
    
    const [number, setNumber] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${number} times`;
      });
  return (
      
      <div style={{ textAlign: "center" }}>
      
      <div style={{ fontSize: "100px" }}>{number}</div>
      <div >{props.title}</div>
      <button onClick={() => setNumber(number + 1)}>더하기</button>
      <button onClick={() => setNumber(number - 1)}>빼기</button>
      
    </div>
  );
}
export default MainPage;