import React from 'react';
import Counter from '../components/Counter.jsx';
import MissionLinks from '../components/MissionLinks';
import Footer from '../components/Footer';
import Header from '../components/Header';

//import './Home.sass';

class LaunchDetails extends React.Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Counter from={0} to={70}> </Counter>
        <MissionLinks></MissionLinks>
        <Footer></Footer>
      </div>
    );
  }
}

export default LaunchDetails;
