import React from 'react'

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

export default function info() {
    return (
        <div>
            <div className='spacer'></div>

            <div className="info">

                <div className="dates-info">
                    <p className='title sm:text-5xl text-3xl'>date</p>
                    <hr />
                    <p className='desc sm:text-xl text-md'>JUNE 15TH, 16TH, 17TH, 2023</p>
                </div>

                <div className="location-info">
                    <p className='title sm:text-5xl text-3xl'>location</p>
                    <hr />
                    <p className='desc sm:text-xl text-md'>June 15TH & June 16TH: Manifesto HQ is located at Unit 501-130 Queens Quay E, Toronto, ON M5A 0P6, Canada. Doors Open at 7:00pm, show starts at 8:00pm.</p>
                    <br />
                    <p className='desc sm:text-xl text-md'>June 17TH: History - Toronto, Ontario is conveniently located at 1663 Queen Street East (just east of Coxwell Avenue) in The Beaches neighbourhood.</p>
                </div>

                <div className="parking-info">
                    <p className="title sm:text-5xl text-3xl">parking</p>
                    <hr />
                    <p className='desc sm:text-xl text-md pb-5'>Add parking to your ticket purchase for a guaranteed space in the parking lot nearest to the venue, conveniently located at 1167 Eastern Avenue (behind the venue, south of the Green P). If parking is still available when you complete your ticketing transaction, you will be prompted if you want to purchase a spot.</p>

                    <p className='desc sm:text-xl text-md pb-5'>If you have already purchased your show tickets and would like to add parking, select the show from this link, and follow the prompts to complete the transaction.</p>

                    <p className='desc sm:text-xl text-md'>Parking is also available for purchase from the lot on the night of the show, based on availability. To avoid disappointment, purchase your parking tickets in advance.</p>
                </div>

                <div className="ticket-info">
                    <p className="title sm:text-5xl text-3xl">tickets</p>
                    <hr />
                    <a className='ticket-btn' href="#">Purchase</a>
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
