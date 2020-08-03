import React from 'react';
 
export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: "0" }
  }
 
  like() {
    this.setState({ liked: "+1" })
  }
 
  unlike() {
    this.setState({ liked: "-1" })    
  }
 
  render() {
    return (
      <div>
      <p>{this.props.content} --- <b>{this.state.liked}</b></p> 
        <button onClick={() => this.like()}>Like</button> -  <button onClick={() => this.unlike()}>unLike</button>
      </div>
    )
  }
}