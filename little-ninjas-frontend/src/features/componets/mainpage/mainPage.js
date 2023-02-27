import React, { useEffect, useState } from 'react';
import HttpService from '../../../shared/services/http.service';
import { API_CONFIG } from '../../../shared/constants/api';
import { setAuthData } from 'shared/services/auth.service';
import {Redirect } from 'react-router-dom';
import './style/mainPage.scss';
import startbtn from '../../../assets/images/start.png';

const MainPage = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
  
    useEffect(() => {
        sessionStorage.setItem('user', username);
    }, [username]);

    const handleChange = (e) => {
        setUser(username);
        let params = {
            user_name: username,
        };
        HttpService.post(API_CONFIG.path.userData, params).then((response) => {
            setAuthData(response.data);
        });
    };

    if (!!user) {
        return <Redirect to='/landingpage' />;
    } else {
        return (
            <>
                <div className='  homewrapper Homepage-wrapper flex  board--img-background flex--column justify__content--center align__items--center full-viewport-height homepage-bg-color '>
                    <input
                        className='username--input font-size-default pr--10 pt--10 pb--10 pl--5	 width--200 hide--xl no--border '
                        type='text'
                        placeholder='UserName'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <img
                        src={startbtn}
                        className={`justify__content--between banner flex ${
                            !username && 'disabled'
                        }`}
                        onClick={(e) => !!username && handleChange(e)}
                        value={username}
                    />
                </div>
            </>
        );
    }
};
export default MainPage;
