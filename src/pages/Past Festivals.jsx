import React from 'react'

//2022
import Video2022 from '../img/AFROWAVE_PROMO_VIDEO.mp4';
import lineup_2022 from '../img/past_festivals/AfrowaveTO_Fest2022.jpg'

//2021
import Video2021 from '../img/past_festivals/PROMO_AFROWAVE_FEST_2022_1.mp4'
import lineup_2021_1 from '../img/past_festivals/AfrowaveTO_Fest_2021.jpg'
import lineup_2021_2 from '../img/past_festivals/AfrowaveTO_Fest_2021_2.jpg'

export default function Past_Festivals() {
    return (
        <div>
            <div className='spacer'></div>
            <div class="mx-auto video-section">
                <p>RELIVE <span className='green-color'>2022</span></p>
                <div className='video'>
                    <video loop="loop" controls id='Video2022'>
                        <source src={Video2022}></source>
                    </video>
                </div>
                <div className='lineup2022'>
                    <img src={lineup_2022} alt="" />
                </div>
            </div>

            <div class="mx-auto video-section">
                <p>RELIVE <span className='green-color'>2021</span></p>
                <div className='video'>
                    <video loop="loop" controls id=''>
                        <source src={Video2021}></source>
                    </video>
                </div>
                <div className='lineup2021'>
                    <img src={lineup_2021_1} alt="" />
                    <img src={lineup_2021_2} alt="" />
                </div>
            </div>

        </div>
    )
}
