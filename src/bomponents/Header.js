import React, {useState} from 'react'

export default function Header(props) {
  const [topic, setTopic] = useState("Web"); 
  const [count, setCount] = useState(1);
  const [name, setName] = useState(["jin", "min", "hin"]);
  const [number, setNumber] = useState([2, 3, 1]);
  return (
    <>
      <div className='header'>
        <header>
          <h1><a href="/" onClick={
            (e)=>{
              e.preventDefault();
              setTopic("Mobile");
            }
          }>{topic}</a></h1>
        </header>
      </div>
      <>
          <span onClick={
            ()=>{
              setCount(count+1);
            }
          }>💥</span> {count}
      </>
      {/* <div>
        <button onClick={
          ()=>{
            let newName = [...name];
            newName[0] = "jon";
            setName(newName);
          }
        }>changeName01</button>
        <h3>{name[0]}</h3>
      </div> */}
      <> {/* fragment */}
        <button onClick={
          ()=>{
            let newNumber = [...number];
            setNumber(newNumber.sort((a, b)=>a-b));
          }
        }>changeName02</button>
        <h3>{number[0]}</h3>
      </>
    </>
  )
}
