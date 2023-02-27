import React, { useState } from 'react';
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import 'assets/styles/index.scss';
import 'assets/styles/common/common.scss';
import Home from './features/componets/landingPage/container/homePage';
import Layout from 'hoc/layout';
import { Counting } from 'features/componets/counting/container/counting';
import Addition from 'features/componets/math-module/container/additionModule';
import MathButton from 'features/componets/math-module/operationButton';
import IdentifyObject from 'features/componets/object-Identification/container/objectIdentification';
import Substraction from 'features/componets/math-module/container/subtractionModule';
import Multiplication from 'features/componets/math-module/container/multiplicationModule';
import Division from 'features/componets/math-module/container/divisionModule';
import MainPage from '../src/features/componets/mainpage/container/mainPage';
import Volume from '../src/assets/images/Volume.png';
import Mute from '../src/assets/images/Volume_mute.png';
import sound from '../src/assets/music/FastFeelBananaPeel-320bit.mp3';
import RightPopupData from 'shared/components/popupcomponets/popup';
import NextLevel from 'shared/components/popupcomponets/nextLevel';

Sentry.init({
    dsn: 'https://3e88157f43cc40388901f1a4a8639574@o1303847.ingest.sentry.io/6543319',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const App = () => {
    const [isActive, setIsActive] = useState(true);
    const [music, setMusic] = useState('false');

    //const [loading, setLoading] = useState(true);

    //const loadingScreen = document.getElementById('loadingContainer');
    //if (loadingScreen) {
    //    setTimeout(() => {
    //        loadingScreen.style.display = 'none';
    //        setLoading(false);
    //    }, 2000);
    //}

    const MusicOnOff = (e) => {
        setIsActive(!isActive);
        setMusic(!music);
    };
    return (
        //!loading && (
        <BrowserRouter>
            <Layout>
                <div className='volume-btn'>
                    <img
                        onKeyUp={(e) => MusicOnOff(e)}
                        onClick={(e) => MusicOnOff(e)}
                        className='width--50'
                        src={isActive ? Volume : Mute}
                    />
                </div>

                <audio
                    className='background-audio d-none'
                    loop={true}
                    controls
                    autoPlay={true}
                    src={music ? sound : ''}
                />
                <Switch>
                    <Route path='/' exact component={MainPage} />

                    <Route path='/homepage' exact component={Home} />
                    <Route path='/math-opration' exact component={MathButton} />

                    <Route path='/identify' exact component={IdentifyObject} />
                    <Route path='/counting' exact component={Counting} />

                    <Route path='/additionModule' exact component={Addition} />

                    <Route
                        path='/subtractionModule'
                        exact
                        component={Substraction}
                    />
                    <Route
                        path='/multiplicationModule'
                        exact
                        component={Multiplication}
                    />
                    <Route path='/divisionModule' exact component={Division} />

                    <Redirect to='/' />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
    //);
};
export default Sentry.withProfiler(App);
