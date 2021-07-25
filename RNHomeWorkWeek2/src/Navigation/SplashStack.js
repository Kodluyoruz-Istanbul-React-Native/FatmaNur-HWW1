import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/Splash'

const Stack = createStackNavigator();

const SplashStack = props => {
    return (
        <Stack.Navigator
            headerMode={'none'}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen}

            />
        </Stack.Navigator>
    );
};

export default SplashStack;

