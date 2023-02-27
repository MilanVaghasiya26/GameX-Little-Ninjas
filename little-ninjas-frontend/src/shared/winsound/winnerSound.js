import React from 'react';
import win from '../../assets/music/win.mp3';
const WinMusic = () => {
    <audio
        className='background-audio d-none'
        loop={true}
        controls
        autoPlay
        src={win}
    />;
};

export default WinMusic;
