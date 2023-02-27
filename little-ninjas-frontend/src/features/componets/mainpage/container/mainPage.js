import React, { useEffect, useState } from 'react';
import HttpService from '../../../../shared/services/http.service';
import { API_CONFIG } from '../../../../shared/constants/api';
import { setAuthData } from 'shared/services/auth.service';
import {Redirect } from 'react-router-dom';

import '../style/mainPage.scss';
import startbtn from '../../../../assets/images/start.png';

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
        return <Redirect to='/homepage' />;
    } else {
        return (
            <>
                <div className=' Homepage-wrapper flex bg--usernameimg  justify__content--center  full-viewport-height  '>
                    <div className='flex flex--column justify__content--center align__items--center'>
                        <div className='input-field flex justify__content--center'>
                            <label className='custom-field one'>
                                <input
                                    autoFocus
                                    onKeyDown={({ keyCode, which }) =>
                                        keyCode === 13 &&
                                        which === 13 &&
                                        handleChange()
                                    }
                                    type='text'
                                    placeholder=' '
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value.trim())
                                    }
                                />
                                <span className='placeholder'>
                                    Enter Username
                                </span>
                            </label>
                        </div>
                        <img
                            className='justify__content--between banner flex start-btn'
                            //className={`justify__content--between banner flex start-btn  ${
                            //    !username && 'disabled'
                            //}`}
                            src={startbtn}
                            //onClick={(e) => !!username && handleChange(e)}
                            onClick={(e) => handleChange(e)}
                            value={username}
                        />
                    </div>
                </div>
            </>
        );
    }
};
export default MainPage;
