import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Metrics from '../constant/Metrics';

const MessageBox = props => {

    return (
        <View
            style={{
                height: Metrics.width * 0.9,
                backgroundColor: 'white',
                padding: Metrics.width * 0.05,
                justifyContent:'space-between'
                }}>
            <View style={{}}>
                <View style={{ flexDirection: 'row' ,marginBottom:Metrics.width*0.05,alignItems:'flex-start'}}>
                    <Text style={{ flex: 0.2 ,marginTop:Metrics.width*0.02}}>Kime</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            flex: 0.8,
                            borderRadius: Metrics.width * 0.03,
                            height:Metrics.width*0.1
                        }}
                    ></TextInput>
                </View>
               
                <View style={{ flexDirection: 'row', marginBottom: Metrics.width * 0.05, alignItems: 'flex-start' }}>
                    <Text style={{ flex: 0.2, marginTop: Metrics.width * 0.02 }}>Mesaj</Text>
                    <TextInput
                        multiline
                        style={{
                            borderWidth: 1,
                            flex: 0.8,
                            borderRadius: Metrics.width * 0.03,
                            
                        }}
                        numberOfLines={10}
                    ></TextInput>
                </View>
            </View>

            <TouchableOpacity
                style={{alignItems:'flex-end'}}
                onPress={() => props.visibility(false)}>
                <Text >Close</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MessageBox;
