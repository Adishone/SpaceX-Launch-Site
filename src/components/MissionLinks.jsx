import * as React from 'react';
import PropTypes from 'prop-types';
import RocketImage from '../assets/img/rocket.png';

import style from "../styles/missionLinks.sass"

class MissionLinks extends React.Component {

    render() {
        return (
            <div className="mission-links-container">
                <div className="bottom">
                    <h1>MISSION LINKS</h1>
                    <div>
                    <button className="rounded-border-button">REDDIT CAMPAIGN</button>
                    <button className="rounded-border-button">PRESSKIT</button>
                    <button className="rounded-border-button">MISSION VIDEO</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MissionLinks;