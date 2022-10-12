import React from 'react'

export default function Insert(props) {
  return (
    <>
      <form action="/insert" method="post" onSubmit={
        (e)=>{
          e.preventDefault();
          props.onInsert(e.target.title.value, e.target.desc.value);
        }
      }>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="desc" placeholder="desc"></textarea></p>
        <p><input type="submit" value="insert"/></p>
      </form>
    </>
  )
}
