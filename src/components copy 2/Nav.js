import React from 'react'

export default function Nav(props) {
  let list = [];
  for(let i=0; i<props.nav.length; i++){
    list.push(<li key={props.nav[i].id}><a id={props.nav[i].id} href="/?id={props.nav[i].id}" onClick={
      (e)=>{
        e.preventDefault();
        props.changeMode(Number(e.target.id));
      }
    }>{props.nav[i].title}</a></li>)
  }
  return (
    <>
      <ol>
        {list}
      </ol>
    </>
  )
}
