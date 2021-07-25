import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';

import Metrics from '../constant/Metrics'
import { Svgs } from '../StylingConstants';
import Icon from './Icon';

const Header = (props,{ navigation}) => {

    // const openMenu = () => {
    //     navigation.openDrawer();
    // }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon}
            // onPress={openMenu} //Drawer denemesi için oluşturmuştum.
            >     <Icon svg={Svgs.MenuLines} iconStyle={{ color:'#1DA1F2'}} ></Icon>
            </TouchableOpacity>
            {
                props.iconStatus ? // home header ında kuş ikonu var. Bu componente true değeri homedan geliyor ve kuş gösteriliyor. 
                <TouchableOpacity style={styles.iconBig}>
                    <Icon svg={props.svg} iconStyle={{ color: '#1DA1F2' }} ></Icon>
                </TouchableOpacity>
                    : // aksi halde proptan gelen text yazılıyor (bildirimler, mesajlar, arama)
                    <Text style={{fontWeight:'bold',fontSize:Metrics.width*0.05}}>{ props.text}</Text>
                
            }
           
            <TouchableOpacity style={styles.icon}>
                <Icon svg={Svgs.Settings} iconStyle={{ color: '#1DA1F2' }} ></Icon>
            </TouchableOpacity>

        </View>
    );
};



export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    icon: {
        width: Metrics.width * 0.06
    },
    iconBig: {
        width: Metrics.width * 0.085,
        aspectRatio:1
    }
});