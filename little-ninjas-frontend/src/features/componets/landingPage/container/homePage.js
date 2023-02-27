import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../style/landingPage.scss';
import '../../../../assets/styles/common/common.scss';
import homepage from '../../../../assets/images/Home.png';
import '../../../../assets/styles/common/responsive.scss';
const Home = (props) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(props.location?.state?.myName);
    }, []);

    return (
        <>
            <div className='position--absolute mt--30 ml--100'>
                <NavLink
                    to={{
                        pathname: `${props.username && 'mainpage'}`,
                    }}
                >
                    <img className=' width--50 ' src={homepage} />
                </NavLink>
            </div>
            <div className='position--absolute postion-right-40 postion-top--35'>
                <button className='user-btn '>
                    <p className='uservalue text--capitalize'>
                        {sessionStorage.getItem('user')}
                    </p>
                </button>
            </div>
            <div className='main-Container bg full-viewport-height overflow--hidden-y flex justify__content--center  align__items--center '>
                <div className=' flex  align__items--center flex--column'>
                    <p className=' mt--70 font-size--18 text--center '>
                        Hey!! &nbsp;
                        <span className='color--brown text--capitalize'>
                            {sessionStorage.getItem('user')} ,
                        </span>
                        &nbsp;What would you like to learn today?
                    </p>
                    <NavLink
                        to={{
                            pathname: 'identify',
                            state: {
                                myName: username,
                            },
                        }}
                    >
                        <button className=' height--50 w--250 mt--25 border-radius--35 font--bold pointer mode-btn module-btn1-bg-color btn1-border--2px btn1--box-shadow hover-button-identify animation--left responsive--width'>
                            Identify
                        </button>
                    </NavLink>
                    <NavLink
                        to={{
                            pathname: 'counting',
                            state: {
                                myName: username,
                            },
                        }}
                    >
                        <button className=' mode-btn height--50 w--250 mt--25 border-radius--35 font--bold pointer module-btn2-bg-color btn2-border--2x btn2--box-shadow hover-button-counting animation--right responsive--width'>
                            Counting
                        </button>
                    </NavLink>
                    <NavLink
                        to={{
                            pathname: 'math-opration',
                            state: {
                                myName: username,
                            },
                        }}
                    >
                        <button className='height--50 w--250 mt--25 border-radius--35 font--bold mode-btn pointer module-btn3-bg-color btn3-border--2x btn3--box-shadow hover-button-maths animation--left responsive--width'>
                            Math Operations
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};
export default withRouter(Home);
