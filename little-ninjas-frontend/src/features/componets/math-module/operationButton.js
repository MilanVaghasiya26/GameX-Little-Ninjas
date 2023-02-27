import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../.../../../../assets/images/Home.png';
import close from '../../../../src/assets/images/Close.png';
import '../math-module/operationButton.scss';
import polygon1 from '../../../../src/assets/images/Polygon1.png';
import polugon2 from '../../../../src/assets/images/Polygon2.png';
import mathopration from '../../../../src/assets/images/mathopration.png';
import '../../../assets/styles/common/responsive.scss';
const MathButton = () => {
    const [username, setUsername] = useState('');

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
                <button className='user-btn  position--absolute  postion-right--60'>
                    <p className='uservalue text--capitalize'>
                        {sessionStorage.getItem('user')}
                    </p>
                </button>
            </div>
            <div className='module-container bg full-viewport-height overflow--hidden-y flex justify__content--center  align__items--center'>
                <div className=' flex  position--absolute   align__items--center flex--column'>
                    <img
                        className='position--relative postion--top-43 width--200 responsive--mathoperation'
                        src={mathopration}
                    />

                    <div className='flex align__items--center justify__content--center  '>
                        <div className='btn-wrapper'>
                            <img
                                className='height--30 polygone d-none'
                                src={polygon1}
                            />
                            <NavLink to='additionModule'>
                                <div className='math-btn-blue'>Addition</div>
                            </NavLink>
                            <img
                                className='height--30 polygone d-none'
                                src={polugon2}
                            />
                        </div>
                    </div>

                    <div className='flex align__items--center justify__content--center  '>
                        <div className='btn-wrapper'>
                            <img className='height--30 d-none' src={polygon1} />
                            <NavLink to='subtractionModule'>
                                <div className='math-btn-blue'>
                                    Substraction
                                </div>
                            </NavLink>
                            <img
                                className=' height--30 d-none'
                                src={polugon2}
                            />
                        </div>
                    </div>

                    <div className='flex align__items--center justify__content--center  '>
                        <div className='btn-wrapper'>
                            <img className='height--30 d-none' src={polygon1} />
                            <NavLink to='multiplicationModule'>
                                <div className='math-btn-blue'>
                                    Multiplication
                                </div>
                            </NavLink>
                            <img className='height--30 d-none' src={polugon2} />
                        </div>
                    </div>

                    <div className='flex align__items--center justify__content--center  '>
                        <div className='btn-wrapper'>
                            <img className='height--30 d-none' src={polygon1} />
                            <NavLink to='divisionModule'>
                                <div className='math-btn-blue'> Division</div>
                            </NavLink>
                            <img className='height--30 d-none' src={polugon2} />
                        </div>
                    </div>
                </div>
            </div>
            {/*</div>*/}
        </>
    );
};

export default MathButton;
