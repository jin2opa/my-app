// import { Component } from "react";

// class Section extends Component{
//   render(){
//     return(
//       <section>
//         <h3>{this.props.title}</h3>
//         <p>{this.props.desc}</p>
//       </section>
//     );
//   }
// }
// export default Section;

import React from 'react'

export default function Section(props) {
  return (
    <section>
      <h3>{props.title}</h3>
      <article>{props.desc}</article>
    </section>
  )
}
