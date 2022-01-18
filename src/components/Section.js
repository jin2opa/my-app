import { Component } from "react";

class Section extends Component{
  render(){
    return(
      <section>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </section>
    );
  }
}
export default Section;