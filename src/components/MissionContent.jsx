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
        launchTime: moment(this.props.launch.launch_date_utc),
        firstFlight: moment(this.props.rocket.first_flight).format("DD MMMM YYYY")
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
                    <table>
                    <tr>
                        <td><span className="text-grey m-l-sm">NAME: </span><span>{this.state.rocket.name}</span></td>
                        <td><span className="text-grey m-l-sm">FIRST FLIGHT: </span><span>{this.state.firstFlight}</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-grey m-l-sm">COMPANY: </span><span>{this.state.rocket.company}</span></td>
                        <td rowSpan="2"><span className="text-grey m-l-sm">COUNTRY: </span><span>{this.state.rocket.country}</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-grey m-l-sm">HEIGHT: </span><span>{this.state.rocket.height.meters}M / {this.state.rocket.height.feet}FT</span></td>
                        
                    </tr>
                    <tr>
                        <td><span className="text-grey m-l-sm">DIAMETER: </span><span>{this.state.rocket.diameter.meters}M / {this.state.rocket.diameter.feet}FT</span></td>
                        <td><span className="text-grey m-l-sm">SUCCESS RATE: </span><span>{this.state.rocket.success_rate_pct}%</span></td>
                    </tr>
                    <tr>
                        <td><span className="text-grey m-l-sm">MASS: </span><span>{this.state.rocket.mass.kg}KG / {this.state.rocket.mass.lb}LB</span></td>
                        <td><span className="text-grey m-l-sm">COST PER LAUNCH: </span><span>${this.state.rocket.cost_per_launch}</span></td>
                    </tr>
                    </table>
                    <p>{this.state.rocket.description}</p>
                    <h2 className="title">LAUNCHPAD</h2>
                    <hr />
                    <table>
                        <tr>
                        <td><span className="text-grey m-l-sm">NAME: </span><span>{this.state.launchSite.full_name}</span></td>
                        <td><span className="text-grey m-l-sm">LOCATION: </span><span>{this.state.launchSite.location.name},{this.state.launchSite.location.region}</span></td>
                        </tr>
                    </table>
                    <p>{this.state.launchSite.details}</p>
                </div>
                
            </div>
        );
    }
}

export default MissionContent;