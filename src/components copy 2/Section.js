import React from 'react'

export default function Section(props) {
  return (
    <>
      <h3>{props.title}</h3>
      {props.desc}
    </>
  )
}
