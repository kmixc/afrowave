import React from 'react'

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
                <p>RELIVE <span className='green-color'>2021</span></p>
                <h5>APRIL 24TH</h5>
                <div className='video'>
                    <iframe id='Video2022' src="https://www.youtube.com/embed/-QYVxouG2Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='video'>
                    <iframe id='Video2022' src="https://www.youtube.com/embed/mjOvtN5gLkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='lineup2021'>
                <img src={lineup_2021_1} alt="" />
                <img src={lineup_2021_2} alt="" />
            </div>
            <div className='past-artists'>
                <div className='images'>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_1} alt="Looche_Bodega" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_2} alt="Blessd" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_3} alt="Fito_Blanko" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_4} alt="Alx_Velix" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_5} alt="Aiona_Santana" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_6} alt="Aiona_Santana" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_7} alt="Aiona_Santana" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_8} alt="Aiona_Santana" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_9} alt="Aiona_Santana" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_10} alt="Aiona_Santana" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>ARTIST</p>
                        <img className='past-artist-lineup-image' src={ARTIST_11} alt="Aiona_Santana" />
                    </div>
                </div>
            </div>
        </div>
    )
}
