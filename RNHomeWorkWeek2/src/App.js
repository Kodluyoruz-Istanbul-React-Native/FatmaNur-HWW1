import React, { useState, useEffect } from 'react';

import MainNavigation from './Navigation/MainNavigation';
import Splash from './Screens/Splash';

const App = () => {
    const [showSplash, setSplashMode] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setSplashMode(false)
            }, 500);
        }, []); //yarım saniye sonra state güncellmesi yapılır ve showSplash değeri false olur

    return (

        <>
            {
                showSplash ?  //showSplash state değeri true ise splash ekranı false ise MainNavigation render ediliyor.
                    <Splash></Splash>
                    :
                    <MainNavigation></MainNavigation>
            }
        </>

    )
}

export default App;
