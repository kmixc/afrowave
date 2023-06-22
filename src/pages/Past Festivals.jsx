import React from 'react'

//2022
import lineup_2022 from '../img/past_festivals/AfrowaveTO_Fest2022.jpg'

//2021
import lineup_2021_1 from '../img/past_festivals/AfrowaveTO_Fest_2021.jpg'
import lineup_2021_2 from '../img/past_festivals/AfrowaveTO_Fest_2021_2.jpg'

export default function Past_Festivals() {
    return (
        <div>
            <div className='spacer'></div>
            <div class="mx-auto video-section">
                <p>RELIVE <span className='green-color'>2022</span></p>
                    <div className='video'>
                        <iframe id='Video2022' src="https://www.youtube.com/embed/z4EDXsji9jQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                <div className='lineup2022'>
                    <img src={lineup_2022} alt="" />
                </div>
            </div>

            <div class="mx-auto video-section">
                <p>RELIVE <span className='green-color'>2021</span></p>
                    <div className='video'>
                        <iframe id='Video2022' src="https://www.youtube.com/embed/-QYVxouG2Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='video'>
                        <iframe id='Video2022' src="https://www.youtube.com/embed/mjOvtN5gLkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                <div className='lineup2021'>
                    <img src={lineup_2021_1} alt="" />
                    <img src={lineup_2021_2} alt="" />
                </div>
                </div>
        </div>
    )
}
