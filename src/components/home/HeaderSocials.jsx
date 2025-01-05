import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/sameer-sultan41/Muhammad-Sameer-Portfolio' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            <a href='https://dev.to/sameer_sultan_f33c37e1044' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/muhammad-sameer-sultan-bb877523b/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/profile.php?id=100066449539429' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            {/* <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a> */}
        </div>
    );
};

export default HeaderSocials;
