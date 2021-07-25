import React from 'react';
import { Text, StyleSheet,View,Image } from 'react-native';
import Metrics from './Metrics';

const Item = props => {
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <View style={styles.imageView}>
                <Image style={styles.imageStyle}
                    source={require('../user.png')} />

            </View>
            <View>
                <Text>{props.name }</Text>
            </View>
      </View>
    );
};
const styles = StyleSheet.create({
    imageView: {
        borderWidth: 1,
        borderRadius: 1000,
        height: Metrics.width * 0.20,
        width: Metrics.width * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Metrics.width * 0.02,
        marginTop: Metrics.width * 0.05,
    },
    imageStyle: {
        width: Metrics.width * 0.2,
        height: Metrics.width * 0.2
}
});
export default Item;
