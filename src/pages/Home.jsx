import React from 'react'
import Logo from '../img/Afrowave.svg'

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
                                        <a href="https://www.eventbrite.com/e/afrowaveto-showcase-part-1-tickets-645943663887?aff=oddtdtcreator" target='tickets'><li>June 15th</li></a>
                                        <a href="https://www.eventbrite.com/e/afrowaveto-showcase-part-2-tickets-645940063117?aff=oddtdtcreator" target='tickets'><li>June 16th</li></a>
                                        <a href="https://www.ticketmaster.ca/afrowaveto-presents-blessd-toronto-ontario-06-17-2023/event/10005E7F0FC746BD" target='tickets'><li>June 17th</li></a>
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

        </div>
    )
}
