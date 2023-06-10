import React from 'react'
import Logo from '../img/Afrowave.svg'
import Video from '../img/AFROWAVE_PROMO_VIDEO.mp4'
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
                                <div className="mt-8 flex gap-x-4 justify-center">
                                    <a
                                        href="#"
                                        className="ticket-button inline-block rounded-none transition"
                                    >
                                        TICKETS 2023
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div class="mx-auto video-section">
                <p><span className='green-color'>2023</span> PROMO</p>
                <div className='video'>
                    <iframe id='Video2022' src="https://www.youtube.com/embed/JAj0-zSluS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
