import React, { Component } from 'react';
import {
    View,
    Dimensions
} from 'react-native';

import styles from './styles/ProgressBar';

class ProgressBar extends Component {
    render() {
        const { percentage } = this.props;
        const barWidth = Dimensions.get('window').width * percentage;
        return (
            <View style={[styles.bar, {
                width: barWidth
            }]} />
        );
    }
}

export default ProgressBar;