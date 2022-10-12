import React, {useState} from 'react'
import './ReactRedux.css'

export default function ReactRedux() {
  return (
    <div id="container">
      <h1>Root</h1>
      <Left1/>
    </div>
  )
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2/>
    </div>
  )
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3/>
    </div>
  )
}
function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
    </div>
  )
}