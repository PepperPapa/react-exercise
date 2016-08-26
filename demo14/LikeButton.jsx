import React from 'react';

const LikeButton = React.createClass({
  getInitialState() {
      return {liked: false};
  },
  handleClick() {
      this.setState({liked: !this.state.liked});
  },
  render() {
    var text = this.state.liked ? "喜欢" : "不喜欢";
    return (
      <button onClick={this.handleClick} style={{display: 'block'}}>{text}</button>
    );
  }
});

export default LikeButton;
