import React, {useState} from "react";
import './App.css'; 

function App() {

  // * 1. easy data binding
  let sayReact = "Hello, React App!!!";
  let sayHello = () => "Hello, World!!!";
  
  // * 2. state
  let [intro, changeIntro] = useState("My name is ...");
  let [name, changeName] = useState(["jin", "min", "han"]);
  // ! variable이 아닌 state를 쓰는 이유: web이 app처럼 동작
  // ! state는 변경되면 auto rerendering, not in variable 
  // ! 따라서 변수보다 state를 사용하라는 말씀...

  let [heart, changeHeart] = useState(0);

  function getName(){
    let newName = [...name];
    newName[2] = "hin";
    changeName(newName);
  };

  return (
    <div className="App">
      {sayReact}

      <h4>
        {sayHello()}
      </h4>

      <div>
        {intro}
        <hr/>
      </div>

      {/* 1. onClick, 1씩 증가  */}
      <div>
        {name[0]}<span onClick={()=>{changeHeart(heart+1)}}>❤</span> {heart}
        <hr/>
      </div>

      {/* 2. onClick, 이름 변경 */}

      {/* 1) hard coding: not good idea */}
      <button onClick={()=>{changeName(["jin", "man", "han"])}}>change name</button>
      <div>
        {name[1]}<span>❤</span>
        <hr/>
      </div>

      {/* 2)  */}
      <button onClick={getName}>change name</button>
      <div>
        {name[2]}<span>❤</span>
        <hr/>
      </div>
    </div>
  );
}

// import { Component } from "react";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Section from "./components/Section";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header title="Web"></Header>
//         <Nav></Nav>
//         <Section title="Web" desc="Web is ..."></Section>
//       </div>
//     );
//   }
// }

export default App;
