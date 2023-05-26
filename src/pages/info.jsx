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
