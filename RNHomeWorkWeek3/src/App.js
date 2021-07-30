import React, { useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';

import { store } from './Redux/ReduxManager';

import MainNavigation from './Navigation/MainNavigation';
import Splash from './Screens/Splash';
import { userSelector } from './Redux/UserRedux';



const App = () => {
    const [showSplash, setSplashMode] = useState(true);

    // const isLoggedIn = useSelector(userSelector)
    // console.log(isLoggedIn+'  loggin dtata ')
    useEffect(
        () => {
            setTimeout(() => {
                setSplashMode(false)
            }, 500);
        }, []); //yarım saniye sonra state güncellmesi yapılır ve showSplash değeri false olur

    return (
        <Provider store={store}>

            {
                showSplash ?  //showSplash state değeri true ise splash ekranı false ise MainNavigation render ediliyor.
                    <Splash></Splash>
                    :
                    <MainNavigation></MainNavigation>
            }
        </Provider>

    )
}

export default App;
