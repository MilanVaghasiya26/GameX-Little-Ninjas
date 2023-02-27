import React, { useState } from 'react';
import soundoff from '../../../assets/images/soundoff.png';
import soundon from '../../../assets/images/soundon.png';
import sound from '../../../assets/music/backgroundsound.mp3';
function Musicbtn() {
    const [isActive, setIsActive] = useState('false');
    const [music, setMusic] = useState('false');
    const MusicOnOff = () => {
        setIsActive(!isActive);
        setMusic(!music);
    };
    return (
        <>
            <img
                onClick={MusicOnOff}
                className='music-on width--50 no-border pointer  '
                src={isActive ? soundon : soundoff}
            />
            <audio
                className='background-audio d-none'
                loop={true}
                controls
                autoPlay
                src={music ? sound : ''}
            />
        </>
    );
}
export default Musicbtn;
