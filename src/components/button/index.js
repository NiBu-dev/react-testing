import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {

    submitEvent = () => {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }

    render() {
        return (
            <button onClick={this.submitEvent} data-test="buttonComponent">
                {this.props.buttonText}
            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;
