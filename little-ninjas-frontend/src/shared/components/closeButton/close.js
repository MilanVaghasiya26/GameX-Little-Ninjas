import React, { useState } from 'react';
import '../closeButton/close.scss';
import closeicon from '../../..//assets/images/Close.png';
import '../../../../src/features/componets/counting/styles/counting.scss';
export const CloseBtn = () => {
    const [close, setClose] = useState(true);

    const onClose = () => {
        setClose(false);
    };

    return (
        <>
            <div className='ml--120'>
                <img
                    className='width--50 no-border pointer'
                    onClick={onClose}
                    src={closeicon}
                />
            </div>
        </>
    );
};
