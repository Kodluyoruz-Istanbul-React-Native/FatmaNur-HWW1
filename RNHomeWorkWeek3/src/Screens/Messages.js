import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList ,Text} from 'react-native';
import Metrics from '../constant/Metrics'
import { Svgs } from '../StylingConstants';
import Icon from '../Utils/Icon';
import Modal from 'react-native-modal';
import MessageBox from '../Utils/MessageBox';
import { getMessages } from '../Firebase/Firebase';
import { useSelector } from 'react-redux';
import { userSelector } from '../Redux/UserRedux';

const Messages = props => {
    const user=useSelector(userSelector)
    const data=getMessages(user.uid)
    const [isVisible, setVisible] = useState(false)
    const _visibility = val => {
        setVisible(val)
    }
    // console.log('-----------------------------------',data)
    return (

        <View style={styles.container}>
            <Text>wdwn</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.circle}
                    onPress={() => _visibility(true)}>
                    <Icon svg={Svgs.NewMessage} iconStyle={{ color: 'white' }}></Icon>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                isVisible={isVisible}
                backdropColor='black'
                backdropOpacity={0.5}
                onBackdropPress={() => _visibility(false)}
                style={{
                    justifyContent: "flex-end",
                    margin: 0
                }}
            >
                <MessageBox
                    visibility={(val) => _visibility(val)}
                />
            </Modal>
        </View>
    );
};

export default Messages;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    iconContainer: {
        flex: 0.15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',

    },
    circle: {
        height: Metrics.width * 0.15,
        width: Metrics.width * 0.15,
        borderRadius: 100,
        backgroundColor: '#1DA1F2',
        marginRight: Metrics.width * 0.02,
        padding: Metrics.width * 0.03,
        paddingBottom: 0,

    }
});
