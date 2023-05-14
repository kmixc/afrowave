import React from 'react'
import Logo from '../img/Afrowave.svg'
import Video from '../img/AFROWAVE_PROMO_VIDEO.mp4'
import EventFlyer from '../img/afrowave_2023/EVENT_1920_1080.jpg'
import EventFlyer2 from '../img/afrowave_2023/EVENT_VERT.jpg'

export default function Home() {
    return (
        <div>
            <main>
                <div className="relative h-screen">
                    <div className='flex absolute z-[-60] overflow-hidden'>
                        <video autoplay="autoplay" loop="loop" muted defaultMuted playsInline style={{ maxWidth: "1000%" }} id='myVideo'>
                            <source src={Video}></source>
                        </video>
                    </div>
                    <div className="mx-auto max-w-3xl pb-32 pt-36 sm:pb-40 drop">
                        <div>
                            <div className='center'>
                                <img className='logo' src={Logo} alt="afrowave logo" />
                                <p className='home-info'><span className='afrowave-color'>TICKETS ON SALE NOW</span></p>
                                <p className='home-info'>JUNE 17TH, 2023</p>
                                <p className='home-info'>HISTORY - TORONTO, ON</p>
                                <div className="mt-8 flex gap-x-4 justify-center">
                                    <a
                                        href="/contact"
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

            <div className='mx-auto'>
                <div className='flyers p-6 px-2'>
                    <img className='event-flyer' alt='eventflyer1' src={EventFlyer} />
                    <img className='event-flyer-2' alt='eventflyer2' src={EventFlyer2} />
                </div>
            </div>

            <div class="mx-auto bg-zinc-100 video-section">
                <p>RELIVE <span className='afrowave-color'>2022</span></p>
                <div className='video'>
                    <video loop="loop" controls id='Video2022'>
                        <source src={Video}></source>
                    </video>
                </div>
            </div>

            <div className='sponsors'>
                <p className='title'>FUNDED BY</p>
            </div>
        </div>
    )
}
