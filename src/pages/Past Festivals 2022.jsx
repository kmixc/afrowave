import React from 'react'

//2022
import lineup_2022 from '../img/past_festivals/AfrowaveTO_Fest2022.jpg'
import DOLO_2022 from '../img/past_festivals/2022/2022_DOLO_THE_GIFTED.jpg'
import DYNESTI_2022 from '../img/past_festivals/2022/2022_DYNESTI.jpg'
import PROJEXX_2022 from '../img/past_festivals/2022/2022_PROJEXX.jpg'
import SEAN_2022 from '../img/past_festivals/2022/2022_sean_paul.jpg'
import STALK_2022 from '../img/past_festivals/2022/2022_STALK_ASHLEY.jpg'
import ZENESOUL_2022 from '../img/past_festivals/2022/2022_ZENESOUL.jpg'

export default function Past_Festivals() {
    return (
        <div>
            <div className='spacer'></div>
            <div class="mx-auto video-section">
                <p>RELIVE <span className='green-color'>2022</span></p>
                <h5>AUGUST 3RD</h5>
                <div className='video'>
                    <iframe id='Video2022' src="https://www.youtube.com/embed/z4EDXsji9jQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='lineup2022'>
                <img src={lineup_2022} alt="" />
            </div>
            <div className='past-artists'>
                <div className='images'>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>SEAN PAUL</p>
                        <img className='past-artist-lineup-image' src={SEAN_2022} alt="Looche_Bodega" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>DOLO THE GIFTED</p>
                        <img className='past-artist-lineup-image' src={DOLO_2022} alt="Blessd" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>DYNESTI</p>
                        <img className='past-artist-lineup-image' src={DYNESTI_2022} alt="Fito_Blanko" />
                    </div>
                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>PROJEXX</p>
                        <img className='past-artist-lineup-image' src={PROJEXX_2022} alt="Alx_Velix" />
                    </div>

                    <div className='past-artist-lineup-card'>
                        <p className='past-artist-lineup-name'>STALK ASHLEY</p>
                        <img className='past-artist-lineup-image' src={STALK_2022} alt="Aiona_Santana" />
                    </div>
                </div>
            </div>
        </div>
    )
}
