import React, {useState} from 'react'

export default function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc); 
  return (
    <>
      <form action="/update" method="post" onSubmit={
        (e)=>{
          e.preventDefault();
          props.onUpdate(e.target.title.value, e.target.desc.value);
        }
      }>
        <p><input type="text" name="title" value={title} onChange={
          (e)=>{
            setTitle(e.target.value);
          }
        }/></p>
        <p><textarea name="desc" value={desc} onChange={
          (e) => {
            setDesc(e.target.value);
          }
        }></textarea></p>
        <p><input type="submit" value="update"/></p>
      </form>
    </>
  )
}
