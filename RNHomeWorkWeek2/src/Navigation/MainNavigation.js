import React, { useState,useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';


// uygulamanın root navigation dosyası
const MainNavigation = props => {
    return (
        <NavigationContainer> 
            <TabNavigation />  
        </NavigationContainer>
    )
}

export default MainNavigation;