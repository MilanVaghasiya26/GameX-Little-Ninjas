import React, { Fragment, useState } from 'react';
import '../styles/counting.scss';
import HttpService from '../../../../shared/services/http.service';
import { API_CONFIG } from '../../../../shared/constants/api';
import { useEffect } from 'react';
import { questions } from 'features/componets/object-Identification/ImagesData';
import { option } from '../NumbersImage';
import RightPopupData from 'shared/components/popupcomponets/popup';
import Home from '../../../../assets/images/Home.png';
import close from '../../../../assets/images/Close.png';
import countingimg from '../../../../assets/images/counting.png';
import { NavLink } from 'react-router-dom';
import WrongPopup from 'shared/components/popupcomponets/wrongPopup';
import '../../../../assets/styles/common/responsive.scss';
import NextLevel from 'shared/components/popupcomponets/nextLevel';

export const Counting = (props) => {
    const [questionset, setQuestionset] = useState([]);
    const [optionsdata, setOptionsData] = useState([]);
    const [maindata, setMainData] = useState();
    const [ans, setAns] = useState();
    const [count, setCount] = useState(0);
    const [popup, setPopup] = useState({ isPopUp: false, text: '' });
    const [nextlevel, setNextlevel] = useState({ islevel: false, text: '' });
    const [wrongpopup, setWrongPopup] = useState({ isPopUp: false, text: '' });

    const handleNumberData = (data) => {
        
        let params = {
            id: maindata.id,
            options: data,
        };
        HttpService.post(API_CONFIG.path.postCountingData, params).then(
            (response) => {
                if (count >= 9) {
                    setPopup({
                        isPopUp: false,
                        text: '',
                    });
                    setTimeout(() => {
                        setNextlevel({
                            islevel: true,
                            text: 'Next Level',
                            btntext: 'Math operations',
                        });
                    }, 2000);
                }

                if (response.data === 'Right Answer') {
                    setCount(count + 1);
                    setAns(data);
                    setPopup({
                        isPopUp: true,
                        text: 'Good Job!!',
                        img: option[data],
                    });

                    setTimeout(() => {
                        getCountObject();
                        setAns('');
                        setPopup({
                            isPopUp: false,
                            text: '',
                        });
                    }, 2000);
                } else {
                    setWrongPopup({
                        isPopUp: true,
                        text: '',
                        img: option[data],
                    });
                    setTimeout(() => {
                        setAns('');
                        setWrongPopup({ isPopUp: false, text: '' });
                    }, 2000);
                }
            }
        );
    };

    useEffect(() => {
        getCountObject();
    }, []);

    const getCountObject = () => {
        HttpService.get(API_CONFIG.path.countingobject).then((response) => {
            setMainData(response.data[0]);
            setQuestionset(response.data[0].question);
            setOptionsData(response.data[0].options);
        });
    };

    return (
        <>
            <div className='position--absolute mt--30 ml--100'>
                <NavLink to='/homepage'>
                    <img className=' width--50 ' src={Home} />
                </NavLink>
            </div>
            <div className='position--absolute postion-right-40 postion-top--35'>
                <NavLink to='/homepage'>
                    <img className='width--50 ' src={close}></img>
                </NavLink>
            </div>
            <div className='position--absolute postion-right-40 postion-top--35'>
                <button className='user-btn position--absolute  postion-right--60 '>
                    <p className='uservalue text--capitalize'>
                        {sessionStorage.getItem('user')}
                    </p>
                </button>
            </div>
            <div className='module-container bg full-viewport-height overflow--hidden-y flex justify__content--center  align__items--center'>
                <div className='flex mt--25  align__items--center flex--column justify__content--between '>
                    <img
                        className='position--relative postion--top-43 width--200 responsive--counting'
                        src={countingimg}
                    />
                    <div className='flex align__items--center flex--column justify__content--between '>
                        <div className='text--center line-height--28 font-size--18'>
                            Count the number of objects
                        </div>

                        <div className='main-design   que-animation'>
                            {questionset.length > 0 &&
                                questionset.map((data, index) => (
                                    <>
                                        <div
                                            className=''
                                            style={{
                                                width: `${
                                                    questionset.length < 3
                                                        ? `20%`
                                                        : `calc(80% / ${questionset.length}`
                                                }`,
                                                height: `${
                                                    questionset.length === 1
                                                        ? '60px'
                                                        : '60px'
                                                }`,
                                                margin: '20px',
                                            }}
                                            key={index}
                                        >
                                            <img
                                                src={
                                                    questions[
                                                        questionset[index]
                                                    ]
                                                }
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                        </div>
                                    </>
                                ))}
                        </div>
                        <div className='text--center line-height--28 text--black opacity'>
                            Select your answer from the options below
                        </div>
                        <div className='flex flex justify__content--start ml--80 '>
                            {optionsdata.length > 0 &&
                                optionsdata.map((options, i) => (
                                    <Fragment key={i}>
                                        <div
                                            className=' module-btn-bg-color text--black  height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer no--border mr--20 animation'
                                            onClick={() =>
                                                handleNumberData(options)
                                            }
                                        >
                                            <img
                                                className='imges width--55-per heigt--80-per mr--20 hover--effect'
                                                src={option[optionsdata[i]]}
                                                value={optionsdata}
                                            ></img>
                                        </div>
                                    </Fragment>
                                ))}
                        </div>
                    </div>

                    {popup.isPopUp && (
                        <RightPopupData
                            answer={questionset[0]}
                            msg={popup.text}
                            img={popup.img}
                            closePopup={() =>
                                setPopup({ isPopUp: false, text: '' })
                            }
                        />
                    )}

                    {wrongpopup.isPopUp && (
                        <WrongPopup
                            answer={questionset[0]}
                            msg={wrongpopup.text}
                            img={wrongpopup.img}
                            closePopup={() =>
                                setPopup({ isPopUp: false, text: '' })
                            }
                        />
                    )}
                    {nextlevel.islevel && (
                        <NextLevel
                            answer={ans}
                            msg={nextlevel.text}
                            btntext={nextlevel.btntext}
                            closePopup={() =>
                                setNextlevel({ islevel: false, text: '' })
                            }
                        />
                    )}
                </div>
            </div>
        </>
    );
};
