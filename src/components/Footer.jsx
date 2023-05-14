import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='socials'>
                <a href='https://www.instagram.com/afrowaveto/' target='socials' class="fa-brands fa-instagram"> </a>
                <a href='https://twitter.com/AfroWaveTO' target='socials' class="fa-brands fa-twitter"> </a>
                <a href='https://www.facebook.com/AfroWaveTO/' target='socials' class="fa-brands fa-facebook"> </a>
                <a href='https://www.youtube.com/channel/UCR6RTGZE0XDulKVXSUqeAIQ' target='socials' class="fa-brands fa-youtube"> </a>
                <a href='https://open.spotify.com/user/i9txq4ve9kf8knyakj28qp8ac' target='socials' class="fa-brands fa-spotify"> </a>
                <a href="mailto:afrowavetoronto@gmail.com" target='socials'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> </a>
            </div>
        </div>
    )
}
