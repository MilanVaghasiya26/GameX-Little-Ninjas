import React, { useState, useEffect, Fragment } from 'react';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/api';
import RightPopupData from 'shared/components/popupcomponets/popup';
import Question from 'assets/images/question.png';
import '../styles/additionModule.scss';
import { numberimg } from './AdditionImage';
import { NavLink } from 'react-router-dom';
import WrongPopup from 'shared/components/popupcomponets/wrongPopup';
import equal from '../../../../assets/images/equal.png';
import Home from '../../../../assets/images/Home.png';
import close from '../../../../assets/images/Close.png';
import '../../../../assets/styles/common/responsive.scss';
import mathopration from '../../../../assets/images/mathopration.png';
import NextLevel from 'shared/components/popupcomponets/nextLevel';

const Subtraction = () => {
    const [details, setDetails] = useState('');
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState();
    const [id, setId] = useState();
    const [postAns, setPostAns] = useState('');
    const [popup, setPopup] = useState({ isPopUp: false, text: '' });
    const [wrongpopup, setWrongPopup] = useState({ isPopUp: false, text: '' });
    const [count, setCount] = useState(0);
    const [nextlevel, setNextlevel] = useState({ islevel: false, text: '' });
    useEffect(() => {
        getObject();
    }, []);

    const getObject = () => {
        HttpService.get(API_CONFIG.path.substractionObject).then((response) => {
            setId(response.data[0].id);
            setDetails(response.data[0].question);
            setOptions(response.data[0].options);
        });
    };
    const handleMatchData = (data) => {
        setPostAns(data);
        let params = {
            id: id,
            options: data,
        };

        HttpService.post(API_CONFIG.path.postAddData, params).then(
            (response) => {
                if (count >= 9) {
                    setPopup({
                        isPopUp: false,
                        text: '',
                    });
                    setTimeout(() => {
                        setNextlevel({
                            islevel: true,
                            text: 'next level',
                            btntext: 'Multiplication',
                        });
                    }, 2000);
                }

                if (response.data === 'Right Answer') {
                    setCount(count + 1);
                    setPopup({
                        isPopUp: true,
                        text: 'Good you are right!..',
                        img: numberimg[data],
                    });
                    setAnswer(data);
                    setTimeout(() => {
                        getObject();
                        setAnswer('');
                        setPopup({
                            isPopUp: false,
                            text: '',
                        });
                    }, 2000);
                } else {
                    setWrongPopup({
                        isPopUp: true,
                        text: '',
                        img: numberimg[data],
                    });
                    setTimeout(() => {
                        setAnswer('');
                        setWrongPopup({ isPopUp: false, text: '' });
                    }, 2000);
                }
            }
        );
    };

    return (
        <>
            <div className='position--absolute mt--30 ml--100'>
                <NavLink to='/homepage'>
                    <img className=' width--50 ' src={Home} />
                </NavLink>
            </div>
            <div className='position--absolute postion-right-40 postion-top--35'>
                <NavLink to='/math-opration'>
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
                <div className='flex mt--25 align__items--center flex--column justify__content--between '>
                    <img
                        className='position--relative postion--top-55 width--200 responsive--substract'
                        src={mathopration}
                    />
                    <div className='math-btn-blue'> Substraction</div>

                    <div className='flex'>
                        {details.length > 0 &&
                            details.map((key, i) => (
                                <div
                                    className='text--black  height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer no--border mr--20'
                                    key={i}
                                >
                                    <img
                                        className='images width--55-per heigt--80-per'
                                        src={numberimg[details[i]]}
                                    />
                                </div>
                            ))}
                        <div className=' text--black  height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer mr--20'>
                            <p className='oprators'>=</p>
                            {/*<img
                                className='images width--80-per heigt--80-per'
                                src={equal}
                            ></img>*/}
                        </div>

                        <div className='text--black  height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer mr--20'>
                            {answer ? (
                                <img
                                    className='images width--80-per heigt--80-per'
                                    src={numberimg[postAns]}
                                />
                            ) : (
                                <img
                                    className='images width--80-per heigt--80-per que-animation'
                                    src={Question}
                                />
                            )}
                        </div>
                    </div>
                    <div className='text--center line-height--28 text--black opacity mt--20'>
                        Select your answer from the options below
                    </div>

                    <div className='flex  flex justify__content--start  mt--20 '>
                        {options.length > 0 &&
                            options.map((optionsdata, i) => (
                                <Fragment key={i}>
                                    <div
                                        key={i}
                                        onClick={() =>
                                            handleMatchData(optionsdata)
                                        }
                                        className='box module-btn-bg-color text--black height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer margin-left20 margin-top margin-left20 ml--20 animation'
                                    >
                                        <img
                                            className='images width--55-per heigt--80-per hover--effect'
                                            src={numberimg[optionsdata]}
                                            //value={optionsdata}
                                        ></img>
                                    </div>
                                </Fragment>
                            ))}
                    </div>
                </div>

                {popup.isPopUp && (
                    <RightPopupData
                        // answer={answer}
                        msg={popup.text}
                        img={popup.img}
                        closePopup={() =>
                            setPopup({ isPopUp: false, text: '' })
                        }
                    />
                )}
                {wrongpopup.isPopUp && (
                    <WrongPopup
                        msg={wrongpopup.text}
                        img={wrongpopup.img}
                        closePopup={() =>
                            setPopup({ isPopUp: false, text: '' })
                        }
                    />
                )}
                {nextlevel.islevel && (
                    <NextLevel
                        btntext={nextlevel.btntext}
                        closePopup={() =>
                            setNextlevel({ islevel: false, text: '' })
                        }
                    />
                )}
            </div>
        </>
    );
};
export default Subtraction;
