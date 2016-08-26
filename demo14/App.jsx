import React from 'react';
import Name from './Name.jsx'
import Link from './Link.jsx'
import LikeButton from './LikeButton.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Name name={this.props.name} />
        <Link link={this.props.link} />
        <LikeButton />
      </div>
    );
  }
}

export default App;
