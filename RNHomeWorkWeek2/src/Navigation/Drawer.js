import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// deneme amaçlı bir component değerlendirmeye almayınız!!!.

function HomeScreenc({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreenc({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function Drawerr() {
    return (
            <Drawer.Navigator initialRouteName="Hom">
                <Drawer.Screen name="Hom" component={HomeScreenc} />
                <Drawer.Screen name="Noti" component={NotificationsScreenc} />
            </Drawer.Navigator>
    );
}