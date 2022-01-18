import { Component } from "react";

class Nav extends Component{
  render(){
    return (
      <nav>
        <ol>
          <li><a href="/?title=HTML">{this.props.title}</a></li>
          <li><a href="/?title=CSS">{this.props.title}</a></li>
          <li><a href="/?title=JavaScript">{this.props.title}</a></li>
        </ol>
      </nav>
    );
  }
}
export default Nav;