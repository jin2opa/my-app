import React from 'react'

export default function Header(props) {
  return (
    <>
      <header>
        <h1><a href="/" onClick={
          (e)=>{
            e.preventDefault();
            props.changeMode();
          }
        }>Web</a></h1>
      </header>
    </>
  )
}
