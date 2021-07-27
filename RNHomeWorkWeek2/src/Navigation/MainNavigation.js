import React, { useState,useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';
import MyDrawer from './Drawer';


// uygulamanın root navigation dosyası
const MainNavigation = props => {
    return (
        <NavigationContainer> 
            {/* <TabNavigation />   */}
            <MyDrawer></MyDrawer>
        </NavigationContainer>

    )
}

export default MainNavigation;