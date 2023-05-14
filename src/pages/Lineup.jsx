import React from 'react'

//ARTISTS
import Artist_1 from "../img/afrowave_2023/Blessd_VERT.jpg"
import Artist_2 from "../img/afrowave_2023/Fito_blanko_VERT.png"
import Artist_3 from "../img/afrowave_2023/Alx_veliz_VERT.png"
import Artist_4 from "../img/afrowave_2023/Looch_bodega_VERT.png"
import Artist_5 from "../img/afrowave_2023/Aiona_santana_VERT.png"
import Artist_6 from "../img/afrowave_2023/Bebeboy_VERT.png"
import Artist_1_SQUARE from "../img/afrowave_2023/Blessd_SQUARE.jpg"
import Artist_2_SQUARE from "../img/afrowave_2023/Fito_blanko_SQUARE.png"
import Artist_3_SQUARE from "../img/afrowave_2023/Alx_Veliz_SQUARE.png"
import Artist_4_SQUARE from "../img/afrowave_2023/Looch_bodega_SQUARE.png"
import Artist_5_SQUARE from "../img/afrowave_2023/Aiona_santana_SQUARE.png"
import Artist_6_SQUARE from "../img/afrowave_2023/Bebeboy_SQUARE.png"

//DJS
import DJ_1 from "../img/afrowave_2023/Ep_the_latino_VERT.png"
import DJ_2 from "../img/afrowave_2023/Danny_Castro_VERT.png"
import DJ_1_SQUARE from "../img/afrowave_2023/Ep_the_latino_SQUARE.png"
import DJ_2_SQUARE from "../img/afrowave_2023/Danny_castro_SQUARE.png"

//HOSTED BY
import HOST_1 from "../img/afrowave_2023/Lexxicon_VERT.png"
import HOST_2 from "../img/afrowave_2023/Dolothegifted_VERT.png"
import HOST_1_SQUARE from "../img/afrowave_2023/Lexxicon_SQUARE.png"
import HOST_2_SQUARE from "../img/afrowave_2023/Dolothegifted_SQUARE.png"


export default function Lineup() {
    return (
        <div>
            <div className='spacer'></div>
            <div className='artists'>
                <p className='title'>ARTIST LINEUP</p>
                <div className='images'>
                    <img src={Artist_1} alt="Blessd" />
                    <img src={Artist_2} alt="Fito_blanko" />
                    <img src={Artist_3} alt="Alx_veliz" />
                    <img src={Artist_4} alt="Looch_bodega" />
                    <img src={Artist_5} alt="Aiona_santana" />
                    <img src={Artist_6} alt="Bebeboy" />
                </div>
                <div className="images-ios">
                    <img src={Artist_1_SQUARE} alt="Blessd" />
                    <img src={Artist_2_SQUARE} alt="Fito_blanko" />
                    <img src={Artist_3_SQUARE} alt="Alx_veliz" />
                    <img src={Artist_4_SQUARE} alt="Looch_bodega" />
                    <img src={Artist_5_SQUARE} alt="Aiona_santana" />
                    <img src={Artist_6_SQUARE} alt="Bebeboy" />
                </div>
            </div>
            <div className="djs">
                <p className='title'>DJS</p>
                <div className="images">
                    <img src={DJ_1} alt="Ep_the_latino" />
                    <img src={DJ_2} alt="Danny_Castro" />
                </div>
                <div className="images-ios">
                    <img src={DJ_1_SQUARE} alt="Ep_the_latino" />
                    <img src={DJ_2_SQUARE} alt="Danny_Castro" />
                </div>
            </div>
            <div className='hosts'>
                <p className='title'>HOSTS</p>
                <div className="images">
                    <img src={HOST_1} alt="Lexxicon" />
                    <img src={HOST_2} alt="Dolothegifted" />
                </div>
                <div className="images-ios">
                    <img src={HOST_1_SQUARE} alt="Lexxicon" />
                    <img src={HOST_2_SQUARE} alt="Dolothegifted" />
                </div>
            </div>
        </div>
    )
}
