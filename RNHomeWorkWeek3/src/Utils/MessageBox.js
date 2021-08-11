import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import Metrics from '../constant/Metrics';
import { sendMessage } from '../Firebase/Firebase';
import { userSelector } from '../Redux/UserRedux';

const MessageBox = props => {
    const user =useSelector(userSelector)
    const [to, setTo] = useState('')
    const [message, setMessage] = useState('')
    const userID=user.uid


    const _sendMessage = async (userID,{name:to,message}) => {

        await sendMessage(userID, { name: to, message })
        props.visibility(false)

    }
    return (
        <View
            style={{
                height: Metrics.width * 0.9,
                backgroundColor: 'white',
                padding: Metrics.width * 0.05,
                justifyContent: 'space-between'
            }}>
            <View style={{}}>
                <View style={{ flexDirection: 'row', marginBottom: Metrics.width * 0.05, alignItems: 'flex-start' }}>
                    <Text style={{ flex: 0.2, marginTop: Metrics.width * 0.02 }}>Kime</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            flex: 0.8,
                            borderRadius: Metrics.width * 0.03,
                            height: Metrics.width * 0.1,

                        }}
                        value={to}
                        onChangeText={setTo}
                    ></TextInput>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: Metrics.width * 0.05 }}>
                    <Text style={{ flex: 0.2, marginTop: Metrics.width * 0.02}}>Mesaj</Text>
                    <TextInput
                        multiline
                        style={{
                            borderWidth: 1,
                            flex: 0.8,
                            borderRadius: Metrics.width * 0.03,

                        }}
                        numberOfLines={10}
                        value={message}
                        onChangeText={setMessage}
                    ></TextInput>
                </View>
            </View>

            <TouchableOpacity
                style={{ alignItems: 'flex-end' }}
            // onPress={() => props.visibility(false)}

                onPress={() => _sendMessage(userID, { name: to, message })}

            >
                <Text >Gönder</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MessageBox;
