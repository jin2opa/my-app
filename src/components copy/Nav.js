// import { Component } from "react";

// class Nav extends Component{
//   render(){
//     return (
//       <nav>
//         <ol>
//           <li><a href="/?title=HTML">{this.props.title}</a></li>
//           <li><a href="/?title=CSS">{this.props.title}</a></li>
//           <li><a href="/?title=JavaScript">{this.props.title}</a></li>
//         </ol>
//       </nav>
//     );
//   }
// }
// export default Nav;

import React from 'react'

function Nav(props) {
  const list = [];
  for(let i=0; i<props.nav.length; i++){
    list.push(<li key={props.nav[i].id}><a id={props.nav[i].id} href="/?id={props.nav[i].id}" onClick={
      (e)=>{
        e.preventDefault();
        props.onChangeMode(Number(e.target.id));
      }
    }>{props.nav[i].title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

export default Nav