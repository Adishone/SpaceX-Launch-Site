import * as React from 'react';
import PropTypes from 'prop-types';
import SpacexLogo from '../assets/img/space_x_logo_bw_centered.png';
import ArrowPointer from '../assets/img/arrow_pointer.png';

import style from "../styles/header.sass"

class Header extends React.Component {

    render() {
        return (
            <header>
                <span className="arrow"></span>
                <button className="back-button">GO BACK</button>
                <img src={SpacexLogo} className="logo"></img>
            </header>
        );
    }
}

export default Header;