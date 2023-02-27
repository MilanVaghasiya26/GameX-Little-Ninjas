import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../style/landingPage.scss';
import Musicbtn from 'shared/components/musicButton/music';
import { CloseBtn } from 'shared/components/closeButton/close';

const Home = (props) => {
    const [username, setUsername] = useState('');
    useEffect(() => {
        setUsername(props.location?.state?.myName);
    }, []);

    return (
        <>
            <div className='main-Container bg full-viewport-height overflow--hidden-y '>
                <div className='fixed-background'>
                    <div className='flex justify__content--between mt--50   align__items--center m--0-auto w--40'>
                        <NavLink to='/mainpage'>
                            <CloseBtn />
                        </NavLink>
                        <div className='flex '>
                            <i className='fa fa-user'></i>
                            <div className='pl--10 text--white font-size--23 '>
                                {/*{username}*/}
                                {sessionStorage.getItem('user')}
                            </div>
                        </div>
                        <Musicbtn />
                    </div>
                    <div className=' module-btn-color flex  align__items--center flex--column height--70 '>
                        <NavLink
                            to={{
                                pathname: 'identify',
                                state: {
                                    myName: username,
                                },
                            }}
                        >
                            <button className=' height--50 width--200 mt--10 b-radius--10 font--bold border--4px module-btn-bg-color pointer'>
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
                            <button className='Counting-btn height--50 width--200 mt--10 b-radius--10 font--bold border--4px module-btn-bg-color pointer'>
                                Counting
                            </button>
                        </NavLink>
                        <NavLink
                            to={{
                                pathname: 'oprationButton',
                                state: {
                                    myName: username,
                                },
                            }}
                        >
                            <button className='Math-btn height--50 width--200 mt--10 b-radius--10 font--bold border--4px module-btn-bg-color pointer Math-btn--hover'>
                                <div>Math Operations</div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
export default withRouter(Home);
