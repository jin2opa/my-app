// import React from "react";

// class Header extends React.Component{
//   render(){
//     return (
//       <header>
//         <h1><a href="/">{this.props.title}</a></h1>
//       </header>
//     );
//   }
// }
// export default Header;

import React from 'react'

export default function Header(props) {
  return (
    <header>
      <h1><a href="/" onClick={
        (e)=>{
          e.preventDefault();
          props.onChangeMode();
        }
      }>{props.title}</a></h1>
    </header>
  )
}

