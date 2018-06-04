import React, { Component } from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles/ProgressBar';

class ProgressBar extends Component {
    render() {
        const { progress } = this.props;
        const barWidth = Dimensions.get('window').width * progress;
        return (
            <View style={[styles.bar, {
                width: barWidth
            }]} />
        );
    }
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired
}

export default ProgressBar;