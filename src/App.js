import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';

export default function App() {
  let [title, setTitle] = useState("Web");
  let [desc, setDesc] = useState("Web is ...");

  return (
    <div>
      <Header title={title}></Header>
      <Nav></Nav>
      <Section title={title} desc={desc}></Section>
    </div>
  )
}
