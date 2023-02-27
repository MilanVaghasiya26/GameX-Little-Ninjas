import React from 'react';
import './popup.scss';
import '../../../assets/styles/common/common.scss';
import { NavLink } from 'react-router-dom';
import wrong from '../../../assets/music/No.mp3';
import badsmile from '../../../assets/images/wrongkid.png';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
const WrongPopup = (props) => (
    <>
        <div className='main-wrappers'>
            <div className='content-wrapper Popup-wrapper  popup-background'>
                <div className='content-container popmsg'>
                    <h2>
                        <b>{props.msg}</b>
                    </h2>
                    <img className='width' src={badsmile}></img>
                    <div className='popupans'>
                        <h2 className='color-red'>Oh No! It&rsquo;s not</h2>
                        <img className='ml--10 width' src={props.img} />
                        <audio
                            className='background-audio d-none'
                            controls
                            autoPlay
                            src={wrong}
                        ></audio>
                        <h2 className='ml--10 color-red'>{props.answer}</h2>
                        {props.btntext && (
                            <NavLink to='/landingPage'>
                                <Confetti />
                                <button className='next--level height--50 width--200 b-radius--10 font--bold border--4px module-btn-bg-color pointer animate'>
                                    {props.btntext}
                                </button>
                            </NavLink>
                        )}
                    </div>
                    {/* <h1>{props.response}</h1> */}
                </div>
            </div>
        </div>
    </>
);
export default WrongPopup;
