import React, {useState} from 'react'
import Header from './components/Header'
import Insert from './components/Insert';
import Nav from './components/Nav'
import Section from './components/Section';
import Update from './components/Update';

export default function App() {
  const [nav, setNav] = useState([
    {id:1, title:"HTML", desc:"HTML is ..."},
    {id:2, title:"CSS", desc:"CSS is ..."},
    {id:3, title:"JavaScript", desc:"JavaScript is ..."}
  ])
  const [mode, setMode] = useState();
  let sect = null;
  const [id, setId] = useState();
  const [newId, setNewId] = useState(4);
  let control = null;
  if(mode === "welcome"){
    sect = <Section title="Web" desc="Web is ..."></Section>
  } else if(mode === "nav"){
    for(let i=0; i<nav.length; i++){
      if(nav[i].id === id){
        sect = <Section title={nav[i].title} desc={nav[i].desc}></Section>
      }
    }
    control = <>
      <p><a href="/update" onClick={
        (e)=>{
          e.preventDefault();
          setMode("update");
        }
      }>update</a></p>
     <p><input type="button" value="delete" onClick={
       ()=>{
         let newNav = [];
         for(let i=0; i<nav.length; i++){
           if(nav[i].id !== id){
             newNav.push(nav[i]);
           }
         }
         setNav(newNav);
         setMode("welcome");
       }
     }/></p> 
    </>;
  } else if(mode === "insert"){
    sect = <Insert onInsert={
      (title, desc)=>{
        let insertNav = {id:newId, title:title, desc:desc};
        let newNav = [...nav];
        newNav.push(insertNav);
        setNav(newNav);
        setMode("nav"); // !
        setId(newId);
        setNewId(newId+1);
      }
    }></Insert>;
  } else if(mode === "update"){
    for(let i=0; i<nav.length; i++){
      if(nav[i].id === id){
        sect = <Update title={nav[i].title} desc={nav[i].desc} onUpdate={
          (title, desc)=>{
            let updateNav = {id: id, title: title, desc: desc};
            let newNav = [...nav];
            for(let i=0; i<newNav.length; i++){
              if(newNav[i].id === id){
                newNav[i] = updateNav;
                break;
              }
            }
            setNav(newNav);
            setMode("nav");
          }
        }></Update>
      }
    }
  }
  return (
    <>
      <Header changeMode={
        ()=>{
          setMode("welcome");
        }
      }></Header>
      <Nav nav={nav} changeMode={
        (id)=>{
          setMode("nav");
          setId(id);
        }
      }></Nav>
      {sect}
      <p><a href="/insert" onClick={
        (e)=>{
          e.preventDefault();
          setMode("insert");
        }
      }>insert</a></p>
      {control}
    </>
  )
}
