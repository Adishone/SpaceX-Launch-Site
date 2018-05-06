import * as React from 'react';
import PropTypes from 'prop-types';
import RocketImage from '../assets/img/rocket.png';

import style from "../styles/footer.sass"

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <span className="footer-text">FOLLOW SPACEX ON | </span>
                <a href="https://twitter.com/" className="social-media-link">TWITTER</a>
                <a href="https://www.youtube.com/" className="social-media-link">YOUTUBE</a>
                <a href="https://www.flickr.com/" className="social-media-link">FLICKR</a>
                <a href="https://www.instagram.com/" className="social-media-link">INSTAGRAM</a>
                <span className="footer-text pull-right">2018 SPACE TECHNOLOGIES EXPLORATION CORPORATION</span>
            </footer>
        );
    }
}

export default Footer;