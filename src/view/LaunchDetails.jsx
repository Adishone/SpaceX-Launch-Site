import React from 'react';
import Counter from '../components/Counter.jsx';
import MissionLinks from '../components/MissionLinks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MissionContent from '../components/MissionContent';

//import './Home.sass';

class LaunchDetails extends React.Component {
  state = {
    launch: this.props.launch,
    launchSite: this.props.launchSite,
    rocket: this.props.rocket
}

  render() {
    return (
      <div>
        <Header></Header>
        <MissionContent launch={this.state.launch}
          launchSite={this.state.launchSite}
          rocket={this.state.rocket}>
          </MissionContent>
        <MissionLinks></MissionLinks>
        <Footer></Footer>
      </div>
    );
  }
}

export default LaunchDetails;
