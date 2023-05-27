import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { Autoplay } from "swiper";

//card images
import blessd_card from '../img/card_assets/blessd_card.jpg'
import fito_blanko_card from '../img/card_assets/fito_blanko_card.jpg'
import alx_veliz_card from '../img/card_assets/alx_veliz_card.jpg'
import looch_bodega_card from '../img/card_assets/looch_bodega_card.jpg'
import aiona_santana_card from '../img/card_assets/aiona_santana_card.jpg'
import bebeboy_card from '../img/card_assets/bebeboy_card.jpg'

import DJ_1_SQUARE from "../img/afrowave_2023/Ep_the_latino_SQUARE.png"
import DJ_2_SQUARE from "../img/afrowave_2023/Danny_castro_SQUARE.png"
import HOST_1_SQUARE from "../img/afrowave_2023/Lexxicon_SQUARE.png"
import HOST_2_SQUARE from "../img/afrowave_2023/Dolothegifted_SQUARE.png"


export default function Cards() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    380: {
                        width: 380,
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
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='artist-card artist-card-1'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={blessd_card} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Blessd</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-2'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={fito_blanko_card} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Fito Blanko</p>
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
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-6'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={DJ_1_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Ep The Latino</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-6'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={DJ_2_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Danny Castro</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-6'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={HOST_1_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Lexxicon</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='artist-card artist-card-6'>
                        <div>
                            <div className='artist-image'>
                                <img className='artist-image' src={HOST_2_SQUARE} alt="" />
                            </div>
                            <div className='artist-desc'>
                                <p>Dolothegifted</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
