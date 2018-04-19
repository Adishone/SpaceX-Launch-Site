import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Counter extends React.Component {
    state = {
        from: this.props.from,
        to: this.props.to,
        timeElapsed: this.props.from,
        onSucess: this.props.onSucess,
        interval: null,
        intervalSet: false,
        minutes: Math.floor(this.props.from/60),
        seconds: Math.floor(this.props.from % 60)
    }
    style = {
        color: 'red',
        textAlign: 'center',
        fontSize: '20px'
    }

    componentDidMount() {
        this.state.interval = setInterval(this.countUp, 1000);
        this.state.intervalSet = true;
    }

    onCounterClicked = () => {        
        this.setState((state, props) => {
            if (!state.intervalSet) {
                state.interval = setInterval(this.countUp, 1000);
                state.intervalSet = true;
            }
            else {
                clearInterval(state.interval);
                state.intervalSet = false;
            }
        });
    };

    countUp = () => {    
        this.setState((state, props) => {
            if (state.timeElapsed == state.to) {
                clearInterval(state.interval);
                state.onSucess();
            }
            else
            {
            return {
                timeElapsed: state.timeElapsed + 1,
                minutes: Math.floor(state.timeElapsed/60),
                seconds: Math.floor(state.timeElapsed % 60)
            };
        }
        });
    };

    pad(number) {
        return ("0"+number).slice(-2);
    }

    render() {
        return (
            <div>
                <h2 onClick={this.onCounterClicked} style={this.style}>Counter: {this.pad(this.state.minutes)}:{this.pad(this.state.seconds)}</h2>
            </div>
        );
    }
}

Counter.propTypes = {
    to: PropTypes.number.isRequired,
    from: PropTypes.number.isRequired
}

export default Counter;