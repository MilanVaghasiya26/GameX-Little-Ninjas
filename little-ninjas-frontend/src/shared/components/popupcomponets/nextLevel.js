import React from 'react';
import './newLevel.scss';
import '../../../assets/styles/common/common.scss';
import nextlevel from '../../../assets/music/nextlevel.mp3';
import { NavLink, useHistory } from 'react-router-dom';
// import trophy from '../../../assets/images/trophy.png';
import closebtn from '../../../assets/images/Close.png';
import trophy from '../../../assets/images/trophy.png';
import win from '../../../assets/music/Correctanswer.mp3';
//import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const NextLevel = (props) => {
    const history = useHistory();
    const nextLevel = () => {
        if (props.btntext === 'Counting') {
            history.push('/counting');
        } else if (props.btntext === 'Math operations') {
            history.push('/math-opration');
        } else if (props.btntext === 'substraction') {
            history.push('/subtractionModule');
        } else if (props.btntext === 'Multiplication') {
            history.push('/multiplicationModule');
        } else if (props.btntext === 'Division') {
            history.push('/divisionModule');
        }
    };
    return (
        <>
            <div className='wrapper'>
                <div className='nextlevel'>
                    <Confetti />
                    <div className='content-container popmsg'>
                        <NavLink to='/homepage'>
                            <img
                                className='width--50 ml--330'
                                src={closebtn}
                            ></img>
                        </NavLink>

                        <h2>
                            <b>Next Level</b>
                        </h2>
                        <img className='width' src={trophy}></img>
                        <div className='popupans'>
                            {/*<h2>Yay..!! It is </h2>*/}
                            {/*<img className='width' src={props.img} />*/}
                            <audio
                                className='background-audio d-none'
                                controls
                                autoPlay
                                src={win}
                            ></audio>
                            {/*<h2> {props.answer}</h2>*/}
                            {props.btntext && (
                                <div>
                                    <audio
                                        className='background-audio d-none'
                                        controls
                                        autoPlay
                                        src={nextlevel}
                                    ></audio>
                                    <button
                                        className=' mode-btn height--40 w--250 mt--25 border-radius--35 font--bold pointer module-btn2-bg-color btn2-border--2x btn2--box-shadow pointer animate'
                                        onClick={nextLevel}
                                    >
                                        {props.btntext}
                                    </button>
                                </div>
                            )}
                        </div>
                        {/* <h1>{props.response}</h1> */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default NextLevel;
