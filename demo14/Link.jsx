import React from 'react';

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.link}>my github page</a>
    );
  }
}

export default Link;
