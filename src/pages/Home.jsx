import React from 'react'
import Logo from '../img/Afrowave.svg'
import EventFlyer from '../img/afrowave_2023/EVENT_1920_1080.jpg'
import EventFlyer2 from '../img/afrowave_2023/EVENT_VERT.jpg'

import Cards from '../components/Cards'

export default function Home() {
    return (
        <div>
            <main className='bg'>
                <div className="relative h-screen">
                    <div className="mx-auto pb-32 pt-20 sm:pb-40 drop">
                        <div>
                            <div className='center'>
                                <img className='logo' src={Logo} alt="afrowave logo" />
                                <p className='tickets-onsale-home'><span className='afrowave-color'>TICKETS ON SALE NOW</span></p>
                                <p className='date-info-home'>JUNE 15TH, 16TH, 17TH, 2023</p>
                                <p className='location-info-home'>Manifesto HQ & HISTORY - TORONTO, ON</p>
                                <div className='dropdown-ticket'>
                                    <label for="touch"><span>TICKETS 2023</span></label>
                                    <input type="checkbox" id="touch" />

                                    <ul class="slide">
                                        <li><a href="#">June 15th</a></li>
                                        <li><a href="#">June 16th</a></li>
                                        <li><a href="#">June 17th</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div class="mx-auto video-section">
                <p><span className='green-color'>2023</span> PROMO</p>
                <div className='video'>
                    <iframe id='Video2023' src="https://www.youtube.com/embed/JAj0-zSluS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            <Cards />

            <div className='mx-auto'>
                <div className='flyers p-6 px-2'>
                    <img className='event-flyer' alt='eventflyer1' src={EventFlyer} />
                    <img className='event-flyer-2' alt='eventflyer2' src={EventFlyer2} />
                </div>
            </div>

        </div>
    )
}
