import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";


import { FreeMode, Navigation } from "swiper";

//card images
import blessd_card from '../img/card_assets/blessd_card.jpg'
import fito_blanko_card from '../img/card_assets/fito_blanko_card.jpg'
import alx_veliz_card from '../img/card_assets/alx_veliz_card.jpg'
import looch_bodega_card from '../img/card_assets/looch_bodega_card.jpg'
import aiona_santana_card from '../img/card_assets/aiona_santana_card.jpg'
import bebeboy_card from '../img/card_assets/bebeboy_card.jpg'

import DJ_1_SQUARE from "../img/card_assets/ep_the_latino_card.png"
import DJ_2_SQUARE from "../img/card_assets/danny_castro_card.png"
import HOST_1_SQUARE from "../img/card_assets/lexxicon_card.png"
import HOST_2_SQUARE from "../img/card_assets/DOLOTHEGIFTED_card.png"


export default function Cards() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    375: {
                        width: 390,
                        slidesPerView: 1,
                    },
                    480: {
                        width: 480,
                        slidesPerView: 2,
                    },
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
                navigation={true}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                grabCursor={true}
                modules={[Navigation, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='artist-card artist-card-1'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image artist-image-1' src={blessd_card} alt="" />
                            </div>
                            <div className='artist-desc artist-desc-1'>
                                <p>Blessd</p>
                                <div className='artist-socials artist-socials-1 hide'>
                                    <a href='https://www.instagram.com/blessd/' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UCb164jMdHd94O34bASFbI3Q' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/1TA5sGRlKUJXBN4ZyJuDIX' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>artist</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-2'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image artist-image-2' src={fito_blanko_card} alt="" />
                            </div>
                            <div className='artist-desc artist-desc-2'>
                                <p>Fito Blanko</p>
                                <div className='artist-socials artist-socials-2 hide'>
                                    <a href=' https://www.instagram.com/fitoblanko/' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UC_QEYtU1nHUuLIhXPhXgnhA' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/5eYDJJfPXinVZq2mXleOSW' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>artist</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-3'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={alx_veliz_card} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Alx Veliz</p>
                                <div className='artist-socials artist-socials-3 hide'>
                                    <a href='https://www.instagram.com/alxvelizmusic/' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UCWdGyXa3eo15Q6KvfLLzZSQ' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/17rnpuu2LApoCL4x8fObZg' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>artist</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-4'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={looch_bodega_card} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Looch Bodega</p>
                                <div className='artist-socials artist-socials-4 hide'>
                                    <a href='https://www.instagram.com/loochbodega/?hl=en' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UChVGL3ZNCSfjkoDP2iS4awA' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/5TNT63dfbk6WMyYfJl7r82' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>artist</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-5'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={aiona_santana_card} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Aiona Santana</p>
                                <div className='artist-socials artist-socials-5 hide'>
                                    <a href='https://www.instagram.com/aionasantana/?hl=en' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UCCK7GOMuqt6ErXrXzf-KtIw' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/66GmDoscCxEGpqdJdgLUOD' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>artist</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-6'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={bebeboy_card} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Bebeboy</p>
                                <div className='artist-socials artist-socials-6 hide'>
                                    <a href='https://www.instagram.com/bebeboywurld/?hl=en' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UC2EjpTw8AvUJSejn8n48KPA' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/3hBijYmf6uAE6PKfL9CNLk' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>artist</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-7'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={DJ_1_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Ep The Latino</p>
                                <div className='artist-socials artist-socials-7 hide'>
                                    <a href='https://www.instagram.com/epthelatino/' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/@epthelatino' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/user/platas07?si=wLD1pl0qS7mA3B8OSEejoA&nd=1' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>DJ</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-8'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={DJ_2_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Danny Castro</p>
                                <div className='artist-socials artist-socials-8 hide'>
                                    <a href='https://www.instagram.com/djdannycastro/?hl=en' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UCrgMf9DYcF8tVJIBxsHrkhw' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/6RPBBklXU1zi4FPP7GnEe6' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>DJ</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-9'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={HOST_1_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Lexxicon</p>
                                <div className='artist-socials artist-socials-9 hide'>
                                    <a href='https://www.instagram.com/officialexxicon/' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UCHuCCySni7JSBKYTY0DAmVA' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/2nMUTSpUyvbaC5XLPLEBiw?si=1K7pGZWkSM2KyOQZ1qBzbw&dl_branch=1&nd=1' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>host</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-10'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={HOST_2_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Dolothegifted</p>
                                <div className='artist-socials artist-socials-10 hide'>
                                    <a href='https://www.instagram.com/dolothegifted/?hl=en' target='socials' class="fa-brands fa-instagram"> </a>
                                    <a href='https://www.youtube.com/channel/UCblndT1vrjeUfEXGC4GU_Cg' target='socials' class="fa-brands fa-youtube"> </a>
                                    <a href='https://open.spotify.com/artist/4FtgNmGTOCl0zhshLbfX75' target='socials' class="fa-brands fa-spotify"> </a>
                                </div>
                                <h6 className='circle'>host</h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
