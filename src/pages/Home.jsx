import React from 'react'
import Logo from '../img/Afrowave.svg'
import Video from '../img/AFROWAVE_PROMO_VIDEO.mp4'
import EventFlyer from '../img/afrowave_2023/EVENT_1920_1080.jpg'
import EventFlyer2 from '../img/afrowave_2023/EVENT_VERT.jpg'

//Logos
import TAC from '../img/logo_assets/TAC.svg'
import OTF from '../img/logo_assets/OTF.svg'
import CANADA from '../img/logo_assets/wordmark_c.svg'
import CIGOL from '../img/logo_assets/cigol.png'
import FRANCHIZE from '../img/logo_assets/Franchize.png'
import HISTORY from '../img/logo_assets/HISTORY_LOGO.svg'
import LIVENATION from '../img/logo_assets/LiveNation_Logo.png'
import BLESSED from '../img/logo_assets/LOGO_BLESSD.png'
import CLICK from '../img/logo_assets/LOGO_CLIICK_WHITE.png'
import JM2 from '../img/logo_assets/LOGO_JM2.png'

export default function Home() {
    return (
        <div>
            <main className='bg'>
                <div className="relative h-screen">
                    <div className="mx-auto max-w-3xl pb-32 pt-36 sm:pb-40 drop">
                        <div>
                            <div className='center'>
                                <img className='logo' src={Logo} alt="afrowave logo" />
                                <p className='home-info'><span className='afrowave-color'>TICKETS ON SALE NOW</span></p>
                                <p className='home-info'>JUNE 17TH, 2023</p>
                                <p className='home-info'>HISTORY - TORONTO, ON</p>
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

            <div className='mx-auto'>
                <div className='flyers p-6 px-2'>
                    <img className='event-flyer' alt='eventflyer1' src={EventFlyer} />
                    <img className='event-flyer-2' alt='eventflyer2' src={EventFlyer2} />
                </div>
            </div>

            <div class="mx-auto video-section">
                <p>RELIVE <span className='afrowave-color'>2022</span></p>
                <div className='video'>
                    <video loop="loop" controls id='Video2022'>
                        <source src={Video}></source>
                    </video>
                </div>
            </div>

            <div className='sponsors'>
                <p className='title'>FUNDED BY</p>
                <div className='sponsors-images'>
                    <img src={OTF} alt="OFT" />
                    <img src={TAC} alt="TAC" />
                    <img src={CANADA} alt="Canada" />
                    <img src={CIGOL} alt="CIGOL" />
                    <img src={FRANCHIZE} className='FRAN' alt="FRANCHIZE" />
                    <img src={HISTORY} alt="HISTORY" />
                    <img src={LIVENATION} alt="LIVENATION" />
                    <img src={BLESSED} alt="BLESSD" />
                    <img src={CLICK} alt="CLICK" />
                    <img src={JM2} alt="JM2" />
                </div>
            </div>
        </div>
    )
}
