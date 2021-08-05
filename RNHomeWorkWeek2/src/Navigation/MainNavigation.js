import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyDrawer from './Drawer';




// uygulamanın root navigation dosyası
const MainNavigation = props => {

    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>

    )
}

export default MainNavigation;