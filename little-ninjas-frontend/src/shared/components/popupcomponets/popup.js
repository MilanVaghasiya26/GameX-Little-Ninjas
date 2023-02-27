import React from 'react';
import './popup.scss';
import '../../../assets/styles/common/common.scss';
import nextlevel from '../../../assets/music/nextlevel.mp3';
import { NavLink } from 'react-router-dom';
import smile from '../../../assets/images/winkid.png';
import win from '../../../assets/music/yes.mp3';
import Confetti from 'react-confetti';
const RightPopupData = (props) => (
    <>
        <div className='main-wrappers'>
            <div className='content-wrapper popup-background'>
                <div className='content-container popmsg'>
                    <h2>
                        <b>{props.msg}</b>
                    </h2>
                    <img className='width' src={smile}></img>
                    <div className='popupans'>
                        <h2>Yay..!! It&rsquo;s </h2>
                        <img className='ml--10 width' src={props.img} />
                        <audio
                            className='background-audio d-none'
                            controls
                            autoPlay
                            src={win}
                        ></audio>
                        <h2 className='ml--10'> {props.answer}</h2>
                        {props.btntext && (
                            <NavLink to='/landingPage'>
                                <Confetti />
                                {/* <img className='width' src={trophy}></img> */}
                                <audio
                                    className='background-audio d-none'
                                    controls
                                    autoPlay
                                    src={nextlevel}
                                ></audio>
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
export default RightPopupData;
