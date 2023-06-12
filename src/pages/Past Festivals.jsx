import React from 'react'
import Video from '../img/AFROWAVE_PROMO_VIDEO.mp4'

export default function Past_Festivals() {
    return (
        <div>
            <div className='spacer'></div>
            <div class="mx-auto video-section">
                <p>RELIVE <span className='afrowave-color'>2022</span></p>
                <div className='video'>
                    <video loop="loop" controls id='Video2022'>
                        <source src={Video}></source>
                    </video>
                </div>
            </div>

            <div className='gallery'>
                <p>Gallery</p>
            </div>
        </div>
    )
}
