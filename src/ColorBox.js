import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    if (this.props.opacity >= 0.2) {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={this.props.opacity - 0.1} />
      </div>
      )
    } else {
      return null
    }
  }

  // render() {
  //   const newOpacity = this.props.opacity - 0.1
  //   return this.props.value < 0.2 ? null : (
  //     <div className="color-box" style={{opacity: this.props.opacity}}>
  //       <ColorBox opacity={newOpacity} />
  //     </div>
  //     )
  // }
}