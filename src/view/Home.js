import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../components/Counter.jsx';

import './Home.sass';

class Home extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  }

  state = {
    welcomeText: 'Hello',
  };

  endOfTheWorld() {
    alert("What have you done? World has ended now :(");
  }

  render() {
    const { welcomeText } = this.state;
    const { username } = this.props;

    return (
      <div>
        <h1 className="welcome">
          {welcomeText}
          <span className="username">{`: ${username}`}</span>
        </h1>
        <Counter from={0} to={70} onSucess={this.endOfTheWorld}> </Counter>
      </div>
    );
  }
}

export default Home;
