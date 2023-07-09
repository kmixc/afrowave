import React from 'react'

//2022
import lineup_2022 from '../img/past_festivals/AfrowaveTO_Fest2022.jpg'
import DOLO_2022 from '../img/past_festivals/2022/2022_DOLO_THE_GIFTED.jpg'
import DYNESTI_2022 from '../img/past_festivals/2022/2022_DYNESTI.jpg'
import PROJEXX_2022 from '../img/past_festivals/2022/2022_PROJEXX.jpg'
import SEAN_2022 from '../img/past_festivals/2022/2022_sean_paul.jpg'
import STALK_2022 from '../img/past_festivals/2022/2022_STALK_ASHLEY.jpg'
import ZENESOUL_2022 from '../img/past_festivals/2022/2022_ZENESOUL.jpg'

//2021
import lineup_2021_1 from '../img/past_festivals/AfrowaveTO_Fest_2021.jpg'
import lineup_2021_2 from '../img/past_festivals/AfrowaveTO_Fest_2021_2.jpg'
import ARTIST_1 from '../img/past_festivals/2021/2021_1.jpg'
import ARTIST_2 from '../img/past_festivals/2021/2021_2.jpg'
import ARTIST_3 from '../img/past_festivals/2021/2021_3.jpg'
import ARTIST_4 from '../img/past_festivals/2021/2021_4.jpg'
import ARTIST_5 from '../img/past_festivals/2021/2021_5.jpg'
import ARTIST_6 from '../img/past_festivals/2021/2021_6.jpg'
import ARTIST_7 from '../img/past_festivals/2021/2021_7.jpg'
import ARTIST_8 from '../img/past_festivals/2021/2021_8.jpg'
import ARTIST_9 from '../img/past_festivals/2021/2021_9.jpg'
import ARTIST_10 from '../img/past_festivals/2021/2021_10.jpg'
import ARTIST_11 from '../img/past_festivals/2021/2021_11.jpg'

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
                <div className='artists_2022'>
                    <img src={DOLO_2022} alt="" />
                    <img src={DYNESTI_2022} alt="" />
                    <img src={PROJEXX_2022} alt="" />
                    <img src={SEAN_2022} alt="" />
                    <img src={STALK_2022} alt="" />
                    <img src={ZENESOUL_2022} alt="" />
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
                <div className='artists_2022'>
                    <img src={ARTIST_1} alt="" />
                    <img src={ARTIST_2} alt="" />
                    <img src={ARTIST_3} alt="" />
                    <img src={ARTIST_4} alt="" />
                    <img src={ARTIST_5} alt="" />
                    <img src={ARTIST_6} alt="" />
                    <img src={ARTIST_7} alt="" />
                    <img src={ARTIST_8} alt="" />
                    <img src={ARTIST_9} alt="" />
                    <img src={ARTIST_10} alt="" />
                    <img src={ARTIST_11} alt="" />
                </div>
                </div>
        </div>
    )
}
