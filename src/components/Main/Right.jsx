import React from 'react';
import { motion } from 'framer-motion';
import Hand from '../../images/hand.png';
import Hamburger from '../../images/hamburger.png';
import Pending from '../../images/pending.png';

function Right() {
    return (
        <div className='relative top-[-6rem] md:block hidden'>
            <img src={Hand} alt="hand" className='hand-image h-[37rem] ' />
            <div className='overlay-container flex justify-between z-10 space-x-[-45px] absolute top-0 left-[-5rem] w-full'>
                <motion.img
                    src={Pending}
                    alt="pendingimg"
                    className='h-5 h-[20rem] mt-9 ' // Added negative margin-left to move the image to the left
                    animate={{ x: [0, 40, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                />
                <motion.img
                    src={Hamburger}
                    alt="hamburgerimg"
                    className='h-[20rem] mt-[5rem]  ' // Added negative margin-left to move the image to the left
                    animate={{ x: [0, -40, -20, 0] }}
                    transition={{ repeat: Infinity, duration:4 }}
                />
            </div>
        </div>
    );
}

export default Right;