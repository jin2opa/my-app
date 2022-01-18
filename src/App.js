// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello, React App!!!
//     </div>
//   );
// }

import { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Web"></Header>
        <Nav></Nav>
        <Section title="Web" desc="Web is ..."></Section>
      </div>
    );
  }
}

export default App;
