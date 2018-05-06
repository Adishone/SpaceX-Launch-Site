import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

import style from "../styles/missionContent.sass"
import Counter from './Counter';

class MissionContent extends React.Component {
    state = {
        launch: this.props.launch,
        launchSite: this.props.launchSite,
        rocket: this.props.rocket,
        launchDate: moment(this.props.launch.launch_date_utc).format("DD MMM YYYY"),
        launchTime: moment(this.props.launch.launch_date_utc)
    }

    render() {
        return (
            <div className="content">

                <div className="left">
                    <div className="m-l-sm">
                        <h2 className="text-grey letter-spacing-sm">{this.state.launchDate}</h2>
                        <h1 className="text-black rocket-name">{this.state.rocket.name} LAUNCH</h1>
                        <Counter from={this.state.launchTime}></Counter>
                        <img className="rocket-logo" src={this.state.launch.links.mission_patch_small} alt="Rocket logo"></img>
                    </div>
                </div>

                <div className="right">
                    <h2 className="title">DETAILS</h2>
                    <hr />
                    <p>{this.state.launch.details}</p>
                    <h2 className="title">ROCKET</h2>
                    <hr />
                    <div className="left">
                    NAME:
                    COMPANY:
                    HEIGHT:
                    DIAMETER:
                    MASS:
                    </div>

                    <div className="right">
                    FIRST FLIGHT:
                    COUNTRY:
                    SUCCESS RATE:
                    COST PER LAUNCH:
                    </div>
                    <p>{this.state.rocket.description}</p>
                    <h2 className="title">LAUNCHPAD</h2>
                    <hr />
                    <p>{this.state.launchSite.details}</p>
                </div>
                
            </div>
        );
    }
}

export default MissionContent;