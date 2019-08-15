import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

    render() {
        if (!this.props.title) {
            return null;
        }
        return (
            <div data-test="listitemComponent">
                <h2 data-test="component-title">{this.props.title}</h2>
                <div data-test="component-description">{this.props.description}</div>
            </div>
        )
    }
}


ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ListItem;