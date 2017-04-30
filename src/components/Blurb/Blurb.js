import React, { Component } from 'react';
import './Blurb.css';

class Blurb extends Component {
  render() {
      return (
        <div className="blurb">
        {this.props.h2 ? (<h2>{this.props.h2}</h2>) : '' }
        {this.props.h3 ? (<h3>{this.props.h3}</h3>) : '' }
        {this.props.teamImg ? (<div id={this.props.teamImg} className="team-member" />) : '' }
        {this.props.children}
        {this.props.text ? (<p>{this.props.text}</p>) : '' }
        </div>
      );
    }
}
export default Blurb;
